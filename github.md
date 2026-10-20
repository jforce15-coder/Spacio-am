repo: jforce15-coder/Spacio-am
branch: main
note: Spacio-am is the v1 DESIGN SYSTEM this v2 is built from — not a marketing site. The three products live in their own repos (see below).

## Last sync
date: 2026-08-14T17:40:00Z

### Updated in this project
- Corrected the source model: `Spacio-am` is the v1 design system this v2 derives from, not a marketing site.
- Phase 1–3 decision records added under `decisiones/` and cross-referenced from the readme — they carry the WCAG maths behind graphite, peach-deep, the farol scale and the 9 domain badges.
- Verified every derived value in the built system against those records: all match.

## Sync history
### 2026-08-14T17:05:00Z

### Updated in this project
- Six components added from screenshots of the live apps: `TabNav`, `PillTabs`, `BottomNav`, `JobCard`, `Amount`, `Donut`.
- EPI kit rebuilt with its five real tabs (Dashboard, Formulario, Programa, Calidad, Adelantos), job cards and mobile FAB nav.
- Dashboard kit gained the underlined tab chrome, the distribution donut and money with de-emphasised decimals.
- Mobile-overflow rules documented and applied in every kit (the `mi.spacioam.com` phone bug).

## Sync history
### 2026-08-14T16:26:17Z
- Tokens rebuilt from `tokens.json` / `tokens.css` into a `styles.css` import graph (colors, typography, spacing, radius+shadow, motion, EPI domain layer).
- Valky (4 caras), logos, brushstroke, brand glyphs and photography copied from `Spacio-am` and `Hola-spacioam`.
- 24 React components authored across brand / core / forms / feedback / navigation / data / email, covering all 13 families of `componentes.md`.
- Three UI kits recreated: Owner Dashboard, EPI App, Guest App.

## Screen map
| Screen | Built from |
|---|---|
| `ui_kits/owner-dashboard/*` | mi-spacioam: `ui.jsx`, `dashboard.jsx`, `login.jsx`, `spacio-tokens.css`, `charts.jsx` |
| `ui_kits/epi-app/*` | Epi-spacioam: `index.html`; screenshots of `epi.spacioam.com` (desktop + mobile) provided by the user; Spacio-am: `componentes.md`, `patrones.md`, `tokens.json` (domainBadges) |
| `ui_kits/guest-app/*` | Hola-spacioam: `app/primitives.jsx`, `assets/brand`, `assets/photos` |
| `tokens/*` | Spacio-am: `tokens.json`, `tokens.css`, `colors_and_type.css` |
| `components/*` | Spacio-am: `componentes.md`, `patrones.md`; mi-spacioam: `ui.jsx`; Hola-spacioam: `app/primitives.jsx` |
| `guidelines/*` | Spacio-am: `preview/*`, `tokens.json` |

### Secondary source repos
- jforce15-coder/mi-spacioam (main) — Dashboard de Propietarios
- jforce15-coder/Epi-spacioam (main) — EPI App (`app.js` exceeds the importer's read cap)
- jforce15-coder/Hola-spacioam (main) — Guest App
