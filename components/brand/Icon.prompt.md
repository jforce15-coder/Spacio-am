Ícono de línea del set curado de Spacio AM — úsalo para toda la iconografía de UI; nunca dibujes SVGs nuevos ni uses emoji.

```jsx
<Icon name="calendar" size={20} color="var(--fg-muted)" />
<Icon name="alert" size={24} color="var(--color-error)" title="Vencido" />
```

- `strokeWidth` es 1.5 en todo el sistema (v2 unificó 1/1.25/1.4/2 → 1.5). No lo cambies.
- Tamaños canónicos: 20 (`--icon-sm`) en filas, chips y campos; 24 (`--icon-md`) en acciones principales y cabeceras.
- Decorativo por defecto (`aria-hidden`). Pasa `title` cuando el ícono ES la información (ej. farol mínimo).
