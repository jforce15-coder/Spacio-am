La fila de trabajo de EPI, en su forma de card — que es la forma obligatoria en teléfono.

```jsx
<JobCard property="Z1 - Centro Vivo - 1107" category="limpieza-tradicional"
  description="Limpieza tradicional — Z1 - Centro Vivo - 1107" date="14 ago 2026"
  technician="Jackeline Ruano" amount={75} state="pending" statusLabel="Pendiente" payer="Paga Spacio AM" />
```

- El filete izquierdo de 3px repite el color del farol: el estado se lee sin leer.
- En escritorio denso la misma fuente de datos va en `SummaryTable`; en móvil, siempre esta card.
- `payer` es una etiqueta informativa, no un estado: no la pintes con colores de farol.
