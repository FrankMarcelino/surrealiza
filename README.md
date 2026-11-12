# Surrealiza

Site da Surrealiza (Frank Silva): resgate e manutenção de apps feitos com IA
(Lovable, Bolt, v0, Cursor) e modernização de sites.

Publicado pelo GitHub Pages a partir da branch `main`:
https://frankmarcelino.github.io/surrealiza/

Feito sobre o template **Xstar (Gramentheme, ThemeForest)**: o visual, as animações (AOS, carrossel
Swiper, tilt, contadores, faixas de texto correndo) e a marcação são do template.

## Onde mexer

- `index.html`: a página inteira (uma página só).
- `assets/js/config.js`: **número do WhatsApp e textos pré-preenchidos**. É o único lugar para trocar.
- `assets/js/site.js`: monta os links `wa.me` a partir do `config.js`, mostra o número e carrega o Google Analytics depois da página.
- `assets/js/main.js`: comportamento do template (menu, painel lateral, tilt, contadores, carrossel, AOS, acordeões), sem o preloader.
- `assets/css/ajustes.css`: o que foi acrescentado por cima do template (botões de WhatsApp, linha de valor dos pacotes, cases).

## O que foi enxugado do template (sem mudar o visual)

- `assets/css/bootstrap.min.css` e `assets/css/main.css`: só com as regras que o `index.html` usa (PurgeCSS).
  Os originais completos estão no commit `dbd9915`. **Classe nova do template no HTML?** Copie a regra dela do
  original ou rode o PurgeCSS de novo sobre o original.
- `assets/css/fa-surrealiza.css` + `assets/webfonts/*-sub.woff2`: Font Awesome Pro 6 só com os ícones usados.
  **Ícone novo?** Acrescente a regra `.fa-NOME:before{content:"\fXXX"}` e recorte o glifo de novo a partir do
  `.ttf` original (commit `dbd9915`) com `pyftsubset`.
- `assets/css/fontes.css`: Manrope e Plus Jakarta Sans no próprio site (antes vinham do Google Fonts).
- Imagens do template em WebP, no mesmo tamanho.

## Outras coisas

- `tools/og-card.html` é a fonte da `assets/img/site/og-image.png` (preview do link no WhatsApp).
- Sem build: editar e dar push. Para ver localmente: `npx serve .` e abrir `/` no navegador.

## Pendências

Procure por `[[PREENCHER` no `index.html` e no `config.js`.
