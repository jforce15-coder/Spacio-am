# Componentes — Spacio AM Design System v2

Inventario de componentes con anatomía, variantes, estados y reglas de uso. Cada componente consume tokens de `tokens.css`; ningún valor se escribe a mano. Los estados se definen una sola vez aquí y aplican igual en las 3 apps.

Estados base del sistema (aplican donde tenga sentido): **default · hover · focus · disabled · loading · error · empty**.
- **focus** siempre visible: `box-shadow: var(--focus-ring)` + borde `--fg`.
- **disabled**: fondo `--divider`, texto `--fg-subtle`, `cursor:not-allowed`, sin sombra.
- **loading**: spinner o skeleton con `--bg-alt`; nunca dejar el control vacío sin feedback.
- **error**: color `--color-error` (nunca peach).
- transiciones: `var(--d-fast) var(--ease)`.

---

## 1. Botón

**Anatomía:** etiqueta (Montserrat 500, `0.14em`, MAYÚSCULAS opcional) + ícono opcional (1.5, 20px). Forma **píldora** (`--r-pill`), padding `14px 28px`.

**Variantes:**
| Variante | Fondo | Texto | Uso |
|---|---|---|---|
| Primario | `--fg` (ink) | `--accent-contrast` (blanco) | Acción principal. |
| Acento | `--accent-solid` (peach-deep) | blanco | Destacar / CTA cálido. Pasa AA. |
| Secundario | transparente + borde interno `--fg` | `--fg` | Acción alterna. |
| Texto | transparente, subrayado | `--fg` | Terciaria / enlaces de acción. |
| Peligro | `--color-error` | blanco | Acciones destructivas. |

**Estados:** hover = leve oscurecido + `--shadow-sm`; active = `scale(.98)`; focus = `--focus-ring`; disabled = `--divider`/`--fg-subtle`; loading = spinner reemplaza etiqueta, ancho fijo.

**Reglas:** nunca peach (`#E9826A`) como relleno de botón con texto — usar peach-deep. Máximo un botón primario por vista.

---

## 2. Card

**Anatomía:** superficie `--surface`, radio `--r-md` (14) o `--r-xl` (28) para cards grandes, sombra `--shadow-sm` (resting), padding `--s-4` (24). Opcional: imagen superior top-rounded (`--r-card-top`) con brushstroke.

**Variantes:** *plana* (borde `--border-soft`, sin sombra), *elevada* (sombra `--shadow-sm`), *interactiva* (hover eleva a `--shadow-md` + `translateY(-3px)`), *imagen* (media arriba + contenido).

**Estados:** hover (solo interactiva) = `--shadow-md`; focus = `--focus-ring`; loading = skeleton; empty = mensaje centrado con `--fg-muted` + acción opcional.

**Regla:** la card es la unidad de información por defecto, sobre todo en móvil. Reemplaza a la tabla salvo en desktop denso (ver Tabla-resumen).

---

## 3. Tabla-resumen

**Anatomía:** encabezado sticky con fondo `--bg-alt`, `th` en eyebrow (11px, `0.32em`), filas con `td` 12.5px y borde superior `--color-ink-08`. Números en `.t-num` (tabular). Concepto minimalista de la Guest App: mucha información, poco ruido.

**Reglas de uso (choque 1):** solo en **desktop denso** (admin, configuración). **Colapsa a cards por debajo de `--bp-md` (780px).** Una sola fuente de datos, dos presentaciones según ancho. No usar tabla para dashboards ni en móvil.

**Estados:** hover de fila = fondo `--bg-alt`; empty = fila única con mensaje `--fg-muted`; loading = filas skeleton.

---

## 4. Input y formularios

**Anatomía (default = caja):** label eyebrow (`--fg-muted`), campo con fondo `--surface`/`--bg`, borde `--border`, radio `--r-md` (14), padding `14px 16px`, texto 15px. Helper text 11px `--fg-muted`.

**Variante editorial (subrayado):** sin caja, `border-bottom` `--fg`, transparente. Reservada a contextos hero/marketing/onboarding de Guest.

**Densidades (choque 2):**
- **Compacto** (EPI operativo): padding reducido, campos más juntos, ideal para formularios densos de pagos/reportes/inventario.
- **Simple/onboarding** (Guest): campos amplios, un concepto por pantalla, con **captura por OCR de documentos** como módulo opcional (subir foto → prellenar campos).

**Estados:** focus = `--focus-ring` + borde `--fg`; error = borde `--color-error` + mensaje `--color-error` (nunca peach); disabled = fondo `--bg-alt`, texto `--fg-subtle`; loading (OCR) = skeleton sobre los campos que se van a prellenar; empty/placeholder = `--fg-muted`.

**Controles:** toggle (pista 36×20 píldora, `--fg` on / `--divider` off), checkbox (radio `--r-sm`, borde 1.5px, check con ícono 1.5), select (caja `--bg-alt`, chevron ícono).

---

## 5. Modal / popup

**Anatomía (template estándar de EPI):** overlay `rgba(62,63,63,0.55)` + `backdrop-filter: blur(4px)`; panel `--surface`, radio `--r-xl` (28), sombra `--shadow-lg`, padding `--s-5`. Título serif (h3), cuerpo sans, fila de acciones abajo-derecha (secundario + primario). Botón cerrar (ícono ×, arriba-derecha, `--fg-muted`).

**Variantes:** confirmación (texto + 2 botones), detalle (contenido scrollable), formulario (form compacto embebido).

**Estados:** entrada = `dropin`/fade con `--ease`; focus atrapado dentro del modal; cerrar con `Esc` y click en overlay. En móvil, ocupa el ancho con márgenes `--s-4` y puede subir como hoja inferior.

---

## 6. Calendario

**Anatomía (de EPI):** grid mensual, celdas radio `--r-sm`, día en `.t-num`. Estado de día por **faroles** (punto de color de la escala única). Hoy = borde `--accent`. Día seleccionado = fondo `--fg`, texto invertido.

**Estados:** hover de celda (si es interactiva) = fondo `--bg-alt`; disabled (fuera de mes) = `--fg-subtle`; loading = grid skeleton; empty = mes sin eventos, nota `--fg-muted`.

---

## 7. Colapsable / área minimizable

**Anatomía (de EPI):** cabecera con título + chevron (ícono 1.5) que rota; contenido que despliega con `--d-med var(--ease)`. Aplica a secciones densas, filtros, listas largas.

**Estados:** abierto/cerrado (chevron ▸/▾); focus en la cabecera = `--focus-ring`; recuerda su estado cuando aplica (patrón de auto-actualización).

---

## 8. Farol (semáforo de estado)

**Anatomía:** píldora (`--r-pill`) con punto de color + etiqueta 12px 600. Usa la **escala única de estados**. Ver `.farol--*` en `tokens.css`.

| Clase | Color | Significado |
|---|---|---|
| `.farol--success` | verde | Al día / completado. |
| `.farol--warning` | ámbar | Aviso / por vencer. |
| `.farol--error` | rojo | Vencido / daño. |
| `.farol--info` | azul pizarra | En progreso / informativo. |
| `.farol--pending` | neutro | Pendiente / sin estado. |

**Regla (choque 5):** una sola escala en las 3 apps. Los estados temporales de EPI ("hace 3+ semanas" → error, "hace 2 semanas"/"semana anterior" → warning) se mapean a esta escala; no se crean colores nuevos.

**Variante mínima:** solo el punto (sin etiqueta) para listas muy densas — pero con `aria-label` que nombre el estado.

---

## 9. Badge de dominio (EPI)

**Anatomía:** píldora, 11px 600, padding `4px 10px`. **Capa de dominio** (decisión 10): hereda forma/tipo del core, pero sus colores viven en `domainBadges` de `tokens.json`, no en el core global. Cada categoría tiene su par `bg`/`fg` regenerado con fórmula única y verificado AA (≥4.5).

Categorías: limpieza-tradicional, limpieza-profunda, mantenimiento, nuevo-producto, ajuste, daños, supervisión, cancelación, wifi.

**Regla:** otras apps (Guest, futuras) **no** cargan esta capa. Si aparece una categoría nueva, se genera con la misma fórmula (fondo tinte S30/L93, texto mismo tono a L que pase AA).

---

## 10. Navegación (chrome) + Bento

**Chrome de navegación (de Dashboard, choque 3):** barra superior persistente. **Filtro global de mes** arriba-izquierda; **selector de moneda + idioma** arriba-derecha. Menú e íconos (1.5) con comportamiento del Dashboard. Es la navegación estándar de apps de producto (Dashboard, EPI).

**Nav translúcida (opcional, editorial):** píldora con `backdrop-filter: blur(20px) saturate(120%)`, fondo `rgba(250,250,250,0.72)`, sombra `--shadow-sm`, links eyebrow con activo en `--accent`. Para marketing/Guest.

**Bento (de Guest):** grid mobile-first 2→4 columnas (`--bp-md`), `gap` `--s-3`/`--s-4`, tiles que mezclan imagen (con brushstroke) + botón. Es **pantalla de inicio / lanzador**, la cara visual de marca — no la navegación permanente.

**Estados nav:** link activo = `--accent`; hover = opacidad .6; focus = `--focus-ring`.

---

## 11. Gráficas (dataviz)

**Anatomía (de Dashboard):** paleta categórica accesible de `tokens.json > dataviz.series`, en orden: ink, green, terracotta, slate, gold, (peach al final, solo relleno/highlight). Ejes y grid en `--divider`; etiquetas en `--fg-muted`; números `.t-num`.

**Reglas:** máximo ~5 series con color; más allá, agrupar. El peach no se usa como línea/punto fino (falla contraste como marca); sí como área de relleno con borde. Resúmenes numéricos grandes en serif (`--t-display`/`--t-h1`) + label eyebrow.

**Estados:** loading = skeleton del área; empty = ilustración/nota `--fg-muted` + acción.

---

## 12. Pantalla de carga (de Dashboard)

Loader inicial canónico del sistema: fondo `--bg`, logo/monograma centrado, animación sutil (`floaty`/fade con `--ease`), respeta `prefers-reduced-motion`. EPI y Guest se alinean a este en vez de tener el suyo.

---

## 13. Email (de EPI)

Sistema de correo basado en el template de EPI (`email-system.js` + `email-assets`). Tokens traducidos a estilos inline compatibles con clientes de correo (los tokens no viven como `var()` en email; se compilan a hex). Cabecera con logo, cuerpo Montserrat, botón primario ink, acentos peach gráficos, pie con `--fg-muted`. Paleta y tipografía idénticas a la web para consistencia de marca.
