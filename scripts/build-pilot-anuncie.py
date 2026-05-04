#!/usr/bin/env python3
"""Gera a página piloto anuncie.html a partir de partials estáticos.

Uso:
  python scripts/build-pilot-anuncie.py --check   # compara saída gerada com anuncie.html
  python scripts/build-pilot-anuncie.py --write   # regrava anuncie.html

Este script é propositalmente pequeno e local ao piloto. Ele não altera outras páginas.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

INCLUDE_RE = re.compile(r"^<!--\s*@include\s+([^>]+?)\s*-->\s*$")


def project_root() -> Path:
    return Path(__file__).resolve().parents[1]


def render_template(root: Path, template_path: Path) -> str:
    output: list[str] = []
    for line_no, line in enumerate(template_path.read_text(encoding="utf-8").splitlines(keepends=True), start=1):
        match = INCLUDE_RE.match(line.strip())
        if not match:
            output.append(line)
            continue

        include_path = root / match.group(1).strip()
        if not include_path.is_file():
            raise FileNotFoundError(f"Include não encontrado na linha {line_no}: {include_path}")
        output.append(include_path.read_text(encoding="utf-8"))
    return "".join(output)


def main() -> int:
    parser = argparse.ArgumentParser(description="Gera/valida a página piloto anuncie.html.")
    parser.add_argument("--check", action="store_true", help="Valida se a saída gerada bate com anuncie.html.")
    parser.add_argument("--write", action="store_true", help="Regrava anuncie.html com a saída gerada.")
    args = parser.parse_args()

    root = project_root()
    template = root / "src" / "pages" / "anuncie.template.html"
    output_path = root / "anuncie.html"

    generated = render_template(root, template)

    if args.write:
        output_path.write_text(generated, encoding="utf-8")
        print("OK: anuncie.html gerado a partir do template piloto.")
        return 0

    current = output_path.read_text(encoding="utf-8")
    if generated != current:
        print("ERRO: o template piloto gera uma versão diferente de anuncie.html.", file=sys.stderr)
        print("Rode com --write apenas depois de revisar a diferença.", file=sys.stderr)
        return 1

    print("OK: template piloto gera anuncie.html idêntico ao arquivo atual.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
