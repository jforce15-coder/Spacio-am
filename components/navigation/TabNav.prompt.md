Los dos chromes de sección: subrayado (Dashboard) y píldora (EPI).

```jsx
<TabNav value={tab} onChange={setTab} tabs={[
  {value:"resumen",label:"Resumen",icon:"home"},
  {value:"gastos",label:"Gastos e inversiones",icon:"coins"},
  {value:"detalle",label:"Detalle del mes",icon:"file"}]} />

<PillTabs value={t} onChange={setT} tabs={[
  {value:"dash",label:"Dashboard",icon:"grid"},{value:"form",label:"Formulario",icon:"pencil"}]} />
```

- `TabNav`: etiquetas eyebrow en mayúsculas, activo en `--fg` con filete `--accent` de 2px. Es el **único** subrayado peach del sistema.
- `PillTabs`: activo en `--fg` con texto invertido; el resto `--fg-muted`.
- Ambos hacen scroll horizontal en móvil sin romper el layout — nunca los pongas en un grid de ancho fijo.
