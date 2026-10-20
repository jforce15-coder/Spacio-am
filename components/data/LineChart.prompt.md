Dataviz del sistema: línea de curva suave, anillo y columnas. **El peach es jerarquía, no categoría.**

```jsx
<LineChart labels={["Feb","Mar","Abr","May","Jun","Jul"]}
  formatY={v => "$" + Math.round(v/1000) + "k"} formatTip={v => "$" + v.toLocaleString("es-GT")}
  series={[{ name:"Ingreso bruto", values:[…] },
           { name:"Ingreso neto",  values:[…], accent:true }]} />

<Gauge value={87} size={220} sub="Este mes" accent />
<BarChart data={[{label:"Jun",value:82},{label:"Jul",value:87,highlight:true}]} />
```

**La regla del peach en datos:** una gráfica tiene **una sola** serie en peach — la que importa. La serie de referencia va en ink y lo demás en neutros cálidos (`--series-2..6`). Nunca cinco colores compitiendo: el peach pierde su trabajo si todo es peach.

- `accent` en la serie protagonista (trazo 2.6, área al 20%); `highlight` en la barra del mes en curso; `accent` en el gauge cuando el dato manda la pantalla.
- Las líneas son **curvas suaves** (Catmull-Rom), nunca quebradas, y siempre llevan área degradada hacia abajo.
- El tooltip aparece al pasar el cursor: eyebrow con el período + una fila por serie con su punto de color y su valor tabular.
- Ejes y grid en `--divider`, etiquetas en `--fg-muted`, números tabulares.
