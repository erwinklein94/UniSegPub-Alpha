# Notícias temporariamente oculta

Em 18/10/2026, por solicitação do proprietário: links para Notícias são ocultos
e removidos da navegação em js/ui/head.js. A URL noticias.html redireciona para
index.html, tem noindex e corpo oculto. Conteúdo integral preservado no arquivo.
A URL foi retirada do sitemap. Para reativar: retirar o bloco de redirecionamento
e hidden do body em noticias.html, retirar o bloco inicial de ocultação em
head.js, restaurar a entrada no sitemap e renovar a versão de head.js nos HTMLs.
Os destaques de concursos na página inicial permanecem acessíveis.
