# UI Kit — Dashboard de Propietarios ("mi spacioam")

Recreación de la app de reportes financieros para socios propietarios, alineada a Design System v2.

**Fuente:** `jforce15-coder/mi-spacioam` — `ui.jsx`, `dashboard.jsx`, `login.jsx`, `spacio-tokens.css`.
La paleta del Dashboard **es** la base cromática del sistema, así que aquí casi nada cambia de color; lo que cambia es
dónde se permite `earth` como texto (ahora `--fg-muted` / graphite), el verde hardcodeado `#5B8A6B` → `--color-success`,
y el grosor de íconos 1/1.6/2 → **1.5**.

## Pantallas
| Archivo | Pantalla |
|---|---|
| `Login.jsx` | Login partido: aside de marca con cita + brushstroke / formulario |
| `Summary.jsx` | Hero de propiedad + KPIs editoriales + contexto del mes |
| `Financial.jsx` | Ingreso bruto vs neto (línea) + comisión + highlights |
| `Occupancy.jsx` | Anillo de ocupación + columnas mensuales + stats |
| `Admin.jsx` | Filtros de alcance + tabla-resumen que colapsa a cards |

## Datos
Ficticios y locales (`data.js`). No hay backend: los selectores, el mes global y la moneda funcionan de verdad sobre esos datos.
