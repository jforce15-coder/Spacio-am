Modal / popup canónico: confirmación, detalle o formulario compacto.

```jsx
<Modal title="Confirmar adelanto" onClose={close}
  actions={<><Button variant="secondary" size="sm">Cancelar</Button><Button size="sm">Confirmar</Button></>}>
  Se descontará del cierre de agosto.
</Modal>
```

- Título en serif (h3), cuerpo en sans `--fg-muted`, acciones abajo-derecha (secundario + primario).
- `sheet` para móvil: ocupa el ancho y sube desde abajo con `--r-card-top`.
- El contenedor padre necesita `position: relative` si quieres que el overlay se limite a un marco (en app real es fixed a la ventana).
