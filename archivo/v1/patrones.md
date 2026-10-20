# Patrones de layout — Spacio AM Design System v2

Los patrones ganadores que definen cómo se sienten las apps de Spacio AM. Un componente es una pieza; un patrón es cómo se combinan las piezas para resolver una situación recurrente. Todos son mobile-first.

---

## 1. Bento box (pantalla de inicio)

**Qué es:** el grid de tiles de la Guest App que mezcla imagen y botón. Es la cara visual de la marca y el patrón de lanzador/inicio.

**Cómo:** grid `2 columnas` en móvil → `4 columnas` a partir de `--bp-md` (780), `grid-auto-rows` fluido, `gap` `--s-3`→`--s-4`, `grid-auto-flow: dense` para que los tiles de distinto tamaño encajen. Cada tile es imagen (con brushstroke) o bloque de color con ícono/label. Contenedor `max-width: --container-standard`, centrado.

**Cuándo:** home de Guest, pantallas de selección, menús visuales. **No** como navegación permanente de apps de producto (eso es el chrome).

---

## 2. Cards vs Tabla (regla de densidad)

**El patrón:** una sola fuente de datos, dos presentaciones según el ancho.

- **Cards** = default. Siempre en móvil, y para dashboards/KPIs/resúmenes en cualquier tamaño.
- **Tabla-resumen** = solo desktop denso (admin/configuración), y **colapsa a cards por debajo de `--bp-md`**.

**Cómo decidir:** ¿es una vista de administración con muchas columnas comparables en escritorio? → tabla-resumen (que colapsa). ¿Es cualquier otra cosa, o hay que verlo en móvil? → cards. Nunca una tabla que hace scroll horizontal en teléfono.

---

## 3. Faroles (estado de un vistazo)

**Qué es:** el sistema de semáforos de EPI, unificado en una escala única (success/warning/error/info/pending). Un ítem comunica su estado con un punto o una píldora de color.

**Cómo:** en listas y cards, el farol va a la izquierda del título (punto) o como píldora a la derecha (con etiqueta). En calendario, como punto en la celda. En la sección de propiedades, como "farol de pendientes" que resume el estado del inmueble.

**Regla:** el color siempre significa lo mismo en las 3 apps. Rojo = vencido/daño, ámbar = por vencer, verde = al día. El peach nunca es un farol.

---

## 4. Áreas colapsables (domar la densidad)

**Qué es:** el patrón de EPI de minimizar todo lo que no se está usando. Secciones, filtros y listas largas se pliegan.

**Cómo:** cabecera con título + chevron; el contenido despliega con `--d-med`. Por defecto, en móvil las secciones secundarias arrancan colapsadas; en escritorio, expandidas. El estado se recuerda (se combina con la sincronización auto/manual).

**Cuándo:** cualquier pantalla con más de 2–3 bloques de información; formularios largos; filtros avanzados.

---

## 5. Filtros globales (barra superior del Dashboard)

**Qué es:** el chrome de navegación del Dashboard. Controles que afectan a toda la vista, siempre accesibles.

**Cómo:** barra superior persistente. **Filtro global de mes** en la esquina superior izquierda; **selector de moneda + idioma** en la esquina superior derecha. Los filtros locales de cada sección usan el patrón de "display de filtros" (chips/segmented control con `--r-md`, activo en `--bg-alt` + borde `--fg`).

**Cuándo:** en Dashboard y EPI (apps de producto). El mes y la moneda/idioma son contexto global; no se repiten por pantalla.

---

## 6. Tratamiento de imagen con brushstroke

**Qué es:** la firma visual de la marca. El ribbon 3D (WeaveHero de Guest) que teje por detrás y por delante de una imagen destacada.

**Cómo:** la imagen va en un contenedor con el brushstroke en dos capas — una detrás (asoma por los márgenes) y una máscara delante (reemerge sobre la imagen con sombra). Radio top `--r-card-top`. El trazo usa `--color-beige` a ~30% de opacidad.

**Regla (choque 4):** aplica a **toda imagen editorial/destacada** — heros, cards de propiedad, portadas, tiles de bento. **Miniaturas, avatares e íconos de foto quedan exentos** (el ribbon se vería apretado). Regla por tamaño/rol, no literal en cada imagen. Umbral práctico: si la imagen es ≥ ~160px de lado, lleva brushstroke.

---

## 7. Sincronización automática con opción manual

**Qué es:** el patrón de Guest de mantener los datos frescos sin que el usuario piense en ello, pero dejándole el control.

**Cómo:** los datos se actualizan solos en segundo plano (al enfocar la app, en intervalos, tras una acción). Un control manual discreto ("actualizar") queda disponible para forzarlo. El estado de última actualización se muestra en `--fg-muted`. Nunca bloquear la pantalla por una recarga; usar skeletons localizados.

**Cuándo:** cualquier vista con datos que cambian (reservas, pagos, agenda, pendientes).

---

## 8. Resúmenes numéricos (KPIs editoriales)

**Qué es:** cómo el Dashboard muestra cifras. El número manda, el contexto susurra.

**Cómo:** número grande en serif (`--t-display`/`--t-h1`, `.t-num`), label eyebrow arriba (`--fg-muted`, `0.32em`), variación/tendencia con farol o flecha. En card o en grid de KPIs. Mucho aire alrededor. Los números siempre en Montserrat/tabular, nunca en Valky para dígitos… salvo el número hero display, que puede ir en serif por impacto editorial (decisión de estilo, documentada aquí para que sea consistente).

**Cuándo:** cabeceras de dashboard, resúmenes de trabajos (EPI), totales, área de adelantos.

---

## Cómo se combinan (ejemplo de pantalla)

Una vista típica de producto en v2: **chrome** arriba (mes global + moneda/idioma) → fila de **KPIs** (resúmenes numéricos en cards) → contenido en **cards** (o tabla-resumen si es admin en escritorio) → secciones densas en **colapsables** → estados con **faroles** → datos frescos por **sincronización automática**. Toda imagen destacada, con **brushstroke**. Todo desde tokens, todo AA, todo con la misma calidez editorial.
