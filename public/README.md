# /public — Assets da LP Fluxa

Coloque cada arquivo com **exatamente o nome listado abaixo** — o código já
aponta pra esses caminhos. Enquanto o arquivo não existir, a LP mostra um
placeholder discreto (fundo cinza para fotos, glow morna para PNGs 3D).

Todos os caminhos são a partir da raiz do site (ex.: `/logo-mark.svg` no HTML).

## Identidade

| Arquivo               | Onde aparece                                | Formato                     |
| --------------------- | ------------------------------------------- | --------------------------- |
| `logo-mark.svg`       | Elipse branca com anel vermelho (Nav+Footer)| SVG quadrado                |
| `favicon.ico`         | Favicon (mover pra `app/favicon.ico`)       | 32×32                       |
| `icon.png`            | Ícone PWA / Apple Touch (já enviado)        | 512×512                     |
| `og-image.png`        | Preview em WhatsApp/Twitter                 | 1200×630                    |

## Hero — Composição 3D full-screen

| Arquivo         | Onde aparece                                       | Formato                              |
| --------------- | -------------------------------------------------- | ------------------------------------ |
| `hero-3d.png`   | Background do hero (blur 2px + overlay branco 30%) | PNG amplo, ~1600×1000, alta qualidade |

O CSS aplica overlay branco 30% + backdrop-blur 2px por cima, deixando a
composição etérea atrás do texto. Pode ser um pack shot amplo, mesa posta,
combo espalhado — qualquer coisa que respire "gastronomia moderna 3D".

## Ícones 3D dos cards (comidas)

PNGs **com fundo transparente**. O `.icon-3d-slot` aplica uma glow morna
brasa por trás como spotlight. Renders quadrados 400–800px.

| Arquivo             | Onde aparece                                              |
| ------------------- | --------------------------------------------------------- |
| `food-burger.png`   | Problema (Apps de Delivery) · Pilar 02 (Fluxa Kitchen) · Dupla (Restaurante) |
| `food-fries.png`    | Problema (Agências de Marketing) · Pilar 03 (Conversão)   |
| `food-drink.png`    | Problema (Fluxa, card escuro) · Pilar 05 (Comunidade) · Dupla (Consumidor) |
| `food-pizza.png`    | Pilar 01 (Aquisição, card largo)                          |
| `food-donut.png`    | Pilar 04 (Fluxa Points & Database, card escuro largo)     |

### Dica

Exporte os renders **sem sombra própria** — o CSS aplica um leve backdrop
morno atrás. Prefira poses centralizadas, escala consistente entre eles.

## Case Lanas Burguer

| Arquivo             | Onde aparece                                   | Formato                     |
| ------------------- | ---------------------------------------------- | --------------------------- |
| `lanas.jpg`         | Foto grande do burger (4:5 no card do case)    | JPG 4:5 (ex.: 800×1000)     |
| `lanas-owner.jpg`   | Avatar circular do fundador (ao lado do quote) | JPG quadrado (~200×200)     |

## Dupla Audiência

| Arquivo               | Onde aparece                                | Formato                     |
| --------------------- | ------------------------------------------- | --------------------------- |
| `dual-audience.jpg`   | Foto grande à esquerda (consumidor + dono)  | JPG paisagem (~1200×1500)   |

## Como usar

1. Solte os arquivos em `/public/` com os nomes acima.
2. Next.js serve automaticamente — sem imports.
3. Hot reload funciona no dev — sem restart.

## Estrutura visual do layout

```
Hero              → bg hero-3d.png, overlay blanco, texto centralizado
Problema          → 3 cards; card Fluxa em preto (Apple dark accent)
Pilares (5)       → 2 grandes largos (Aquisição, Points) + 3 normais
                    Points é o dark accent card
Dupla Audiência   → Imagem à esquerda + 2 blocos com ícones à direita
Case Lanas        → Card cinza full-width com quote + avatar + foto burger
Form Parceria    → Centralizado, inputs pill cinza
Fluxa Foods       → Banner minimalista com link pra flxa.space
Footer            → Logo + Produtos + Institucional
```
