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
