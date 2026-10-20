# Revisión del design system

Dos veces por semana (lunes y jueves) una tarea programada de Claude compara el
código de las seis apps con este design system y publica sus propuestas en el Hub
(hub.spacioam.com/design-system.html); aquí queda el registro. A partir del 21 de diciembre de 2026 pasa a una vez por semana (lunes).

Apps revisadas: Hub, Hola, Epi, Mi, Docs y Grow (repos `jforce15-coder/*-spacioam`).

## Qué hay aquí

- `informes/AAAA-MM-DD.md` — el informe de cada revisión, para leer.
- `informes/AAAA-MM-DD.json` — las mismas propuestas en datos. Es lo mismo que se
  publicó en el panel del Hub.
- `decisiones.json` — lo que el administrador decide sobre cada propuesta.
- `excepciones.json` — diferencias aprobadas como propias de una sola app. La
  revisión no las vuelve a proponer.

## Cómo decidir sobre una propuesta

Las propuestas se revisan en el Hub: **hub.spacioam.com/design-system.html** (solo
administrador principal). Cada una muestra, lado a lado, cómo está hoy el design
system y cómo quedó en la app que lo cambió. Botones:

- **Estandarizar en todas** — el cambio pasa al design system y a las demás apps.
- **Solo esta app** — se guarda en `excepciones.json` y no vuelve a salir.
- **Revertir** — la app vuelve al estilo del design system.
- **Descartar** — no se hace nada.

La siguiente revisión lee las decisiones del Hub, registra todo en `decisiones.json`
/ `excepciones.json` y abre los cambios en cada repo afectado para aprobarlos con
Merge. Propuestas y decisiones viven en la pestaña `DS_PROPUESTAS` de la hoja de ALMA.

## Formato de cada propuesta (JSON)

```json
{
  "id": "P-2026-10-23-01",
  "titulo": "Menú desplegable con fondo beige y radio 12px",
  "tipo": "componente | token | patrón | asset",
  "origen": "hub",
  "apps_con_el_cambio": ["hub"],
  "apps_afectadas": ["hola", "epi", "mi", "docs", "grow"],
  "estado_en_ds": "distinto | no existe | obsoleto",
  "evidencia": [{"app": "hub", "archivo": "index.html", "detalle": "…"}],
  "recomendacion": "estandarizar | solo esta app | revertir",
  "motivo": "…",
  "impacto": "bajo | medio | alto",
  "vistas": [{"etiqueta": "Design system hoy", "app": "ds", "alto": 220, "html": "…", "css": "…"}]
}
```
