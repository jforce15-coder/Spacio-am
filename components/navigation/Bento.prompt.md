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

---

## Bento vivo · pantalla de inicio y de reposo de Alma

El modelo y el diseño del inicio de Alma en el Hub (`alma/inicio.html` + `js/alma-bento.js`, #810 y #895). Úsalo en
cualquier app de Spacio AM que tenga una pantalla de inicio «viva» (lo que pasa hoy) o una pantalla de reposo.

```jsx
<BentoVivo
  image={{ src: "…/foto.jpeg", title: "Jueves 19 de noviembre", sub: "Spacio AM · hoy" }}
  info={[
    { p: 1,   peso: 4, el: <GlassTile kicker="Necesita tu sí" value="2" items={[{ b: "Operación", t: "…" }]} empty="Todo al día" /> },
    { p: 1.2, peso: 3, el: <GlassTile kicker="Tu agenda" items={[{ b: "Hoy 16:00", t: "…" }]} empty="Agenda libre" /> },
    { p: 1.4, peso: 3, el: <GlassTile kicker="Familia · hoy" items={[…]} quote="La frase del día" /> },
    { p: 2,   peso: 2, el: <GlassTile kicker="Avisos" empty="Sin avisos nuevos" /> },
    { p: 3,   peso: 3, el: <GlassTile kicker="Tus áreas" items={[…]} /> },
  ]}
  center={<Roca />}            // la roca, el estado, los subtítulos, «Chat» y «Llamada»
  topic="Huésped · Valeria Ríos" // solo cuando Alma habla de algo; vacío en reposo
  gif={{ src: "…giphy.gif" }}    // de vez en cuando; nunca dentro del bento
/>
```

**El modelo (reglas fijas)**
- **Siempre 1 imagen**, nunca un cuadro vacío. Lo que falta no se pinta y los demás crecen (`peso`). Sin foto: la galería o la de la marca.
- **La roca no se mueve ni se achica**: queda al centro; las tarjetas le dejan el hueco (subtítulos, «Chat», «Llamada»). Los rieles de los bordes (`--bento-rail`, 112 px) quedan libres.
- **Orden por prioridad** (`p`, menor primero). **Reposo**: Necesita tu sí · Tu agenda · Familia · Avisos · Tus áreas. **Tema** (Alma habla de una reserva, un apartamento, un socio, Claudio): los cuadros de la tarjeta de la llamada, con la píldora del tema arriba.
- **Reparto** (`bentoRepartir`): computadora y iPad horizontal → derecha las 3 primeras, izquierda la imagen + 1, abajo del hueco 2. iPad vertical → lados angostos (mapa o galería + 1), abajo la imagen con 2 a su lado. Teléfono → Tablero bento (6 columnas, la imagen arriba a lo ancho); en reposo el teléfono no lleva bento.
- **El GIF** va en su ventana (`GifWindow`) arriba de la roca: asoma unos segundos de vez en cuando y se va; ninguno mientras Alma solo escucha.
- Entrada: desde la roca, en orden por distancia (`.sa-bento-in`, `--i`); con movimiento reducido, solo aparece.

**El diseño: vidrio líquido** (`tokens/glass.css`)
- Tarjetas = vidrio claro `.sa-glass`: blanco al 82–90 % (`--glass-bg`), `--glass-blur` (blur 30 + saturate 185 %), filo de luz arriba a la izquierda (`--glass-sheen`), borde fino de luz (`--glass-edge`) y sombra suave (`--glass-shadow`). Radio `--r-bento` (22; 20 en el teléfono), separación `--bento-gap` (16).
- La ventana del GIF = vidrio oscuro `.sa-glass-dark`. Nada más usa vidrio oscuro.
- Fondo: el atardecer (`--sunset`) o una foto. El vidrio no lo oscurece.
- Las fotos, el mapa y la galería no son vidrio (`.sa-glass--media`): solo llevan el brillo.
- Sin `backdrop-filter` o con transparencia reducida: blanco casi lleno (`--glass-bg-solid`); el texto ink sigue pasando AA.
