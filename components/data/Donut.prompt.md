Anillo de distribución — cómo se reparte el ingreso bruto entre lo que recibes y lo que cuesta.

```jsx
<Donut total={<Amount value={27301.10} currency="USD" size={26} />} totalLabel="Ingreso bruto"
  data={[{label:"Ingreso neto",value:20758,amount:<Amount value={20758.93} currency="USD" size={15} />},
         {label:"Fee Spacio AM",value:4404,amount:<Amount value={4404.59} currency="USD" size={15} />}]} />
```

- Orden de color: ink primero, **peach segundo** — esa segunda rebanada es la que quieres que se vea (el fee, el gasto que duele). El resto son neutros cálidos que no compiten.
- Cada fila lleva su % del total y su monto. Sin leyenda flotante encima del anillo.
- Máximo 6 rebanadas; más allá, agrupa en "Otros".
