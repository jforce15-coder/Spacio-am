# Migración a v2 — qué cambia en cada app

Plan para alinear las 3 apps existentes con el Design System v2, ordenado por **esfuerzo vs impacto**. Todo esto sale de la auditoría real (Fase 1): no son cambios hipotéticos, son las divergencias concretas encontradas en el código.

Leyenda de esfuerzo: 🟢 bajo (mecánico) · 🟡 medio · 🔴 alto (estructural).

---

## Paso 0 — Común a las 3 apps (hacer primero)

Esto habilita todo lo demás:

1. **Adoptar `tokens.json`** y generar `tokens.css` + objeto JS. 🟡
2. **Fuentes:** cargar Cormorant Garamond en todas, unificar Montserrat a `400;500;600;700`, conservar las 4 caras de Valky, **eliminar Playfair** del stack. 🟢
3. **Íconos:** estandarizar en un set Lucide curado inline con **grosor 1.5** y tamaños 20/24. 🟡
4. **Accesibilidad (crítico):** texto secundario `earth #938B8A` → `--fg-muted` (graphite `#6F6867`); peach nunca como texto ni relleno de botón con texto → usar `--accent-solid` (peach-deep); **el error deja de ser peach** → `--color-error`. 🟡
5. **Faroles:** adoptar la escala única de estados. 🟢

---

## Dashboard de Propietarios — impacto BAJO

Es el más sano: ya usa `var(--…)`. Migración mayormente mecánica.

| Cambio | Esfuerzo | Impacto |
|---|---|---|
| Renombrar tokens a la capa semántica por rol (`--ink`→`--fg`, `--earth`→`--fg-muted`, etc.) | 🟢 | Alto (consistencia) |
| Reemplazar el verde hardcodeado `#5B8A6B` por `--color-success` | 🟢 | Alto (accesibilidad: el actual solo pasa AA-large) |
| Alinear grosor de íconos (hoy 1 / 1.6 / 2) a **1.5** | 🟢 | Medio |
| Consolidar tamaños de fuente casi-iguales (10/10.5/11/12.5/13px…) a la escala `--t-*` | 🟡 | Medio |
| Confirmar radios fuera de escala (9/11/12/13/16/24) → escala de radios | 🟢 | Bajo |

**Nota:** la paleta del Dashboard **es** la base del sistema, así que aquí casi no cambian los colores — solo dónde se permite `earth` como texto.

---

## Guest App — impacto MEDIO

Visualmente es la más evolucionada; el trabajo es de tokenización y accesibilidad.

| Cambio | Esfuerzo | Impacto |
|---|---|---|
| Migrar `const C` (negro/tierra/grisCalido/taupe…) a tokens con nombres semánticos | 🟡 | Alto |
| **Eliminar `taupe #B2A193` como texto** (falla AA 2.39) → `--fg-muted` | 🟢 | Alto (accesibilidad) |
| Botones: radio `14` → **píldora `999`** | 🟢 | Alto (consistencia de marca) |
| Sombra de hover `0 16px 40px .12` → `--shadow-lg` (escala) | 🟢 | Bajo |
| Card-top `24 24 0 0` → `--r-card-top` (`28 28 0 0`) | 🟢 | Bajo |
| Añadir peso Montserrat `700` a la carga (hoy pide 700 sin cargarlo → fake-bold) | 🟢 | Medio |
| Íconos `1.25` → **1.5** | 🟢 | Bajo |
| Formalizar el brushstroke como tratamiento canónico con umbral de tamaño (≥160px) | 🟡 | Alto (ya lo hace bien; se documenta y consolida) |

**Nota:** el bento, el brushstroke y las microinteracciones de Guest **suben al sistema** como patrones ganadores — Guest es más fuente que destino aquí.

---

## EPI App — impacto ALTO

El más divergente de la auditoría. Es donde está el grueso del trabajo.

| Cambio | Esfuerzo | Impacto |
|---|---|---|
| Migrar `const C` + cientos de hex inline a tokens | 🔴 | Alto |
| **Píldora `100` → `999`** (288 usos) | 🟡 | Alto (consistencia) |
| Ordenar radios dispersos (4,5,6,7,9,11,12,14,16,20,22) a la escala de radios | 🔴 | Medio |
| **Error `peach` → `--color-error`** y foco `black` → `--focus-ring` | 🟡 | Alto (semántica + accesibilidad) |
| Badges de categoría → **capa de dominio** con los colores regenerados (AA verificado) | 🟡 | Alto (marca unificada) |
| Inputs → caja, densidad **compacta** del sistema | 🟡 | Medio |
| Sombras y bordes propios (`line #EAE6E0`, `sand`) → tokens (`--divider`, `--shadow-*`) | 🟡 | Medio |
| Mapear estados temporales ("hace 3+ semanas"…) a la escala de faroles | 🟢 | Medio |
| Alinear íconos (1.25/1.4/2.5) a **1.5** | 🟢 | Bajo |

**Nota:** EPI aporta al sistema los patrones más valiosos (modales, calendario, colapsables, faroles, cards, adelantos, email). Migrarlo es caro pero rinde doble: ordena EPI **y** valida esos patrones para todos.

---

## Orden recomendado (quick wins primero)

**Sprint 1 — Fundamentos + quick wins de alto impacto (🟢 mayormente):**
Paso 0 completo (tokens, fuentes, íconos, accesibilidad, faroles). En Dashboard: renombrar tokens y reemplazar el verde. En Guest: quitar taupe como texto, botones a píldora, cargar Montserrat 700. En EPI: error deja de ser peach, foco accesible.
→ *Resultado: toda la marca pasa AA y comparte estados/fuentes/íconos. Máximo impacto, mínimo riesgo.*

**Sprint 2 — Tokenización estructural (🔴 EPI):**
Migrar `const C` + hardcodes de EPI a tokens; píldora 100→999; ordenar radios; badges a capa de dominio; inputs a caja compacta.
→ *Resultado: EPI deja de ser el outlier; el sistema queda realmente unificado.*

**Sprint 3 — Consolidación y patrones:**
Guest: brushstroke formalizado, sombras/radios a escala. Dashboard: escala tipográfica. Todas: KPIs editoriales, tabla-resumen que colapsa, sincronización auto/manual, loader canónico, template de email.
→ *Resultado: las 3 apps se ven y se comportan como una sola familia.*

---

## Métrica de "listo"
Una app está migrada cuando: (1) no queda ningún color/radio/tamaño hardcodeado fuera de tokens, (2) todo el texto pasa WCAG AA, (3) botones son píldora y usan variantes del sistema, (4) los estados usan la escala única de faroles, y (5) toda imagen destacada lleva brushstroke. Un linter de tokens (como el `_adherence.oxlintrc.json` que ya existía en la base) puede automatizar la verificación (1).
