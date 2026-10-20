Badge de categoría operativa de la EPI App. Solo EPI carga esta capa.

```jsx
<DomainBadge category="limpieza-profunda" />
<DomainBadge category="danos">Daño urgente</DomainBadge>
```

- Los 9 pares bg/fg están en `tokens/domain.css`, todos verificados AA ≥4.5. No inventes hex.
- Si aparece una categoría nueva, se genera con la misma fórmula: fondo tinte S30/L93, texto del mismo tono a la luminosidad que pase AA.
- No la uses para estado — eso es `Farol`. Una es "qué tipo de trabajo", el otro "cómo va".
