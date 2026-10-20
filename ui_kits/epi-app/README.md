# UI Kit — EPI App (operación en campo)

Recreación de la app operativa de Spacio AM: agenda de trabajos, faroles de estado, badges de categoría,
adelantos y reportes. **Mobile-first** — es la app que más se usa desde el teléfono.

**Fuente:** `jforce15-coder/Epi-spacioam`. El código de pantallas vive en un único `app.js` de ~720 KB
que excede el límite de lectura del importador, así que esta recreación se construyó a partir de:
`index.html` (splash y arranque real, leído completo), `componentes.md` y `patrones.md` del design system
—que documentan la auditoría de EPI componente por componente— y la capa `domainBadges` de `tokens.json`.
**Los layouts son fieles a esa documentación, no a una lectura línea por línea del `app.js`.**

Aplica las decisiones de migración de v2: píldora 100 → **999**, foco negro → `--focus-ring`,
badges de categoría → capa de dominio AA, inputs a caja **compacta**, íconos a 1.5.

Y la revisión de agosto: lo que *falta* (pago pendiente, cancelación, día con pendientes) va en **peach
(atención)**; el rojo queda solo para la excepción que exige acción — un adelanto rechazado, un daño reportado.

## Pantallas
| Archivo | Pantalla |
|---|---|
| `Agenda.jsx` | Calendario del mes + lista de trabajos del día con badges y faroles |
| `JobDetail.jsx` | Modal de detalle/confirmación de un trabajo |
| `Adelantos.jsx` | Formulario compacto de solicitud de adelanto + histórico colapsable |
