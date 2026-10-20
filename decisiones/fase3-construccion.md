# Fase 3 — Decisiones de Construcción · Design System Spacio AM v2

**Fecha:** 13–14 de agosto de 2026 · Acordado con Juan Ovalle
Este documento registra las **decisiones concretas tomadas al construir el v2** (Fase 3): la resolución de los 5 choques de componentes/patrones y —lo más importante— los **valores nuevos que se derivaron y verificaron**, que no existían en la auditoría ni en las decisiones de tokens. Complementa a `decisiones-fase2.md` (las 10 decisiones de tokens). Todos los contrastes se calcularon con la fórmula WCAG 2.1.

---

## A. Resolución de los 5 choques (componentes y patrones)

| # | Choque | Decisión |
|---|---|---|
| 1 | Cards vs Tabla | Cards por defecto (siempre en móvil y para dashboards/KPIs). La tabla-resumen minimalista solo en desktop denso y **colapsa a cards bajo `--bp-md` (780px)**. Una fuente de datos, dos presentaciones. |
| 2 | Formularios EPI vs Guest | Un solo sistema de formulario (inputs de caja), en **dos densidades**: `compacto` (EPI operativo) y `simple/onboarding` (Guest, con OCR como módulo opcional). |
| 3 | Navegación DASH vs bento Guest | El **chrome de DASH** (barra superior persistente, filtro global de mes arriba-izq, moneda/idioma arriba-der) es la navegación estándar. El **bento de Guest** es pantalla de inicio/lanzador, no navegación permanente. |
| 4 | Brushstroke en "toda imagen" | Aplica a **imágenes destacadas** (heros, cards de propiedad, portadas, bento). Miniaturas/avatares exentos. Umbral práctico: **≥ ~160px de lado**. |
| 5 | Faroles | **Una sola escala** de estado en las 3 apps (success/warning/error/info/pending). Los estados temporales de EPI ("hace 3+ semanas" → error, "hace 2 semanas"/"semana anterior" → warning) se mapean a esta escala. |

---

## B. Valores nuevos derivados (y por qué) — lo más importante de la Fase 3

La auditoría dijo *qué estaba roto*; la Fase 3 tuvo que **inventar los valores que faltaban** para arreglarlo sin traicionar la marca. Cada uno se verificó con contraste real.

### B-1. `--graphite #6F6867` — texto secundario accesible (NUEVO)
El gris de marca `--earth #938B8A` falla WCAG AA como texto pequeño (3.19:1; se necesita 4.5). En lugar de romper la marca, se derivó un gris del **mismo tono cálido** pero más oscuro. Se probó una rampa y se eligió el punto que pasa con holgura:

- `#6F6867` → **5.22:1 sobre alabaster**, **4.92:1 sobre beige**. ✔ Pasa AA.

`--earth` se conserva como swatch de marca, permitido como texto solo a ≥18px o decorativo. `--graphite` toma el rol de `--fg-muted` (captions, meta, helpers, eyebrows).

### B-2. `--peach-deep #C83E1E` — acento sólido accesible (NUEVO)
El CTA de acento en peach fallaba de dos formas:
- Texto blanco sobre `--peach #E9826A` = **2.56:1** (falla).
- Texto ink sobre peach = **3.96:1** (falla texto normal; solo pasa AA-large).

Se derivó un peach **del mismo tono, oscurecido**, hasta que el texto blanco pasa AA:
- `#C83E1E` → **blanco encima = 5.04:1**. ✔ Pasa AA.

Decisión: `--peach #E9826A` queda **solo para acento gráfico** (puntos, bordes, tintes, acentos hero); `--peach-deep #C83E1E` es el relleno de botón/acento con texto. Esto respeta la regla histórica de marca ("peach es acento, nunca dominante") y además la hace accesible.

### B-3. Escala de estados / faroles (NUEVO — la marca no la tenía)
Verificados como texto sobre claro y sobre su propio tinte (todos pasan AA):

| Estado | Color | onLight | Tinte |
|---|---|---|---|
| success | `#3d6b52` | 5.88 | `#E8F2ED` |
| warning | `#9a5020` | 5.68 | `#F5EBE5` |
| error | `#8a3030` | 7.90 | `#F5E5E5` |
| info | `#3B6691` | 5.10 | `#E8EDF3` |
| pending | `#6F6867` | 5.22 | `#F5F3F0` |

`success` y `error` se tomaron de EPI (ya pasaban AA); `warning` de EPI (`#9a5020`); `info` es nuevo (azul pizarra). **El peach nunca es error** — se separó acento de peligro.

### B-4. Escala de radios — se formaliza el "14 fantasma"
La auditoría encontró que `14` se usaba de facto en botones, inputs y cards de las 3 fuentes pero no era token. Se formalizó:
- `--r-sm 10 · --r-md 14 · --r-lg 18 · --r-xl 28 · --r-2xl 40 · --r-pill 999 · --r-card-top 28 28 0 0`.
- **Botones y badges = pill (999)** (EPI migra desde 100). **Inputs y cards = 14**. **Modales/cards grandes = 28**.

### B-5. Paleta de dataviz (NUEVO) + advertencia del peach
Paleta categórica accesible, en orden de asignación de series:
`ink #3E3F3F` (10.1) · `green #3d6b52` (5.9) · `terracotta #9a5020` (5.7) · `slate #5B6B72` (5.3) · `gold #8a6320` (5.2) · `peach #E9826A` (2.6).
**Decisión/advertencia:** el peach va al final y **no se usa como marca fina** (línea/punto) porque falla contraste (2.56); solo como relleno/highlight con borde.

### B-6. Badges de dominio de EPI — regenerados con fórmula única
Los ~9 pasteles hardcodeados de EPI se **regeneraron** desde la paleta de marca con una sola fórmula: fondo tinte (saturación 30%, luminosidad 93%) y texto del mismo tono a la luminosidad que pase **AA ≥4.5**. Resultado verificado:

| Categoría | bg | fg | AA |
|---|---|---|---|
| limpieza-tradicional | `#E8F3ED` | `#317754` | 4.74 |
| limpieza-profunda | `#E8F3F0` | `#317766` | 4.67 |
| mantenimiento | `#E8EDF3` | `#3B6691` | 5.10 |
| nuevo-producto | `#F3EEE8` | `#866537` | 4.63 |
| ajuste | `#F3F1E8` | `#776C31` | 4.67 |
| daños | `#F3E9E8` | `#91473B` | 5.56 |
| supervisión | `#EEE8F3` | `#6D3B91` | 6.51 |
| cancelación | `#F3E8ED` | `#913B66` | 5.82 |
| wifi | `#E8F1F3` | `#357682` | 4.50 |

Viven en una **capa de dominio** (no en el core global); otras apps no las cargan.

---

## C. Decisiones de tipografía y estilo aplicadas
- **Fuera Playfair Display** del stack serif (nadie lo cargaba). Stack final: `Valky → Cormorant Garamond → Georgia → serif`, con Cormorant cargado en todas.
- **Pesos de Montserrat unificados** a `400;500;600;700` (antes variaban por app; Guest pedía 700 sin cargarlo → fake-bold).
- **Íconos:** un solo grosor `stroke-width 1.5` (la base pedía 1.25; se subió por legibilidad en pantallas densas), tamaños 20/24, set Lucide inline.
- **Sombras:** se eliminó el `0 16px 40px .12` de Guest; el nivel más oscuro es `--shadow-lg` (`.10`).
- **Card-top:** `28 28 0 0` como canónico (Guest usaba 24).
- **Número hero display** puede ir en serif por impacto editorial (excepción documentada; el resto de números, siempre en Montserrat/tabular).

---

## D. Qué se construyó (entregables Fase 3)
Carpeta `design-system-v2/`:
1. `tokens.json` — fuente única de verdad.
2. `tokens.css` — espejo CSS.
3. `README.md` — principios, paleta con justificación, escala tipográfica, spacing.
4. `componentes.md` — 13 componentes con anatomía, variantes, estados, reglas.
5. `patrones.md` — 8 patrones ganadores.
6. `migracion.md` — plan por app, esfuerzo vs impacto, en 3 sprints.

Y un **bundle para Claude Design** (`spacio-am-design-v2/`): `SKILL.md`, `colors_and_type.css`, `_ds_manifest.json`, `preview/` (20 tarjetas, incl. nuevas: paleta, faroles, botones peach-deep, badges de dominio, bento), `fonts/`, `assets/`, `ui_kits/`, `slides/`. Publicado como repo `jforce15-coder/Spacio-am` para importar como design system nuevo (v1 se conserva como respaldo).

---

## E. Métrica de verificación (definición de "correcto")
Todo valor de color de texto del sistema pasa **WCAG AA (≥4.5)**. Ningún valor se eligió a ojo: cada gris, estado y badge se calculó y se ajustó su luminosidad hasta pasar. Los 6 hex de marca del Dashboard se conservan intactos como swatches; los arreglos de accesibilidad se resolvieron **agregando** tokens (`graphite`, `peach-deep`, estados), no alterando la marca.
