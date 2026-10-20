# Spacio AM — Design System v2

Punto de partida único para todos los proyectos de Spacio AM. Nace de consolidar el design system base con las tres apps que divergieron (Dashboard de Propietarios, EPI App, Guest App) y de las decisiones de marca tomadas en la auditoría de divergencias. **Reemplaza a v1**, que se conserva solo como respaldo.

> "Hay espacios en donde sueñas con volver a despertar."

## Archivos de este skill

- `colors_and_type.css` — variables CSS canónicas (capa de marca + capa semántica por rol + faroles) y clases tipográficas. **Enlázalo primero.**
- `tokens.json` — fuente única de verdad. Genera `tokens.css` (variables) y el objeto JS de las apps.
- `tokens.css` — espejo CSS de los tokens.
- `componentes.md` — inventario de componentes: anatomía, variantes, estados, reglas.
- `patrones.md` — patrones de layout ganadores.
- `migracion.md` — cómo se alinea cada app existente a v2, por esfuerzo vs impacto.
- `fonts/` — familia Valky (Light / Regular / Semibold / Bold).
- `assets/` — logos, brushstroke, star/sparkle, glifos de marca (`assets/glyphs/`), fotografía.
- `preview/` — tarjetas specimen para la pestaña de Design System.
- `ui_kits/spacio-marketing/` — página de marketing React + componentes reutilizables.

## Cómo se usa

La fuente de verdad es `tokens.json`. De ahí salen `colors_and_type.css`/`tokens.css` (para proyectos CSS como el Dashboard) y el objeto JS (para las apps React EPI y Guest). **Nadie escribe un color, radio o tamaño a mano**: todo sale de un token. En el código, un color se llama por lo que **hace** (`--fg-muted`, `--accent`), no por lo que **es** (`--earth`, `--peach`).

## Principios

**Calidez editorial, no dashboard frío.** Tonos tierra neutros, mucho espacio en blanco, jerarquía clara. Estética mediterránea/nórdica: serena, cálida, con aire.

**Mobile-first, siempre.** Las tres apps se usan mucho desde el teléfono. Cards por defecto; la tabla-resumen es un lujo de escritorio que colapsa a cards bajo `--bp-md`.

**Accesible de fábrica.** Todo el texto pasa WCAG AA. El gris de captions se oscureció (`graphite`) y el peach dejó de usarse como texto. La calidez vive en fondos y swatches; la legibilidad manda en el texto.

**Una imagen, un gesto.** Toda imagen destacada lleva el brushstroke (el ribbon 3D de la Guest App). Es la firma visual de la marca.

**El nombre es Spacio AM.** Nunca "Espacio AM".

## Paleta — con justificación de uso

Los 6 colores de marca vienen del Dashboard (base cromática del sistema). Se conservan intactos como swatches; lo que cambia es *dónde* se permite cada uno como texto.

| Rol (token) | Valor | Cuándo usarlo | Cuándo NO |
|---|---|---|---|
| `--fg` (ink) | `#3E3F3F` | Texto primario, titulares (10:1). | — |
| `--fg-muted` (graphite) | `#6F6867` | Texto secundario: captions, meta, helpers, eyebrows (5.2:1). | — |
| `--fg-subtle` (earth) | `#938B8A` | Swatch de marca. Texto solo ≥18px o decorativo. | Texto pequeño (3.19:1). |
| `--bg` (alabaster) | `#FAFAFA` | Fondo primario. | — |
| `--bg-alt` (beige) | `#F5F3F0` | Fondos secundarios, brushstroke. | — |
| `--surface` (white) | `#FFFFFF` | Cards y modales elevados. | — |
| `--divider` (warm-grey) | `#D8D4CE` | Líneas, divisores. | Como texto. |
| `--accent` (peach) | `#E9826A` | Acento gráfico: puntos, bordes, tintes. | Texto o relleno de botón con texto (2.56:1). |
| `--accent-solid` (peach-deep) | `#C83E1E` | Botón de acento con texto blanco (5.0:1). | — |

### Estados (escala única de faroles)
Todos pasan AA sobre claro y sobre su tinte. **El peach nunca es error.**

| Estado | Color | Tinte | Significado |
|---|---|---|---|
| success | `#3d6b52` | `#E8F2ED` | Al día / completado. |
| warning | `#9a5020` | `#F5EBE5` | Aviso / por vencer. |
| error | `#8a3030` | `#F5E5E5` | Vencido / daño. |
| info | `#3B6691` | `#E8EDF3` | En progreso / informativo. |
| pending | `#6F6867` | `#F5F3F0` | Pendiente / neutro. |

## Tipografía

**Valky** (serif) para titulares; **Montserrat** para cuerpo, UI y **siempre** números; **Cormorant Garamond** fallback cargado de Valky (fuera Playfair). Escala con `clamp()` de display a eyebrow; cuerpo con tracking `0.14em`, eyebrow `0.32em`.

## Radios, sombras, íconos

Botones/badges = píldora (999); inputs/cards = 14; cards grandes/modales = 28. Cuatro sombras suaves (xs→lg). Íconos Lucide inline, grosor único 1.5, 20/24px.

## Componentes y patrones

El detalle está en `componentes.md` (13 componentes con estados) y `patrones.md` (bento, cards vs tabla, faroles, colapsables, filtros globales, brushstroke, sincronización, KPIs). El plan para migrar las apps existentes, en `migracion.md`.
