# /public — Assets da LP Fluxa

Coloque cada arquivo com **exatamente o nome listado abaixo** — o código já
aponta para esses caminhos. Enquanto o arquivo não existir, a LP mostra um
placeholder com o nome do slot, sem quebrar o layout.

Todos os caminhos são a partir da raiz do site (ex.: `/logo.svg` no HTML).

## Identidade

| Arquivo                | Onde aparece                            | Formato / tamanho recomendado          |
| ---------------------- | --------------------------------------- | -------------------------------------- |
| `logo.svg`             | Reservado (nav principal usa o mark)    | SVG limpo, cor sólida                  |
| `logo-mark.svg`        | Selo redondo do topo (Nav)              | SVG quadrado, ideal 40×40              |
| `logo-white.svg`       | Rodapé escuro (opcional)                | SVG em Massa Cream sobre Carvão        |
| `favicon.ico`          | Favicon principal (drop em `/app/`)     | 32×32 (mover para `app/favicon.ico`)   |
| `icon.png`             | Ícone PWA / Apple Touch                 | 512×512, PNG                           |
| `og-image.png`         | Preview em WhatsApp/Twitter/etc.        | 1200×630, PNG                          |

> Observação: o Next.js App Router prefere `app/favicon.ico` e `app/icon.png`
> para favicons. Se você mover para `app/`, funciona automaticamente. Deixando
> em `/public/`, referencie manualmente em `layout.tsx`.

## Fotos de produto / hero

| Arquivo               | Onde aparece                                | Formato / tamanho                     |
| --------------------- | ------------------------------------------- | ------------------------------------- |
| `hero-burger.png`     | Produto flutuante do Hero (fundo vermelho)  | PNG **com fundo transparente**, ~1000×1000 |
| `lanas.jpg`           | Foto do case Lanas Burguer                  | JPG 4:5 (ex.: 800×1000)               |
| `kitchen-mockup.png`  | Card do Fluxa Kitchen (na section Foods)    | PNG 4:3 (ex.: 800×600)                |
| `menu-mockup.png`     | Card do Fluxa Cardápio (na section Foods)   | PNG 4:3 (ex.: 800×600)                |

## Como usar

1. Solte os arquivos aqui em `/public/` com os nomes acima.
2. O Next.js serve automaticamente — sem imports, sem config.
3. Restart do dev server só é necessário se você trocar o `layout.tsx` /
   metadata dos favicons.

## Dica: hero-burger.png

Pra o combo do hero ficar como nas referências, exporte o produto **sem fundo**
(transparente). O componente já aplica sombra e brilho por CSS.
