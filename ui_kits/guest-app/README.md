# UI Kit — Guest App ("hola spacioam")

Recreación de la app del huésped: bento de inicio, check-in por pasos con captura de documento,
y pantallas de guía (Wi-Fi, casa, recomendaciones). Es la app más evolucionada visualmente y la
que **aporta** al sistema el bento y el brushstroke.

**Fuente:** `jforce15-coder/Hola-spacioam` — `app/primitives.jsx` (marcas, Brush3D, WeaveHero, Btn, Field,
Steps, DocUploader), `app/screens-bento.jsx`, `assets/brand`, `assets/photos`.

Cambios de v2 aplicados: `const C` (negro/tierra/taupe…) → tokens semánticos; **taupe #B2A193 deja de ser texto**
(fallaba AA 2.39) → `--fg-muted`; botones radio 14 → **píldora 999**; sombra de hover → `--shadow-lg`;
card-top 24 → `--r-card-top` (28); íconos 1.25 → **1.5**.

## Pantallas
| Archivo | Pantalla |
|---|---|
| `Home.jsx` | Bento de inicio con hero brushstroke |
| `Checkin.jsx` | Check-in en 4 pasos: reservante, documentos, contacto, reglas |
| `Guide.jsx` | Guía de la casa: Wi-Fi, reglas y recomendaciones cerca |
