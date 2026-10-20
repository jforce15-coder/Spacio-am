Tabla-resumen: mucha información, poco ruido. **Solo escritorio denso.**

```jsx
<SummaryTable
  columns={[{key:"prop",header:"Propiedad"},{key:"neto",header:"Neto",num:true},{key:"occ",header:"Ocupación",num:true}]}
  rows={rows} collapse={window.innerWidth < 780} />
```

- Regla de densidad: **cards por defecto**, tabla solo en vistas de administración/configuración en escritorio. Nunca una tabla con scroll horizontal en teléfono — pasa `collapse`.
- Encabezado sticky en `--bg-alt`, `th` en eyebrow, `td` 12.5px con borde superior `--color-ink-08`.
- Los números van con `num: true` (tabular, alineados a la derecha).
