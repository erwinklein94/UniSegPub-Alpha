import importlib
import subprocess
import unittest
from unittest.mock import patch

sitemap = importlib.import_module("generate-sitemap")
audit = importlib.import_module("audit-seo")


class SeoTests(unittest.TestCase):
    def test_historico_nao_muda_com_mtime_de_checkout(self):
        with patch.object(sitemap.subprocess, "run", side_effect=[subprocess.CompletedProcess([], 0, stdout=""), subprocess.CompletedProcess([], 0, stdout="2026-05-17\n")]):
            self.assertEqual(sitemap.last_modified_date("index.html"), "2026-05-17")

    def test_sem_historico_omite_data_em_vez_de_inventar(self):
        with patch.object(sitemap.subprocess, "run", side_effect=FileNotFoundError):
            self.assertIsNone(sitemap.last_modified_date("index.html"))

    def test_dados_da_consulta_participam_da_data(self):
        with patch.object(sitemap.subprocess, "run", return_value=subprocess.CompletedProcess([], 0, stdout="")) as command:
            sitemap.last_modified_date("remuneracao.html")
            self.assertIn("data/remuneracao/pf.json", command.call_args.args[0])
            self.assertNotIn("data/remuneracao/pf-monitor.json", command.call_args.args[0])

    def test_noindex_e_canonical_externo_ficam_fora(self):
        for info in [sitemap.PageInfo("admin.html", None, "noindex,follow"), sitemap.PageInfo("parceiros.html", "https://universosegpub.com.br/anuncie.html", None)]:
            self.assertFalse(sitemap.is_indexable_self_canonical(info))
        self.assertEqual(sitemap.url_for("index.html"), "https://universosegpub.com.br/")
        self.assertEqual(sitemap.url_for("artigos/index.html"), "https://universosegpub.com.br/artigos/")

    def test_site_real_sem_erros_criticos(self):
        result = audit.audit()
        self.assertGreater(result["paginas"], 20)
        self.assertEqual(result["erros"], [])
        self.assertEqual(result["urlsSitemap"], result["paginas"])


if __name__ == "__main__":
    unittest.main()
