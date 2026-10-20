Control segmentado: 2–4 opciones cortas y excluyentes.

```jsx
<Segmented size="sm" value={cur} onChange={setCur} options={[{value:"USD",label:"USD"},{value:"GTQ",label:"GTQ"}]} />
```

- Usos canónicos: moneda (USD/GTQ) e idioma (ES/EN) en el chrome, y filtros locales de sección.
- El activo es `--bg` con `--shadow-xs`; el resto `--fg-muted` sobre `--bg-alt`. El activo nunca es peach.
- Con 5+ opciones o etiquetas largas, usa `Select`.
