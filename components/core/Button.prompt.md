Botón píldora del sistema — la acción de toda la familia Spacio AM.

```jsx
<Button variant="primary" iconRight="arrowRight">Ver reporte</Button>
<Button variant="accent">Solicitar adelanto</Button>
<Button variant="secondary" size="sm">Cancelar</Button>
<Button variant="text" uppercase={false}>Ver listado</Button>
```

- **El peach nunca carga texto.** Sobre peach sólido, el texto blanco da 2.56:1 y el ink 3.96:1 — ambos fallan. Por eso `variant="accent"` es **tinte peach + borde peach + texto ink**: se siente cálido y pasa AA con holgura. La acción sólida del sistema es `primary` (ink).
- `variant="danger"` usa `--color-error`; el peach nunca es error.
- Estados: hover = oscurecido leve + `--shadow-sm`; active = `scale(.98)`; disabled = `--divider` + `--fg-subtle`; loading = spinner en lugar del ícono, con la pista en el propio color del botón al 26% y el arco en `--color-peach-neon` — así encaja en cualquier variante sin verse pegado encima.
- Máximo un `primary` por vista.
