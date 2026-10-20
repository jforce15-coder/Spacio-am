# Fase 2 — Decisiones Consolidadas · Design System Spacio AM v2

**Fecha:** 13 de agosto de 2026 · Acordado con Juan Ovalle
Este documento es el **blueprint** para la Fase 3 (construcción de `design-system-v2/`). Integra tres cosas: (A) las 10 decisiones de tokens, (B) el mapa de "piezas ganadoras" de cada app, y (C) la resolución de los 5 choques detectados. Nada aquí se inventó: todo sale del código real auditado en Fase 1 o de una decisión explícita tuya.

---

## A. Fundamentos del sistema (10 decisiones de tokens)

| # | Tema | Decisión |
|---|---|---|
| 1 | Nomenclatura | Inglés semántico por rol (`--fg`, `--fg-muted`, `--bg`, `--bg-alt`, `--accent`) + capa base de color crudo (`--ink`, `--peach`, `--earth`) debajo. |
| 2 | Formato | Fuente única en `tokens.json` → genera `tokens.css` (variables) y objeto JS. EPI/GUEST migran de hardcode a tokens. |
| 3 | Estados | Éxito `#3d6b52` · Error `#8a3030` · Aviso ámbar (de `#9a5020`). Peach fuera del rol de error. |
| 4 | Accesibilidad | AA en todo el texto: gris de caption más oscuro (~`#6E6663`), `#938B8A` solo ≥18px/decorativo, fuera `taupe #B2A193` como texto, peach nunca como texto/relleno de botón claro. |
| 5 | Botón / píldora | Píldora `999` (`--r-pill`). EPI migra de 100→999. |
| 6 | Inputs | Caja como default de producto; subrayado como variante editorial. |
| 7 | Serif | Valky → Cormorant → Georgia → serif. Fuera Playfair. Cormorant cargado en todas. Pesos de Montserrat unificados. |
| 8 | Íconos | Set Lucide curado, inline, grosor único `1.5`, tamaños 20/24. |
| 9 | Breakpoints | Mobile-first: sm 480 / md 780 / lg 1080 + tokens de contenedor (lectura ~640, estándar ~1080). |
| 10 | Badges de dominio | Capa de dominio de EPI que hereda del core; colores regenerados desde la paleta de marca con fórmula única (misma saturación/luminosidad, texto AA). |

---

## B. Piezas ganadoras por app → cómo entran a v2

### Del Dashboard Propietarios
- **Paleta de color = base de todo el sistema.** Los 6 hex de marca (`#FAFAFA`, `#F5F3F0`, `#3E3F3F`, `#938B8A`, `#D8D4CE`, `#E9826A`) son el núcleo cromático de v2 (ver reconciliación C-0 sobre accesibilidad).
- **Login simple para usuarios internos** → patrón de autenticación estándar para apps de producto (no huésped).
- **Gráficas de datos y resúmenes numéricos** (`charts.jsx`) → componentes de dataviz del sistema; colores de serie derivados de la paleta (accesibles, verificados AA).
- **Chrome de navegación** (menú, íconos, barra superior) → navegación estándar del sistema (ver choque 3).
- **Display de filtros** + **filtro global de mes** (esquina superior izquierda) + **selector de moneda/idioma** (esquina superior derecha) → patrón de barra global.
- **Estética del área de configuración** → patrón de pantallas de settings.
- **Pantalla de carga inicial** → loader canónico del sistema (EPI/GUEST se alinean a este).

### De EPI App
- **Cards en lugar de tablas** para dashboards → default del sistema (ver choque 1).
- **Popups/modales** → template estándar de modal (overlay, blur, radios, botones).
- **Vista de calendario** → componente de calendario del sistema.
- **Áreas colapsables/minimizadas** → patrón de disclosure/acordeón estándar.
- **Resúmenes de trabajos** → patrón de presentación de resúmenes.
- **Formularios operativos** → densidad "compacta" del sistema de formularios (ver choque 2).
- **Sistema de faroles** → base de la escala única de faroles (ver choque 5).
- **Área de adelantos** → patrón de UI para adelantos/descuentos.
- **Template de correos** → sistema de email (tabla de `email-assets` + `email-system.js` como base).

### De Guest App
- **Estándar de tratamiento de imagen** — es la app más visual, define el listón.
- **Brushstroke (WeaveHero) = concepto canónico de imagen** → toda imagen destacada lo lleva (ver choque 4 y regla no negociable).
- **Formularios simples + OCR de documentos** → densidad "simple/onboarding" del sistema de formularios (ver choque 2).
- **Bento box menu** (mezcla imagen/botón) → patrón de pantalla de inicio / imagen de marca objetivo (ver choque 3).
- **Tabla-resumen minimalista del admin** → componente de tabla-resumen para desktop denso (ver choque 1).
- **Sección de propiedades** (organización + faroles de pendientes) → patrón de listado con estado.
- **Actualización automática constante con opción manual** → patrón de sincronización de datos.

---

## C. Resolución de choques (lo que pediste que no decidiera solo)

**C-0 · Reconciliación paleta base ↔ WCAG AA.**
Los 6 hex de marca del Dashboard se **conservan tal cual** como swatches (fondos, superficies, texto ≥18px, decorativo). El único ajuste: el *rol de texto-caption pequeño* usa un gris derivado más oscuro (~`#6E6663`) para pasar AA. Así se honran ambas reglas tuyas ("paleta del dashboard = base" **y** "WCAG AA en toda la paleta"). El `#938B8A` sigue siendo color de marca; solo cambia dónde se permite como texto chico.

**C-1 · Cards vs Tabla.**
Cards por defecto (siempre en móvil y para dashboards/KPIs). La **tabla-resumen minimalista** (estilo admin de GUEST) se permite solo en vistas de admin densas en **desktop**, y **colapsa a cards por debajo de md (780px)**. Una sola fuente de datos, dos presentaciones según ancho.

**C-2 · Formularios.**
Un solo sistema de formulario (inputs de caja), en **dos densidades**: `compacto` (EPI operativo) y `simple/onboarding` (GUEST, con **captura por OCR** como módulo opcional). Misma anatomía, mismos estados, distinto espaciado.

**C-3 · Navegación.**
El **chrome de DASH** (menú, íconos, barra superior con filtro global de mes arriba-izq y moneda/idioma arriba-der) es la **navegación estándar** en apps de producto. El **bento de GUEST** es **patrón de pantalla de inicio/lanzador** — la cara visual de marca — no la navegación permanente.

**C-4 · Brushstroke.**
Aplica a **toda imagen editorial/destacada** (heros, cards de propiedad, portadas, bento). **Miniaturas, avatares e íconos de foto quedan exentos** (el ribbon se vería apretado). Regla por tamaño/rol, no literal en cada imagen.

**C-5 · Faroles.**
**Una sola escala** de faroles para todo el sistema, derivada de la paleta de estados: `éxito` `#3d6b52`, `error/vencido` `#8a3030`, `aviso` ámbar, `pendiente/neutro`. Mismos colores, formas (punto/píldora) y significados en las 3 apps. Los estados temporales de EPI ("hace 3+ semanas" = error, "hace 2 semanas"/"semana anterior" = aviso) **se mapean sobre esta escala**, no son colores aparte.

---

## D. Reglas de marca no negociables (del brief)
- El nombre es siempre **"Spacio AM"** (nunca "Espacio AM").
- **Valky** para títulos, **Montserrat** regular para cuerpo.
- Estética: tonos tierra neutros, calidez editorial mediterránea/nórdica, amplio espacio en blanco, jerarquía visual clara.
- **Toda imagen destacada lleva brushstroke** (según C-4).
- **Mobile-first** (las 3 apps se usan mucho desde teléfono).
- **Contraste WCAG AA verificado** en toda la paleta final.

---

## E. Lo que se construye en Fase 3 (`design-system-v2/`)
1. `tokens.css` — todos los tokens como CSS custom properties.
2. `tokens.json` — los mismos tokens en formato estructurado (fuente única).
3. `README.md` — principios, paleta con justificación de uso, escala tipográfica, spacing, y cuándo usar cada componente.
4. `componentes.md` — inventario con anatomía, variantes, estados y reglas (botón, input, card, tabla-resumen, modal, calendario, colapsables, faroles, nav/chrome, bento, dataviz, email).
5. `patrones.md` — patrones de layout ganadores (bento, cards vs tabla, faroles, colapsables, filtros globales, tratamiento de imagen con brushstroke, sincronización auto/manual).
6. `migracion.md` — qué cambia en cada app para alinearse a v2, ordenado por esfuerzo vs impacto.

*Fase 2 cerrada. A la espera de tu aprobación para arrancar la Fase 3.*
