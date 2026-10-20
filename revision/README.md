# Revisión del design system

Dos veces por semana (lunes y jueves) una tarea programada de Claude compara el
código de las seis apps con este design system y deja un informe como pull request
en este repo. A partir del 21 de diciembre de 2026 pasa a una vez por semana (lunes).

Apps revisadas: Hub, Hola, Epi, Mi, Docs y Grow (repos `jforce15-coder/*-spacioam`).

## Qué hay aquí

- `informes/AAAA-MM-DD.md` — el informe de cada revisión, para leer.
- `informes/AAAA-MM-DD.json` — las mismas propuestas en datos. Es lo que leerá el
  panel del Hub en la fase 2.
- `decisiones.json` — lo que el administrador decide sobre cada propuesta.
- `excepciones.json` — diferencias aprobadas como propias de una sola app. La
  revisión no las vuelve a proponer.

## Cómo decidir sobre una propuesta

Cada propuesta tiene un `id`. En el pull request del informe, escribe un comentario
por propuesta (o uno con varias líneas):

```
P-2026-10-23-01: estandarizar
P-2026-10-23-02: solo esta app
P-2026-10-23-03: revertir
```

- **estandarizar** — el cambio pasa al design system y a las demás apps.
- **solo esta app** — se guarda en `excepciones.json` y no vuelve a salir.
- **revertir** — la app vuelve al estilo del design system.

Luego aprueba (Merge) el pull request del informe. La siguiente revisión registra
las decisiones en `decisiones.json` / `excepciones.json` y abre los pull requests
de cambio en cada repo afectado, para aprobarlos como siempre.

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
  "impacto": "bajo | medio | alto"
}
```
