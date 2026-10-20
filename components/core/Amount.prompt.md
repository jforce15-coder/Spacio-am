Monto de dinero como lo muestran las apps: el entero manda, los centavos susurran.

```jsx
<Amount value={20758.93} currency="USD" size={46} />
<Amount value={-625} currency="GTQ" size={20} color="var(--color-error)" decimals={false} />
```

- Los decimales van en `--fg-subtle` al 62% del tamaño: es lo que hace legible una cifra grande de un vistazo.
- Negativos con el menos tipográfico (−), y en `--color-error` solo cuando el signo **significa** un problema (descuento, saldo vencido). Un delta normal usa `Trend`.
- `decimals={false}` en filas de tabla y chips donde el centavo es ruido.
