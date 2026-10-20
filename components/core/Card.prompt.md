Card: la unidad de información por defecto del sistema (y obligatoria en móvil).

```jsx
<Card variant="elevated"><div className="t-eyebrow">Ingreso neto</div>…</Card>
<Card variant="interactive" size="lg" onClick={open}>…</Card>
<Card pad={0}><CardMedia src="…" height={180} /><div style={{padding:"var(--s-4)"}}>…</div></Card>
```

- `size="lg"` (radio 28) para cards grandes, contenedores de sección y hojas; `md` (14) es el radio de facto.
- Si lleva imagen destacada de ≥160px, envuélvela en `Brushstroke` en lugar de `CardMedia` a secas.
- Empty state: mensaje centrado en `--fg-muted` + acción opcional. Loading: skeleton en `--bg-alt`.
