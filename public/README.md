# /public — Assets da LP Fluxa

Coloque cada arquivo com **exatamente o nome listado abaixo** — o código já
aponta pra esses caminhos. Enquanto o arquivo não existir, a LP mostra um
placeholder discreto (glow morno para PNGs 3D, ou label para fotos).

Todos os caminhos são a partir da raiz do site (ex.: `/logo-mark.svg` no HTML).

## Identidade

| Arquivo               | Onde aparece                                | Formato / tamanho                       |
| --------------------- | ------------------------------------------- | --------------------------------------- |
| `logo-mark.svg`       | Elipse creme com anel vermelho no Nav       | SVG, ideal quadrado                     |
| `logo-white.svg`      | Reservado — versão inversa                  | SVG opcional                             |
| `favicon.ico`         | Favicon (mover pra `app/favicon.ico`)       | 32×32                                    |
| `icon.png`            | Ícone PWA / Apple Touch (já enviado)        | 512×512                                  |
| `og-image.png`        | Preview em WhatsApp/Twitter                 | 1200×630                                 |

## Comidas 3D — HERO (estilo wannathis)

PNGs **com fundo transparente**. O CSS aplica sombra 3D + glow morna atrás.
Renders quadrados idealmente 600×600 ou 1000×1000.

| Arquivo               | Onde aparece                                    |
| --------------------- | ----------------------------------------------- |
| `food-burger.png`     | Hero — canto superior direito (grande)          |
| `food-fries.png`      | Hero — canto inferior esquerdo (média)          |
| `food-drink.png`      | Hero — canto superior esquerdo (média-pequena)  |
| `food-pizza.png`      | Hero — canto inferior direito (média)           |

### Dica

O `<Food3D>` já cuida da sombra (`filter: drop-shadow`) e da animação
sutil de flutuação. Exporte o render **sem sombra própria** — o CSS faz.

## Case & produto

| Arquivo               | Onde aparece                            | Formato                     |
| --------------------- | --------------------------------------- | --------------------------- |
| `lanas.jpg`           | Foto do case Lanas Burguer              | JPG 4:5 (ex.: 800×1000)     |
| `kitchen-mockup.png`  | Card do Fluxa Kitchen (Fluxa Foods)     | PNG 4:3 (ex.: 800×600)      |
| `menu-mockup.png`     | Card do Fluxa Cardápio (Fluxa Foods)    | PNG 4:3 (ex.: 800×600)      |

## Como usar

1. Solte os arquivos em `/public/` com os nomes acima.
2. Next.js serve automaticamente — sem imports.
3. Sem restart necessário no dev — hot reload funciona.

## Estrutura de camadas do Hero

```
Hero (bg cream)
├── food-drink.png    (esq/topo, rotação -14°, flutua slow)
├── food-burger.png   (dir/topo, rotação -8°,  flutua slow)   ← maior
├── food-fries.png    (esq/base, rotação +10°, flutua slower)
└── food-pizza.png    (dir/base, rotação +16°, flutua slower)
                    ↑
              texto centralizado por cima
```

Em mobile (`<lg`), os 3D somem da posição absoluta e aparecem em linha
compacta abaixo do CTA (3 itens: burger, fries, drink).
