Correo transaccional de Spacio AM: cabecera con logo, banda de imagen, titular serif, botón ink, pie en graphite.

```jsx
<EmailLayout logo="https://…/logo-wordmark.png" band="https://…/hero-cierre-mes.jpg"
  eyebrow="Cierre de mes" title="Tu agosto, en una página" cta="Ver reporte" ctaHref="…">
  <p>Ana, cerramos agosto con Q 48,320 netos…</p>
</EmailLayout>
```

- En correo **no hay `var()`**: usa `EMAIL_HEX` (misma paleta compilada) y estilos inline. Serif de sistema (Georgia) porque Valky no carga en clientes de correo.
- El peach solo como filete/acento gráfico (el subrayado bajo el titular). El botón es ink.
- Imágenes con URL absoluta; el ancho del cuerpo es 600.
