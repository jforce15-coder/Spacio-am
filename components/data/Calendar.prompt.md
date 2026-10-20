Calendario mensual con estado por farol.

```jsx
<Calendar year={2026} month={7} today={14} selected={18}
  days={{4:"success",9:"warning",14:"info",22:"error"}} onSelect={setDay} />
```

- Semana empieza en lunes. Días fuera de mes quedan vacíos; disabled sería `--fg-subtle`.
- Hoy = borde `--accent` (es el único uso de peach aquí, y es gráfico). Seleccionado = fondo `--fg`.
- El punto usa la escala única de estados; no inventes colores por tipo de trabajo (para eso está `DomainBadge`).
