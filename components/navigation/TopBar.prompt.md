Los dos chromes del sistema: barra de producto y píldora editorial.

```jsx
<TopBar base="../.." month="2026-08" months={months} onMonth={setMonth}
  currency="GTQ" onCurrency={setCur} lang="es" onLang={setLang} initials="AM" />

<PillNav base="../.." links={["Filosofía","Propiedades","Servicios","Diario"]} active="Propiedades"
  cta={<Button size="sm">Reservar</Button>} />
```

- `TopBar` es la navegación estándar de Dashboard y EPI. El **logo principal** va a la izquierda, junto al filtro de mes; el **mes** y la **moneda/idioma** son contexto global: no los repitas por pantalla.
- `PillNav` (blur 20 + saturate 120, fondo alabaster 72%) es solo para marketing / Guest, y lleva el **monograma** (la "S" en arco con sparkle) llenando la altura de la píldora. Lleva el logo principal a escala completa — nunca el monograma, y nunca más bajo que la píldora.
- El link activo se marca con un **filete peach** debajo, no con color de texto: el peach no pasa AA como texto. Los inactivos bajan a opacidad .55.
