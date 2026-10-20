Campo de texto del sistema: label eyebrow + caja radio 14 + helper de 11px.

```jsx
<Input label="Correo" value={v} onChange={setV} placeholder="hola@spacioam.com" icon="mail" />
<Input label="Monto" density="compact" helper="Sin IVA" />
<Input label="Contraseña" type="password" error="Datos incorrectos" />
<Input variant="underline" label="Tu nombre" />
```

- `density="compact"` en formularios operativos de EPI (pagos, reportes, inventario); `comfortable` en onboarding de Guest, un concepto por pantalla.
- Error siempre `--color-error`; **el peach no es error**.
- Focus = `--focus-ring` (halo peach) + borde `--fg`. Nunca quites el foco visible.
- `loading` dibuja el skeleton — úsalo en el módulo de captura por OCR mientras se prellenan campos.
