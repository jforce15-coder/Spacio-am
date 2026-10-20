Navegación inferior de las apps en teléfono. **Obligatoria** en EPI y Dashboard bajo `--bp-md`.

```jsx
<BottomNav variant="bar" value={tab} onChange={setTab} fab={{icon:"home",label:"Inicio"}} onFab={goHome}
  items={[{value:"form",label:"Formulario",icon:"pencil"},{value:"prog",label:"Programa",icon:"calendar"},
          {value:"cal",label:"Calidad",icon:"star"},{value:"adel",label:"Adelantos",icon:"coins"}]} />

<BottomNav variant="pill" value={t} onChange={setT} items={[…]} />
```

- El FAB circular es el **único** relleno peach grande del sistema: peach sólido con la **casita en blanco** (ícono "home"). Nunca le pongas una etiqueta de texto encima.
- Ítem activo: ícono y label en `--fg` + punto `--accent` debajo. Inactivo: `--fg-muted`.
- Cada destino mide al menos 44px de alto. Nunca metas más de 5 destinos (el FAB cuenta como uno).
