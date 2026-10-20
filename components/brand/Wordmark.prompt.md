Logo oficial de Spacio AM (wordmark / monograma / sello) y el sparkle de 4 puntas.

```jsx
<Wordmark variant="stacked" height={90} base="../.." />
<Wordmark variant="primary" height={48} base="../.." />
<Wordmark variant="stamp" height={72} onDark base="../.." />
<Sparkle size={13} color="var(--accent)" />
```

- `base` es la ruta relativa hasta la raíz del design system, porque los archivos viven en `assets/brand/`.
- `variant`: **stacked** es el lockup **principal** (SPACIO sobre A—M con el sparkle) — el que va en el chrome de las apps y en la nav editorial · **primary** (horizontal con brushstroke swashes) para firmas anchas y correos · **stamp** (sello circular; sellos, watermarks) · **monogram** (la "S" en arco; avatares, favicons, acentos). Todos en ink y blanco, alta resolución.
- `onDark` sobre ink o sobre foto. Nunca pongas el logo de color peach.
- El sparkle es acento gráfico: junto a un KPI destacado, un eyebrow o el título de un modal. Máximo uno por bloque.
