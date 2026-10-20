Selector del chrome de producto (propiedad, socio, zona, edificio).

```jsx
<Select icon="home" value={prop} onChange={setProp} minWidth={220}
  options={[{value:"all",label:"Todas las propiedades",sub:"12 propiedades"},{value:"p1",label:"Casa de la Luz",sub:"Antigua"}]} />
```

- El disparador es píldora con `--shadow-xs`; el panel es radio 18 con `--shadow-md` y entra con `sa-fade`.
- El check del ítem activo va en `--fg` (ink); el peach no carga como marca fina sobre blanco.
- Para 2–4 opciones cortas y excluyentes usa `Segmented` en su lugar.
