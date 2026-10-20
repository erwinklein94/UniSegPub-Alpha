#!/usr/bin/env python3
"""Confere páginas públicas, metadados, links e sitemap sem serviços externos.

python scripts/audit-seo.py             # diagnóstico resumido
python scripts/audit-seo.py --json      # evidências completas em JSON
python scripts/audit-seo.py --check     # falha diante de erros de rastreamento
"""
import argparse
import collections
import json
import runpy
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
MODEL = runpy.run_path(str(ROOT / "scripts/generate-sitemap.py"))


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title = ""
        self.in_title = False
        self.descriptions = []
        self.canonicals = []
        self.links = []
        self.h1 = 0
        self.schemas = []
        self.schema_text = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "title":
            self.in_title = True
        if tag == "h1":
            self.h1 += 1
        if tag == "meta" and attrs.get("name", "").lower() == "description":
            self.descriptions.append(attrs.get("content", "").strip())
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href", ""))
        if tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self.schema_text = ""

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        if tag == "script" and self.schema_text is not None:
            self.schemas.append(self.schema_text)
            self.schema_text = None

    def handle_data(self, text):
        if self.in_title:
            self.title += text
        if self.schema_text is not None:
            self.schema_text += text


def audit():
    pages = MODEL["collect_pages"]()
    expected = {MODEL["url_for"](p.rel_path) for p in pages}
    errors, warnings, records = [], [], []
    incoming = collections.Counter()
    titles, descriptions = collections.defaultdict(list), collections.defaultdict(list)
    for info in pages:
        page = Page()
        page.feed((ROOT / info.rel_path).read_text(encoding="utf-8"))
        title = page.title.strip()
        description = page.descriptions[0] if len(page.descriptions) == 1 else ""
        if not title or len(page.descriptions) != 1 or not description:
            errors.append(f"{info.rel_path}: título ou descrição ausente/duplicado")
        if page.canonicals != [MODEL["url_for"](info.rel_path)]:
            errors.append(f"{info.rel_path}: canonical deve apontar para a URL pública preferida")
        if not page.h1:
            errors.append(f"{info.rel_path}: título principal H1 ausente")
        elif page.h1 > 1:
            warnings.append(f"{info.rel_path}: {page.h1} H1; revisar hierarquia de títulos")
        for schema in page.schemas:
            try:
                json.loads(schema)
            except (ValueError, TypeError):
                errors.append(f"{info.rel_path}: JSON-LD inválido")
        titles[title].append(info.rel_path)
        descriptions[description].append(info.rel_path)
        for href in page.links:
            url = urlsplit(href)
            if url.scheme and url.scheme not in ("http", "https"):
                continue
            if url.netloc and url.netloc != "universosegpub.com.br":
                continue
            if not url.path:
                continue
            target = ROOT / unquote(url.path).lstrip("/") if url.path.startswith("/") else (ROOT / info.rel_path).parent / unquote(url.path)
            if target.is_dir():
                target /= "index.html"
            if not target.is_file():
                errors.append(f"{info.rel_path}: link local inexistente {href}")
            else:
                incoming[str(target.resolve())] += 1
        records.append({"pagina": info.rel_path, "titulo": title, "descricao": description, "canonical": page.canonicals, "h1": page.h1})
    for label, groups in (("título", titles), ("descrição", descriptions)):
        for value, paths in groups.items():
            if value and len(paths) > 1:
                errors.append(f"{label} repetido: {', '.join(paths)}")
    for info in pages:
        if not incoming[str((ROOT / info.rel_path).resolve())]:
            warnings.append(f"{info.rel_path}: sem link de entrada estático entre as páginas do sitemap")
    namespace = {"s": MODEL["SITEMAP_NS"]}
    locations = [n.text for n in ET.parse(ROOT / "sitemap.xml").findall("s:url/s:loc", namespace)]
    if set(locations) != expected or len(locations) != len(expected):
        errors.append("sitemap.xml: lista de URLs difere das páginas públicas canônicas")
    robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
    if "Sitemap: https://universosegpub.com.br/sitemap.xml" not in robots:
        errors.append("robots.txt: sitemap preferido ausente")
    for path in ROOT.glob("admin*.html"):
        info = MODEL["read_page_info"](path)
        if "noindex" not in (info.robots or "").lower():
            errors.append(f"{path.name}: página administrativa sem noindex")
    return {"paginas": len(pages), "urlsSitemap": len(locations), "erros": errors, "avisos": warnings, "detalhes": records}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--json", action="store_true")
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    result = audit()
    if args.json:
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        print(f"SEO: {result['paginas']} páginas públicas; {result['urlsSitemap']} URLs no sitemap; {len(result['erros'])} erros; {len(result['avisos'])} avisos.")
        for label, key in (("ERRO", "erros"), ("AVISO", "avisos")):
            for message in result[key]:
                print(f"{label}: {message}")
    raise SystemExit(1 if args.check and result["erros"] else 0)
