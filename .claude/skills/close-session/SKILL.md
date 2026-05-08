---
name: close-session
description: Cierra una sesión de trabajo de Sergio en el proyecto Space Punk. Úsala al final de la sesión cuando él (o Abel) diga cosas como "cerramos sesión", "vamos a cerrar", "fin de sesión", "hemos acabado por hoy", "/close-session". Recoge aprendizajes en palabras de Sergio, propone actualizaciones a los docs vivos y al archivo de sesión, y recuerda hacer push a git.
---

# Close Session — cierre de sesión de trabajo

Esta skill cierra una sesión que se abrió con `plan-session`. **No** abre sesiones nuevas (eso es la otra skill).

## Contexto que SIEMPRE debes recordar

- Sergio es estudiante de 1º DAW. **Enseñar, no resolver.** Léelo otra vez.
- Los aprendizajes los escribe **Sergio en sus propias palabras**. Esto NO es un examen — es su bitácora. Tu trabajo es **sacarle** las reflexiones con preguntas, no escribirlas tú.
- Lo que no queda escrito en los docs vivos no existe.
- La fuente de verdad es `CLAUDE.md` y los docs vivos en `docs/`. Si entran en conflicto con esta skill, manda `CLAUDE.md`.

## Principio operativo: PROPONER, NO EDITAR

Para todos los archivos del proyecto: **propón el cambio en el chat (con el diff o el bloque a añadir) y espera confirmación de Sergio antes de aplicarlo**. Si dice "dale", "aplica", "ok", entonces edita. Si dice "cambia X", ajustas y vuelves a proponer.

Excepción: el archivo de sesión `sesiones/sesion-NN-*.md` sí lo editas directamente al final, porque ese es el archivo "de la sesión" y se rellena con lo que ya hemos acordado en el chat.

## Flujo de la skill

Sigue los pasos **en orden**.

### Paso 1 — Localizar la sesión activa

- Lista `sesiones/`. Coge el archivo `sesion-NN-*.md` con `NN` mayor.
- Léelo entero. Esa es la sesión que vamos a cerrar.
- Si no hay archivo de sesión, avisa: "No veo un archivo de sesión abierto. ¿Quieres que abra uno con `plan-session` y luego cerramos, o prefieres cerrar a mano?". No sigas hasta que decida.

Lee también, en paralelo: `CLAUDE.md`, `docs/BACKLOG.md`, `docs/LEARNINGS.md`, `docs/DECISIONS.md`. Llama a `mem_context` si está disponible.

### Paso 2 — Repaso de tareas: qué se ha avanzado

Recorre las tareas del archivo de sesión **una a una** y pregunta a Sergio el estado real. No asumas. Para cada tarea:

- ¿Hecha completa? → pasa a Done.
- ¿A medias? → quedará en `🔵 todo` o `🟡 doing` para la próxima sesión, anota dónde se quedó.
- ¿Bloqueada? → a `⚫ blocked` con motivo.
- ¿Cancelada / ya no aplica? → `🔴 cancelled` con motivo.
- ¿Apareció una tarea nueva durante la sesión? → recógela como `T-XXX` nueva (con ID consecutivo respecto a `BACKLOG.md`).

Hazlo conversacional, no formulario. Una tarea, respuesta, siguiente.

### Paso 3 — Aprendizajes (lo más importante de esta skill)

> **Lee esto despacio:** los aprendizajes los escribe Sergio en sus palabras. Tu trabajo es preguntar bien, escuchar, y luego transcribir lo que él diga **literal o casi literal**, no parafrasearlo a "lenguaje técnico de adulto".

Hazle estas preguntas, **una cada vez**, esperando respuesta antes de la siguiente:

1. *"¿Qué has aprendido hoy que ayer no sabías? No tiene que ser nada espectacular — puede ser un comando, un concepto, un detalle de cómo funciona algo."*
2. *"¿Hubo algún momento en el que algo no te cuadraba o te chocó? ¿Lo entendiste al final o sigue raro?"*
3. *"¿Qué fue lo más difícil? ¿Y lo que más te gustó?"*
4. *"Si mañana tuvieras que explicarle a alguien lo que has hecho hoy, ¿con qué frase empezarías?"* — esta es para sacar el resumen "en su voz".
5. *"Mini-retro: ¿qué cambiamos para la próxima sesión? ¿Qué mantenemos?"*

Si responde escueto ("nada", "no sé"), no presiones — pero ofrécele una pista concreta de algo que sí pasó en la sesión y dale otra oportunidad ("p. ej., con el `git push` te dio un error de credenciales — ¿eso lo tienes claro ahora o sigue gris?").

**No conviertas sus palabras a jerga.** Si dice "el git me daba palo porque no entendía qué subía", se queda como "el git me daba palo porque no entendía qué subía" — quizás añadiendo entre paréntesis el término técnico equivalente si ayuda en el futuro: `(staging area)`.

### Paso 4 — ¿Hubo decisiones?

Pregunta: *"¿Hemos tomado alguna decisión técnica o de producto que merezca un ADR? (Ejemplo: elegir Vite vs HTML plano, decidir cómo organizamos las escenas de Phaser, etc.)"*.

Si sí → propondrás un bloque ADR para `docs/DECISIONS.md` siguiendo el formato que ya tenga ese archivo (lee la última entrada para imitar estilo).

Si no → skip.

### Paso 5 — Proponer actualizaciones (en este orden)

Propón los cambios uno por uno, **esperando confirmación entre cada archivo**. No los apliques en bloque sin que Sergio los vea.

#### 5.1 — `docs/BACKLOG.md`

Muestra el diff propuesto:
- Tareas completadas → mover a `🟢 Done` bajo el bloque `### S{NN} — Sesión {NN}: {título} ({YYYY-MM-DD})`. Crea ese bloque si no existe.
- Tareas a medias / bloqueadas / canceladas → actualiza estado y, si aplica, añade nota.
- Tareas nuevas → añadir en el sprint actual o en "Ideas sueltas para más adelante" según corresponda.

Espera "ok" → aplica con Edit.

#### 5.2 — `docs/LEARNINGS.md`

Propón una entrada nueva al final del archivo (las más recientes abajo en append-only), siguiendo **literalmente la "Plantilla — Sesión"** que está al principio de `docs/LEARNINGS.md`. Si entra en conflicto con lo que diga aquí, manda la plantilla del doc.

Formato esperado (resumen — verifica contra el doc):

```markdown
## Sesión {NN} — {YYYY-MM-DD} — {título de lo trabajado}

**Lo que hicimos:**
- {bullets factuales: tareas movidas a Done en el paso 5.1, hitos del día}

**Lo aprendido (en palabras de Sergio):**
- {respuesta literal a pregunta 1}
- {respuesta literal a pregunta 2 si aporta}

**Lo más difícil / lo que más gustó:**
{respuesta literal a pregunta 3}

**Frase de resumen:**
> {respuesta literal a pregunta 4}

**Mini-retro:**
- Cambiamos: {respuesta a pregunta 5}
- Mantenemos: {respuesta a pregunta 5}

**Bloqueos / lo que quedó raro:**
{lo que haya salido en la pregunta 2 si quedó sin resolver, o "—"}
```

"Lo que hicimos" lo rellenas tú con los hechos de la sesión (no es voz de Sergio, es factual). El resto va **en sus palabras** — ver regla del paso 3 sobre no convertir a jerga.

Antes de aplicar, **enséñaselo a Sergio y pregunta**: *"¿Te suena tuyo lo que he escrito? Cambia lo que no te encaje — esto lo vas a leer tú dentro de 3 meses."*. Itera hasta que él diga que sí.

#### 5.3 — `docs/DECISIONS.md` (sólo si hubo ADR en paso 4)

Propón el bloque ADR. Espera "ok" → aplica.

#### 5.4 — `CLAUDE.md` (sección "Estado actual")

Si la sesión ha cambiado el milestone activo, la sesión actual o información clave del estado, propón actualizar:

```
**Milestone activo:** {...}
**Sesión actual:** Sesión {NN+1} — pendiente. {1 línea de qué toca}
**Última actualización:** {YYYY-MM-DD}
```

Si no hay cambios sustanciales (la sesión avanzó dentro del mismo milestone sin terminar), al menos actualiza "Última actualización" y la línea "Sesión actual" para reflejar el estado real al cierre.

Espera "ok" → aplica.

### Paso 6 — Rellenar el archivo de sesión

Edita `sesiones/sesion-NN-*.md` rellenando la sección **Cierre** que dejó vacía la skill `plan-session`. Estructura (añadir si no existe):

```markdown
## Cierre

- **Hora de cierre:** {HH:MM}
- **Tareas hechas:** {IDs}
- **Tareas a medias / pendientes:** {IDs con 1 línea de dónde quedó}
- **Decisiones tomadas:** {referencias a ADR-XXX o "ninguna"}
- **Aprendizajes clave:** {1-3 bullets, en palabras de Sergio — copia de LEARNINGS}
- **Próxima sesión empezará por:** {1 línea}
```

Rellena también la sección "Notas durante la sesión" si Sergio te dictó notas durante el cierre que no estaban anotadas, pero no inventes notas.

### Paso 7 — Recordar git (NO ejecutes los comandos)

Recuérdale a Sergio el cierre con git. **No corras los comandos por él** — es parte del aprendizaje (ver `docs/COLABORACION.md`).

Propón un mensaje de commit siguiendo el formato del proyecto (`tipo: descripción corta`, ver `CLAUDE.md` "Convenciones del proyecto > Git"). Ejemplo:

> Cuando estés, desde la raíz del proyecto:
> ```
> git status
> git add .
> git commit -m "{tipo}: {descripción}"
> git push
> ```
> Mensaje sugerido: `{tipo}: {descripción que refleje lo cerrado}`

Si el milestone se ha cerrado o ha sido una sesión grande, sugiere también revisar si toca tag o no (sin presionar — depende del flujo del proyecto).

### Paso 8 — Cerrar memoria

Llama a `mem_session_summary` con la estructura del CLAUDE.md global (Goal, Discoveries, Accomplished, Next Steps, Relevant Files). Esto es **obligatorio** antes de despedirte.

Llama también a `mem_save` con:
- **title**: `Cierre de Sesión NN — {título corto}`
- **type**: `decision`
- **topic_key**: `sesiones/cierre-NN`
- **content**: tareas hechas, aprendizajes clave (palabras de Sergio), próximos pasos, ruta del archivo de sesión.

### Paso 9 — Despedida

Frase corta de cierre. Reconoce el avance concreto del día (no genérico — algo específico que se haya hecho). Recuérdale brevemente que la próxima sesión se abre con `plan-session` y empezará por lo que acabamos de anotar.

## Qué NO hacer

- No edites `BACKLOG.md`, `LEARNINGS.md`, `DECISIONS.md` ni `CLAUDE.md` sin enseñar el diff y esperar "ok".
- No reescribas los aprendizajes a jerga técnica. Conserva la voz de Sergio.
- No corras `git commit` ni `git push` por él.
- No abras la sesión siguiente desde aquí — eso es de `plan-session` mañana.
- No saltes el `mem_session_summary`.
- No cierres con genéricos tipo "buen trabajo!". Sé concreto.
- No inventes tareas hechas que Sergio no ha confirmado en el paso 2.
