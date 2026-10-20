Pantalla de carga inicial del sistema y skeletons localizados.

```jsx
<LoadingScreen base="../.." label="Cargando tu mes" />
<Skeleton height={18} width={140} />
```

- El logo **rebota**; debajo solo hay una sombra elíptica que se encoge al ritmo del salto. **Sin spinner, sin anillo** — un ring giratorio es vocabulario de dashboard genérico y no es de esta marca.
- Las 3 apps usan **este** loader; ninguna tiene el suyo.
- Nunca bloquees la pantalla por una recarga en segundo plano: usa `Skeleton` en el bloque que se refresca y muestra la última actualización en `--fg-muted`.
