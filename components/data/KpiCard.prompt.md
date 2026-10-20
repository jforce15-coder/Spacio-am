KPI editorial — cabeceras de dashboard, resúmenes de trabajos, totales, adelantos.

```jsx
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"var(--s-3)"}}>
  <KpiCard big accent label="Ingreso neto" value="Q 48,320" trend={12.4} help="Después de comisión y gastos operativos." />
  <KpiCard label="Ocupación" value="87%" trend={-3.1} />
</div>
```

- El número siempre en Montserrat tabular. Un solo `big accent` por vista.
- `trend` verde = mejora; el deterioro va en **peach (atencion), no en rojo** — un mes a la baja informa, no alarma. Usa `invert` cuando subir es malo, y `critical` solo cuando la caida exige accion.
- Mucho aire alrededor: el KPI es una card con `--shadow-sm`, nunca una fila apretada.
