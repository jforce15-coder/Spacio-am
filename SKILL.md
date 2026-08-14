---
name: spacio-am-design-v2
description: Use this skill to generate well-branded, accessible interfaces and assets for Spacio AM — a boutique short-stay hospitality and editorial interior design brand from Guatemala. Design System v2, unified from the base plus the Dashboard, EPI and Guest apps. Contains canonical tokens, colors, type, fonts, assets, components, patterns and UI kit. Supersedes v1 (kept only as backup).
user-invocable: true
---

Read `README.md` first, then explore the files:

- `colors_and_type.css` — canonical CSS variables (raw brand layer + semantic role layer + faroles) and semantic typographic classes. **Always link this first.**
- `tokens.json` / `tokens.css` — the source of truth for tokens (generates the CSS + the JS object the apps consume) and its CSS mirror.
- `componentes.md` — component inventory: anatomy, variants, states, rules.
- `patrones.md` — winning layout patterns (bento, cards vs table, faroles, collapsibles, global filters, brushstroke, auto-sync).
- `migracion.md` — how each existing app aligns to v2, by effort vs impact.
- `fonts/` — Valky family (Light / Regular / Semibold / Bold). Display serif for every heading.
- `assets/` — logos (wordmark, S monogram, stamp), brushstroke motif, star/sparkle, brand glyphs, photography.
- `preview/` — specimen cards for the Design System tab (color, states/faroles, type, spacing, radii, shadows, buttons, inputs, badges, domain badges, bento, navigation, cards, brushstroke, iconography).
- `ui_kits/spacio-marketing/` — a React marketing page + reusable components.

## No-negociables (v2)

- The brand name in running copy is **"Spacio AM"** — never "Espacio AM". When "espacio" appears lowercase it's a literal physical space; don't auto-correct.
- **Accesibilidad WCAG AA en todo el texto.** Secondary text uses `--fg-muted` (graphite `#6F6867`), not earth. Earth `#938B8A` is a swatch, allowed as text only at ≥18px or decorative.
- **Peach `#E9826A` is a GRAPHIC accent only** — one small element per screen (a dot, a focused border, a key date). **Never as text, never as a fill behind text.** For a solid accent button use `--accent-solid` (peach-deep `#C83E1E`) with white text.
- **Peach is never an error color.** Error is `--error` (`#8a3030`). Success `--success` (`#3d6b52`), warning `--warning` (`#9a5020`). One farol scale for the whole system.
- All headings use **Valky** serif; all body uses **Montserrat** with `letter-spacing: 0.14em`; **numbers always Montserrat**. Cormorant Garamond is Valky's loaded fallback (drop Playfair).
- Backgrounds alternate `#FAFAFA` (Alabaster) and `#F5F3F0` (Beige Soft). Surfaces elevate on `#FFFFFF`.
- **Buttons and badges are pills** (`--r-pill` 999). Inputs and cards use `--r-md` (14). Editorial image cards use top-only rounded corners (`--r-card-top` `28px 28px 0 0`).
- **Every featured image carries the PETMA brushstroke** (`#F5F3F0` ~30% opacity), one sweeping stroke per section. Thumbnails/avatars are exempt (≥~160px → brushstroke).
- Icons: curated **Lucide, inline, stroke-width 1.5**, 20–24px, `currentColor`.
- **Mobile-first.** Cards are the default; the summary table is a desktop-only luxury that collapses to cards under `--bp-md` (780px).
- No emoji. No drop-shadows on type. No gradients. No cool blue. No flash photography.
- Voice: calm, second-person ("contigo"), sensory ("sentir, despertar, desvelar"). Spanish first.

## Si se invoca sin contexto

Pregunta qué quieren construir (slide / mock / página / componente / asset), idioma (español / inglés / bilingüe), propiedad o servicio, y si tienen fotografía nueva. Luego actúa como diseñador experto que produce artefactos HTML (para mocks/prototipos) o código de producción (dentro de un codebase), enlazando `colors_and_type.css` y cargando Montserrat + Cormorant desde Google Fonts.
