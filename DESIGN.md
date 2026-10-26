# Design System

Derivado del código en `src/index.css` (fuente única de tokens) y de los componentes en `src/components/`. Contexto de producto en [PRODUCT.md](PRODUCT.md).

## Visión general

Portafolio oscuro y editorial: lienzo grafito casi neutro, texto cálido, un único acento ámbar y tipografía grande con tracking negativo. Las capturas de las apps son el color de la página; cada proyecto aporta un tinte propio (`--hue`) que colorea solo su panel. Bootstrap 5 se carga como base (reset y utilidades), pero el sistema visual vive en clases propias (`btn-x`, `card`, `panel`, `nav__*`, `hero__*`).

## Color

Todo en OKLCH. Neutros con matiz 260 (azul frío casi imperceptible); texto principal con matiz 85 (blanco cálido).

| Token | Valor | Uso |
|---|---|---|
| `--g950` | `oklch(0.12 0.003 260)` | Fondo de marco de navegador |
| `--g900` | `oklch(0.165 0.004 260)` | Fondo de página |
| `--g800` | `oklch(0.198 0.005 260)` | Tarjetas, chips, hover |
| `--g700` | `oklch(0.235 0.006 260)` | Chips elevados |
| `--line` / `--line-soft` / `--line-strong` | blanco a 8% / 6% / 14% | Bordes y divisores |
| `--t1` | `oklch(0.96 0.004 85)` | Texto principal |
| `--t2` | `oklch(0.76 0.006 260)` | Texto secundario |
| `--t3` | `oklch(0.64 0.006 260)` | Metadatos |
| `--amber` | `oklch(0.83 0.13 78)` | Acento: enlaces, CTA, foco, selección |
| `--amber-hover` | `oklch(0.88 0.11 78)` | Hover del acento |
| `--amber-ink` | `oklch(0.2 0.03 78)` | Texto sobre ámbar |

**Tinte por proyecto** (`.hue`, definido con `--hue`, ver `src/utils/hue.ts`): `--c1/--c2` (rayas de placeholder), `--panel` (`oklch(0.205 0.014 hue)`, fondo del panel de capturas), `--ink` (etiquetas mono) e `--icon` (fondo del ícono de respaldo).

Regla: el ámbar es el único acento global y se usa con escasez; el color adicional solo aparece dentro del panel de un proyecto.

## Tipografía

| Rol | Fuente | Detalle |
|---|---|---|
| Display | Bricolage Grotesque 500–700 | Títulos, nombres, menú móvil. Peso 600, tracking −0.02 a −0.03em, interlineado 0.95–1.05 |
| Cuerpo | Geist 400–600 | Texto y UI |
| Mono | Geist Mono 400–500 | Etiquetas en mayúsculas (11px, tracking 0.06em) y subtítulos |

Escala responsiva por variables (escritorio ≥1000 / tablet / móvil <680):

- `--h1` 76 / 60 / 46px, `--h1d` 68 / 56 / 44px, `--h2` 48 / 40 / 34px, `--h3` 40 / 34 / 30px, `--lead` 24 / 22 / 20px, `--email` 40 / 32 / 24px.
- Cuerpo largo `body-lg` 17px/1.6 en `--t2`; `text-2` 14px; `text-3` 13px; `meta-label` 12px; sin eyebrows sobre los títulos de sección.
- `text-wrap: pretty` en lead y body.

## Espaciado y layout

- Contenedor `.container-x`: ancho máx. 1200px, padding horizontal `--px` (48 / 32 / 20px).
- Secciones separadas por `--sec-top` (112 / 88 / 72px), con `scroll-margin-top: 72px` por la navbar fija.
- Todo el ritmo vertical y los tamaños de panel salen de variables que cambian en los breakpoints 1000px y 680px (`--block-pad`, `--panel-pad`, `--card-pad`, `--photo`, `--shot-phone`, `--shot-web`…).
- Hero: rejilla texto + foto cuadrada (`--photo` 280 / 220 / 180px); debajo, un índice de 4 columnas (2 en tablet) con filetes superior e inferior.

## Forma, bordes y elevación

- Radios: botones e icon-btn 12px; chips 9px; marcos de captura 16px; tarjetas 20px; paneles 24px (hero 28px); foto 24px; teléfono 34px (pantalla 27px); navegador 12px; pill 999px.
- Los bordes son blancos translúcidos (8–14%), no colores sólidos. No hay sombras en la UI normal; solo los marcos de dispositivo llevan sombra larga y difusa (`0 30px 60px -30px` negro 70–80%).
- La navbar es sticky con fondo `g900` al 90% y `backdrop-filter: blur(12px)`.

## Componentes

- **Botón (`btn-x`)**: contorno `--line-strong`, fondo transparente, hover `--g800`. Tamaños md 44px y lg 48px. Variantes: `primary` (relleno ámbar, texto `--amber-ink`, peso 600, `scale(.98)` al presionar) y `link` (ámbar sin borde). `icon-btn` 44×44.
- **Navbar**: altura 64px; logo cuadrado 32px claro con inicial en display; enlaces 14px `--t2`; CTA con borde ámbar al 50% que se rellena al hover. En <680px los enlaces pasan a menú desplegable con filas de 56px en display 22px.
- **TechChip**: píldora 9px de radio sobre `--g800`, con marca cuadrada de 22px a la izquierda; variante `--raised` sobre `--g700`.
- **Card**: `--g800`, borde `--line`, radio 20px. Fija `color: var(--t1)` porque Bootstrap lo sobrescribe.
- **Shot / PhoneFrame / BrowserFrame**: capturas con proporción 9:19.5 (móvil) o 16:10 (web). Sin imagen, muestran un placeholder de rayas diagonales con el tinte del proyecto. El marco de teléfono tiene bisel `oklch(0.1 …)` de 7px; el de navegador, barra de 34px con tres puntos y una URL.
- **Panel de capturas (`.panel`)**: fondo `--panel` del proyecto; los teléfonos se escalonan (el central más grande y alto, los laterales más pequeños y desplazados hacia abajo). En <680px se convierte en carrusel horizontal con `scroll-snap`.
- **ProjectIcon**: ícono WebP de la app o, si falta, inicial en display sobre `--icon`.
- **Gallery / Lightbox**: caso de estudio con galería y visor a pantalla completa con atajos de teclado (`useLightboxKeys`).

## Interacción y movimiento

- Foco: `outline: 2px solid var(--amber); outline-offset: 3px` en `:focus-visible`.
- Selección de texto: fondo ámbar con `--amber-ink`.
- Transiciones de 0.15s en botones, filtros, navegación, enlaces y tarjetas vecinas; `transform .1s` al presionar. Sin animaciones de entrada ni parallax.
- `prefers-reduced-motion`: se anulan las transiciones y el scroll programático pasa a `auto` (`scrollBehavior()` en `utils/scroll.ts`).
- `color-scheme: dark` y `scrollbar-color` tematizan scrollbars y controles nativos.
- Navegación por hash sin librería (`#/` e `#/proyecto/:id`).

## Responsive

Dos puntos de corte: <1000px (tablet) y <680px (móvil). Se reajustan las variables de la escala, los anchos de los teléfonos (de porcentajes a píxeles fijos), el índice del hero (4 → 2 columnas) y la navegación (barra → menú).

## Do / Don't

- **Do** usar ámbar solo para acción, enlace y foco. **Don't** añadir un segundo acento global.
- **Do** definir tamaños y espacios como variables en `:root` y sus breakpoints. **Don't** meter valores fijos en los componentes.
- **Do** separar con bordes translúcidos y cambios de superficie (`g900` → `g800` → `g700`). **Don't** usar sombras en la UI ni tarjetas anidadas en tarjetas.
- **Do** usar los íconos de trazo de `ui/Icon.tsx` (1.75px) para flechas y acciones. **Don't** usar glifos Unicode (↗ → ▶) ni eyebrows sobre los títulos, ni numeración decorativa de secciones.
- **Do** dejar que las capturas y el tinte del proyecto lleven el color. **Don't** usar gradientes de relleno decorativos (los únicos son los patrones de placeholder).

## Brechas detectadas

- `--t3` (`oklch(0.64…)`) sobre `--g900` da unos 5.7:1 (estimado por luminancia), por encima de AA.
- Las clases `.card` y botones sobrescriben estilos de Bootstrap; si se actualiza Bootstrap, revisar `.card` y `a:hover`.
