Bento box: pantalla de inicio de la Guest App, menús visuales y pantallas de selección.

```jsx
<Bento style={{gridTemplateColumns:"repeat(4,1fr)"}}>
  <BentoTile image="…/living.jpeg" label="Tu estadía" span={2} rows={2} sparkle />
  <BentoTile label="Check-in" />
  <BentoTile label="Guía" tone="ink" />
  <BentoTile label="Wi-Fi" tone="peach" />
  <BentoTile label="Recomendaciones cerca" span={2} />
</Bento>
```

- 2 columnas en móvil, 4 desde `--bp-md` (780). `grid-auto-flow: dense` para que los tiles de distinto tamaño encajen.
- Es **inicio / lanzador**, no la navegación permanente de una app de producto (eso es `TopBar`).
- Los tiles grandes de imagen (≥160px) deberían ir con brushstroke cuando el tile es protagonista de la pantalla.

## Bento vivo: inicio y reposo (Juan, 19-nov-2026)
El modelo de bento de Alma y del Hub, con su tarjeta en `bento-vivo.card.html`. Es el mismo en las dos pantallas:
- **Inicio**: una banda con el atardecer (`assets/bento/atardecer-difuso.jpg`, radio `--r-bento-band`) y la cuadrícula del
  bento (2 columnas en el teléfono, 4 desde `--bp-md`, `dense`). La imagen de hoy ocupa 2 × 2; cada tarjeta, 2 columnas;
  si el último renglón queda cojo, la última se estira a todo el ancho.
- **Reposo** (nadie habla de nada): Necesita tu sí, Tu agenda, Familia, Avisos y Tus áreas. Donde caben menos, las 3 primeras.
- **Tema** (Alma habla de una reserva, un apartamento, un socio…): las mismas posiciones cambian a ese tema.
- **Pantalla de reposo**: solo en pantalla ancha (900 × 600 o más), tras 3 min sin uso: el atardecer a pantalla completa,
  la hora en Valky Light, la fecha en eyebrow y las mismas tarjetas. Cualquier toque, tecla o movimiento la quita y ese
  toque no abre nada.
- Las tarjetas son **vidrio líquido**: `background: var(--glass-bg)`, `backdrop-filter: var(--glass-filter)`,
  `box-shadow: var(--glass-edge)`, el filo con `var(--glass-shine)` en un `::after` (soft-light) y `--glass-solid` sin
  backdrop-filter. Radio `--r-bento` (22). Las fotos y el mapa no llevan vidrio; el texto sobre una foto va con su velo.
- Siempre 1 imagen, nunca un cuadro vacío; lo que no llega no se pinta. Nunca códigos, teléfonos ni correos.
- En producción: `Hub-Spacioam/js/hub-bento.js` (inicio y pantalla de reposo del Hub) y `js/alma-bento.js` (bento vivo de Alma).
