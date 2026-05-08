---
name: plan-session
description: Planifica una sesión de trabajo de Sergio en el proyecto Space Punk. Úsala al inicio de una sesión cuando él (o Abel) diga cosas como "vamos a planificar la sesión", "abrir sesión", "empezamos sesión", "qué toca hoy", "dónde nos quedamos", "/plan-session". Hace standup, orienta sobre el siguiente paso del backlog y genera un archivo de sesión en `sesiones/`.
---

# Plan Session — apertura de sesión de trabajo

Esta skill abre una sesión de trabajo de Sergio en el proyecto Space Punk. **No** cierra la sesión (eso es otra skill).

## Contexto que SIEMPRE debes recordar

- Sergio es estudiante de 1º DAW. **Enseñar, no resolver.** Léelo otra vez.
- Abel es el tutor (Head of Product, no developer senior).
- La fuente de verdad es `CLAUDE.md` y los docs vivos en `docs/`. Si entran en conflicto con esta skill, manda `CLAUDE.md`.
- Lo que no queda escrito en los docs vivos no existe.

## Flujo de la skill

Sigue estos pasos **en orden**. No los saltes ni los hagas en paralelo: cada uno depende del anterior.

### Paso 1 — Cargar contexto (silencioso)

Lee, en una sola tanda paralela:

- `CLAUDE.md`
- `docs/ROADMAP.md`
- `docs/BACKLOG.md`
- `docs/LEARNINGS.md` (sólo las últimas 1-2 entradas)
- `docs/DECISIONS.md` (sólo los ADRs más recientes)
- Listado de `sesiones/` para detectar el número de sesión siguiente y si ya hay archivo de hoy.

Llama también a `mem_context` para recuperar contexto de sesiones anteriores si el plugin de memoria está activo.

No enumeres a Sergio los archivos que has leído ni lo uses de muletilla ("he leído X y Y…"). Usa el contenido con naturalidad cuando lo necesites en pasos siguientes.

**Comprobación: ¿ya existe archivo de sesión de hoy?**
Si en `sesiones/` hay un `sesion-*-{fecha-de-hoy}.md`, no crees otro. Avisa a Sergio:
> "Veo que ya hay un archivo de sesión de hoy: `{ruta}`. ¿Continuamos esa (sólo repaso de dónde íbamos) o abrimos una nueva (algo cambió y queremos replanificar)?"

Si dice **continuar**: sáltate los pasos 5-6 (no se crea archivo nuevo), repasa el archivo existente y haz el handoff del Paso 6 final ("¿empezamos por la tarea X?"). Sí haz standup ligero y orientación.
Si dice **nueva**: archiva la anterior añadiéndole sufijo `-replanificada` y sigue el flujo normal.

### Paso 2 — Saludo y check de `git pull`

Saluda breve. Antes de nada, pregunta:

> "Antes de arrancar — ¿has hecho `git pull` ya? Si no, hazlo ahora desde la raíz del proyecto y volvemos a empezar el flujo. (Si lo haces después, podemos planificar sobre un backlog desactualizado.)"

Esto está en el contrato del proyecto (`CLAUDE.md` → "Cómo iniciar una sesión"). Si dice que sí o que ya lo hizo, sigue. Si dice que no, espera a que lo haga — no es burocracia, es que sin pull la skill puede orientarle hacia tareas que ya no aplican.

### Paso 3 — Standup

Haz **el standup** del contrato de equipo, una pregunta cada vez (no las tres de golpe):

1. ¿Qué aprendiste desde la última sesión?
2. ¿Qué bloqueos tuviste o tienes?
3. ¿Algún feedback (de mí, del proceso, de los docs)?

Espera respuesta a cada una antes de pasar a la siguiente. Si responde escueto, no insistas — el standup es para él, no para llenar formulario.

### Paso 4 — Confirmar rol de la IA

Pregunta qué rol toca hoy: Tech Lead / Pair Programmer / Coach / Product Sparring. Si no tiene claro, asume **Tech Lead** y dilo.

### Paso 5 — Orientar sobre dónde se quedó y siguiente paso

**Aquí es donde aportas valor de verdad.** Tú (la IA) eres quien orienta a Sergio. No le preguntes "¿qué quieres hacer hoy?" — eso lo decide el backlog.

Con lo leído en el paso 1:

1. **Resume en 2-3 frases dónde se quedó la última sesión.** Fuentes en orden de preferencia:
   a. Última entrada de `docs/LEARNINGS.md`.
   b. Si esa entrada falta o está vacía: tareas más recientes bajo `🟢 Done` del backlog + última sección `## Cierre` de `sesiones/sesion-*.md`.
   c. Si tampoco hay nada: `mem_context` o `mem_search` con palabras clave del proyecto.
   No te bloquees si la (a) no existe — es habitual al principio del proyecto. Reconstruye con lo que haya.
2. Mira el sprint activo en `BACKLOG.md` (la sección `🔵 To Do — Sprint actual`). Para identificar qué bloque (S2, S3, …) toca, usa **esta regla de prioridad**:
   a. **Fuente de verdad: la carpeta `sesiones/`.** El número de la próxima sesión = `NN` mayor encontrado + 1, o `02` si está vacía.
   b. `CLAUDE.md` "Sesión actual" es derivado y puede estar desactualizado. Si entra en conflicto con (a), gana (a) — y anótalo mentalmente para sugerir corregirlo en el cierre.
3. Identifica las tareas `🔵 todo` de esa sesión. **El objetivo de la sesión = el "Objetivo:" escrito en esa sección del backlog**, no te lo inventes.
4. Propón un orden razonable de las tareas (dependencias primero, lo más arriesgado o lo que desbloquea otras tareas antes).
5. Marca explícitamente si alguna tarea es demasiado grande para encajar en una sesión y conviene partirla.

Presenta esto a Sergio para que lo valide o ajuste. **No avances al paso 6 hasta que él confirme.**

### Paso 6 — Plan en pasos pequeños

Para cada tarea acordada, propón los sub-pasos concretos en lenguaje de aprendiz: qué se va a hacer, qué se va a aprender en el proceso, y cómo sabremos que está hecho ("criterio de hecho").

No incluyas código. Esta skill planifica, no implementa.

### Paso 7 — Generar el archivo de sesión

Número de sesión: ya lo determinaste en el Paso 5 punto 2 (carpeta `sesiones/` manda). Si no existe la carpeta `sesiones/`, créala. Nombre del archivo: `sesion-NN-YYYY-MM-DD.md` (NN con dos dígitos, fecha de hoy).

Crea el archivo con esta plantilla **literalmente** (rellena los `{{...}}` con el plan acordado en pasos 2-5):

```markdown
# Sesión {{NN}} — {{título corto, p. ej. "Setup del entorno y Hello World"}}

- **Fecha:** {{YYYY-MM-DD}}
- **Milestone:** {{p. ej. M1 — Discovery & Foundations}}
- **Rol IA:** {{Tech Lead / Pair Programmer / Coach / Product Sparring}}
- **Duración prevista:** {{p. ej. 9:30–13:30 + 15:00–17:00}}

## Standup

- **Aprendido desde la última sesión:** {{respuesta de Sergio}}
- **Bloqueos:** {{respuesta de Sergio}}
- **Feedback:** {{respuesta de Sergio o "—"}}

## Dónde nos quedamos

{{2-3 frases resumiendo la última sesión}}

## Objetivo de la sesión

{{copia literal del "Objetivo:" del bloque correspondiente en BACKLOG.md}}

## Tareas

> Orden propuesto. IDs y títulos copiados de `docs/BACKLOG.md`.

1. **{{T-XXX}}** — {{título}}
   - Sub-pasos:
     - {{paso 1}}
     - {{paso 2}}
   - Criterio de hecho: {{cómo sabremos que está}}
   - Qué se aprende: {{1 línea}}

2. **{{T-YYY}}** — {{título}}
   - ...

## Riesgos / cosas a vigilar

- {{p. ej. "Si la instalación de Node falla en Windows, no perder más de 30 min — preguntar"}}

## Notas durante la sesión

_(Hueco para anotar lo que vaya saliendo. Se rellena durante la sesión.)_

## Cierre

_(Lo rellena la skill `close-session` al final. No tocar a mano.)_
```

Después de crear el archivo:

1. Confirma a Sergio la ruta del archivo creado (con un link relativo).
2. Recuérdale brevemente: durante la sesión puede ir anotando en "Notas durante la sesión", y al final usaremos otra skill para cerrar.
3. Pregunta: "¿Empezamos por la tarea 1?"

### Paso 8 — Guardar en memoria

Llama a `mem_save` con:
- **title**: `Plan de Sesión NN — {{título corto}}`
- **type**: `decision`
- **topic_key**: `sesiones/plan-NN`
- **content**: objetivo, tareas acordadas, ruta del archivo.

## Qué NO hacer

- No saltes el standup aunque Sergio diga "vamos al lío" — pregunta al menos por bloqueos.
- No inventes el objetivo de la sesión: sale del backlog.
- No empieces a implementar tareas en este flujo. La skill termina con el archivo creado y la pregunta "¿empezamos?".
- No metas código en el archivo de sesión.
- No uses emojis salvo los que ya usa el backlog (🔵🟡🟢⚫🔴) si los necesitas para alinear estados.
- No actualices `BACKLOG.md` ni `LEARNINGS.md` aquí — eso es del cierre.
