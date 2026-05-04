#!/usr/bin/env python3
"""Gera/valida páginas HTML estáticas a partir de templates simples.

Uso:
  python scripts/build-static-pages.py --check
  python scripts/build-static-pages.py --check anuncie
  python scripts/build-static-pages.py --write
  python scripts/build-static-pages.py --write remuneracao

O script usa includes no formato:
  <!-- @include caminho/do/partial.html -->

Ele não altera layout, CSS ou JavaScript. Apenas monta HTML estático.
"""
from __future__ import annotations

import argparse
import difflib
import sys
from pathlib import Path

INCLUDE_PREFIX = "<!-- @include "
INCLUDE_SUFFIX = " -->"


def project_root() -> Path:
    return Path(__file__).resolve().parents[1]


def include_path_from_line(line: str) -> str | None:
    stripped = line.strip()
    if not stripped.startswith(INCLUDE_PREFIX) or not stripped.endswith(INCLUDE_SUFFIX):
        return None
    return stripped[len(INCLUDE_PREFIX):-len(INCLUDE_SUFFIX)].strip()


def render_template(root: Path, template_path: Path) -> str:
    output: list[str] = []
    lines = template_path.read_text(encoding="utf-8").splitlines(keepends=True)

    for line_no, line in enumerate(lines, start=1):
        include_rel = include_path_from_line(line)
        if include_rel is None:
            output.append(line)
            continue

        include_path = root / include_rel
        if not include_path.is_file():
            raise FileNotFoundError(f"Include não encontrado na linha {line_no}: {include_path}")
        output.append(include_path.read_text(encoding="utf-8"))

    return "".join(output)


def page_name_from_template(template_path: Path) -> str:
    name = template_path.name
    if not name.endswith(".template.html"):
        raise ValueError(f"Template inválido: {template_path}")
    return name.replace(".template.html", ".html")


def collect_templates(root: Path, selected: str | None) -> list[Path]:
    templates_dir = root / "src" / "pages"
    if selected:
        selected = selected[:-5] if selected.endswith(".html") else selected
        template = templates_dir / f"{selected}.template.html"
        if not template.is_file():
            raise FileNotFoundError(f"Template não encontrado: {template}")
        return [template]

    return sorted(templates_dir.glob("*.template.html"))


def check_page(root: Path, template: Path, show_diff: bool = False) -> bool:
    output_path = root / page_name_from_template(template)
    generated = render_template(root, template)

    if not output_path.is_file():
        print(f"ERRO: página pública não encontrada: {output_path}", file=sys.stderr)
        return False

    current = output_path.read_text(encoding="utf-8")
    if generated == current:
        print(f"OK: {output_path.name}")
        return True

    print(f"ERRO: template gera versão diferente de {output_path.name}", file=sys.stderr)
    if show_diff:
        diff = difflib.unified_diff(
            current.splitlines(keepends=True),
            generated.splitlines(keepends=True),
            fromfile=f"atual/{output_path.name}",
            tofile=f"gerado/{output_path.name}",
        )
        sys.stderr.writelines(diff)
    return False


def write_page(root: Path, template: Path) -> None:
    output_path = root / page_name_from_template(template)
    generated = render_template(root, template)
    output_path.write_text(generated, encoding="utf-8")
    print(f"OK: {output_path.name} gerado.")


def main() -> int:
    parser = argparse.ArgumentParser(description="Gera/valida HTML estático a partir de templates.")
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--check", action="store_true", help="Valida se os templates geram as páginas públicas atuais.")
    mode.add_argument("--write", action="store_true", help="Regrava páginas públicas a partir dos templates.")
    parser.add_argument("page", nargs="?", help="Página específica sem .html, por exemplo: remuneracao")
    parser.add_argument("--diff", action="store_true", help="Mostra diff quando --check encontra diferença.")
    args = parser.parse_args()

    root = project_root()
    templates = collect_templates(root, args.page)

    if not templates:
        print("ERRO: nenhum template encontrado em src/pages.", file=sys.stderr)
        return 1

    if args.check:
        ok = True
        for template in templates:
            ok = check_page(root, template, show_diff=args.diff) and ok
        return 0 if ok else 1

    for template in templates:
        write_page(root, template)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
