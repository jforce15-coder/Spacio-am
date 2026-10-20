Controles binarios del sistema.

```jsx
<Toggle checked={auto} onChange={setAuto} label="Sincronización automática" />
<Checkbox checked={ok} onChange={setOk} label="Acepto las reglas de la casa" />
```

- El toggle es para ajustes que aplican al instante; el checkbox para confirmaciones dentro de un formulario.
- Nunca uses peach como estado "encendido": es `--fg`.
