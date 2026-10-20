# Decisiones de Marca — Design System Spacio AM v2

**Cierre de la Fase 1** · Fecha: 13 de agosto de 2026
Resuelto con Juan Ovalle. Estas 10 decisiones responden a las "Preguntas abiertas" de `auditoria-divergencias.md` y son el punto de partida acordado para la Fase 2 (construcción).

---

## Las 10 decisiones

### 1. Nomenclatura de tokens
**Inglés semántico por rol.** Los tokens se nombran por su función, no por su color: `--fg`, `--fg-muted`, `--bg`, `--bg-alt`, `--accent`, etc. Debajo, una capa base con el color crudo (`--ink`, `--peach`, `--earth`) alimenta a los semánticos. El código dice *para qué sirve* el color, no *qué color es*. Sin ñ ni acentos (evita problemas técnicos).

### 2. Formato canónico del sistema
**Fuente única → genera CSS + JS.** Los tokens viven en un solo archivo (JSON). Un script genera automáticamente tanto las variables CSS (`:root`, para DASH) como un objeto JS importable (para EPI/GUEST). Se cambia un valor en un lugar y se propaga a todo. Implica migrar EPI y GUEST de hardcode/`const C` a tokens generados.

### 3. Paleta de estados (éxito / error / aviso)
- **Éxito** = `#3d6b52` (verde de EPI; contraste 6.1:1, pasa AA).
- **Error / peligro** = `#8a3030` (rojo dedicado; 8.2:1, pasa AA).
- **Aviso** = ámbar derivado de `#9a5020` (verificar AA al fijar el tono final).
- **Regla clave:** el peach deja de usarse como error. Peach queda **solo** como acento / CTA.

### 4. Accesibilidad WCAG AA
Prioridad AA en todo el texto:
- Oscurecer el gris de texto secundario a un tono que pase AA (referencia ~`#6E6663`; se afina al construir).
- El `#938B8A` actual se reserva para texto ≥18px o uso decorativo.
- Se elimina el `taupe #B2A193` (GUEST) como color de texto.
- El peach **no** se usa como texto sobre fondo claro ni como relleno de botón con texto claro. Si hay CTA peach, se resuelve con texto oscuro o un peach oscurecido.

### 5. Forma de botones y píldoras
**Botón píldora, radio `999`** (formalizado como `--r-pill`). Botones y badges totalmente redondeados, como la base. EPI migra su píldora de `100` → `999`.

### 6. Paradigma de inputs
**Caja como default de producto** (borde suave + radio + estado de foco claro), porque es más usable y accesible en apps densas (EPI/DASH). El **input subrayado** queda como variante editorial para contextos hero/marketing/GUEST.

### 7. Tipografía — serif y pesos
- Stack serif final: **Valky → Cormorant Garamond → Georgia → serif**. Se elimina Playfair Display.
- Cormorant Garamond se **carga como webfont en todas** las apps (fallback consistente de Valky).
- Se **unifican los pesos de Montserrat** cargados (hoy varían: base 400/500, dash 300–700, guest 400/500/600, epi 300–700) a un único set oficial.

### 8. Iconografía
**Set curado desde Lucide, exportado como SVG inline** (sin dependencia de CDN en runtime). **Grosor único `stroke-width: 1.5`**, tamaños 20/24px. Se conservan los glifos de marca propios (Sparkle de 4 puntas, brushstroke PETMA).

### 9. Breakpoints y contenedores
Sistema **mobile-first** basado en GUEST (la app más usada en teléfono):
- Breakpoints: **sm 480 / md 780 / lg 1080**.
- Tokens de ancho de contenedor: lectura (~640) y estándar (~1080).

### 10. Badges de dominio operativo (EPI)
**Capa de dominio separada que hereda del core, con colores rediseñados desde la paleta de marca.**
- El core del design system queda neutral (color, tipo, estados genéricos, forma de badge).
- Los ~9 colores de categoría operativa (Limpieza, Mantenimiento, Daños, Wi-Fi…) viven en una **capa de dominio de EPI**, no en el core global.
- **No** se heredan tal cual: se **regeneran con una fórmula única** — cada categoría toma un hue dentro del rango cálido/tierra de la marca, todos con la misma saturación baja, el mismo nivel de luminosidad para el fondo (tinte suave) y el mismo nivel de texto oscuro que pasa AA 4.5. Así se distinguen entre sí pero se ven como una familia unificada.

---

## Qué implica para cada fuente (resumen)

| Fuente | Cambios principales en Fase 2 |
|---|---|
| BASE | Añadir capa semántica por rol; escala de estados; oscurecer gris de texto; tokens de breakpoint/contenedor; formalizar radio `14` fuera y `999` como pill; documentar set de íconos. |
| DASH | Bajo impacto (ya usa `var(--)`). Adoptar tokens generados; alinear grosor de íconos a 1.5; unificar tamaños de texto a la escala. |
| EPI | Alto impacto. Migrar `const C` + hardcode a tokens; píldora 100→999; ordenar radios (4–22) a la escala; separar/regenerar badges de dominio; unificar foco/estados; error deja de ser peach. |
| GUEST | Impacto medio. Migrar `const C` a tokens; quitar `taupe` como texto; alinear sombras (`.12`→escala); card-top 24→28; pesos de Montserrat; grosor de íconos 1.5. |

---

## Siguiente paso (Fase 2)
Construir el design system v2 unificado a partir de estas decisiones: definir el archivo de tokens (fuente única), la capa semántica, la escala de estados accesible, y las specs de componentes (botón, input, badge, card, nav, tabla, modal) con sus estados. Pendiente de tu visto bueno para arrancar.
