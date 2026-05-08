# Learnings & Retros

> Bitácora del aprendizaje. Append-only.
>
> **Por qué existe:** el objetivo principal del proyecto es aprender. Si no documentamos lo aprendido, se diluye. Releer este documento al final será una de las cosas más valiosas.
>
> **Cómo se usa:**
> - Al cerrar cada sesión, añadir una entrada corta (`Sesión X — Aprendizajes`).
> - Al cerrar cada milestone, añadir una entrada de retro (`Retro M1`, `Retro M2`...).
> - Al final del proyecto, añadir una retro completa (`Retro final`).

---

## Plantilla — Sesión

> Las entradas las rellena la skill `close-session` con Sergio al cerrar.
> Importante: los aprendizajes van **en palabras de Sergio** (literal o casi literal), no traducidos a jerga técnica.

```markdown
## Sesión X — YYYY-MM-DD — [Título de lo trabajado]

**Lo que hicimos:**
- {bullets factuales: tareas completadas, hitos del día}

**Lo aprendido (en palabras de Sergio):**
- {respuesta literal a "¿qué has aprendido hoy que ayer no sabías?"}
- {si añade término técnico equivalente, va entre paréntesis: p. ej. "el git me daba palo porque no entendía qué subía (staging area)"}

**Lo más difícil / lo que más gustó:**
{respuesta literal}

**Frase de resumen:**
> {respuesta literal a "si mañana se lo explicaras a alguien, ¿con qué frase empezarías?"}

**Mini-retro:**
- Cambiamos: {qué cambiamos para la próxima sesión}
- Mantenemos: {qué mantenemos}

**Bloqueos / lo que quedó raro:**
{lo que no llegó a cuadrar, o "—"}
```

---

## Plantilla — Retro de milestone

```markdown
## Retro M[X] — YYYY-MM-DD

**Outcome conseguido:** [Sí / parcial / no — explicar]

**¿Qué funcionó bien?**
- ...

**¿Qué no funcionó?**
- ...

**¿Qué cambiamos para el siguiente milestone?**
- ...

**Skills consolidadas:**
- ...

**Skills que queremos reforzar:**
- ...
```

---

<!-- A partir de aquí, las entradas reales. Más recientes arriba. -->

## Sesión 2 — 2026-05-08 — Setup del entorno y primer Hello World de Phaser

**Lo que hicimos:**
- T-005 ✓ Verificadas instalaciones de VSCode, Node.js LTS (v24.14.1) y Git (2.53)
- T-004 ✓ Configurada autenticación SSH con GitHub: par de claves Ed25519, agente SSH como servicio automático, clave pública añadida al perfil
- T-006 ✓ Creado el repo `space-punk` en GitHub (público) y hecho el primer push (40 archivos, 7798 líneas)
- T-008 ✓ URLs reales sustituidas en `docs/COLABORACION.md`
- T-012a ✓ Decisión de tooling formalizada en ADR-004: Vite (sobre HTML plano + CDN)
- T-012 ✓ Hello World de Phaser 4.1.0 corriendo en `localhost:5173` con Vite

**Lo aprendido (en palabras de Sergio):**
- "He aprendido algunas cosas de GitHub que no sabía"
- "La diferencia entre HTTPS y SSH y cómo usar SSH" (autenticación con claves pública/privada en lugar de tokens)
- Manejo de `package.json`, `npm install`, `dependencies` vs `devDependencies`, SemVer y el caret (`^`)
- Estructura de un proyecto Vite + módulos ES (`import`/`export`)

**Lo más difícil / lo que más gustó:**
> "Lo más difícil fue hacer el `package.json`"

**Frase de resumen:**
> "Hoy fue bastante sencillo aunque algo largo, había muchas cosas que leer para aprender pero nada muy loco"

**Mini-retro:**
- Cambiamos: cuando un archivo "no aparece", primero verificar el contenido en disco (hoy se perdió un rato porque `index.html` se quedó vacío sin querer)
- Mantenemos: explicar el "por qué" de cada herramienta antes de instalarla — ayudó a que SSH y npm no fueran caja negra

**Bloqueos / lo que quedó raro:**
- `index.html` quedó vacío al crearlo (resuelto al final). Aprendizaje: tras crear un archivo, comprobar que el contenido está realmente guardado.

---

## Sesión 1 — 2026-05-06 — Kickoff: definición del juego y elección de stack

**Lo que hicimos:**
- Entrevista de descubrimiento con Abel sobre qué juego construir — se eligió Space Punk (2D top-down, mundo abierto steampunk-fantasía) en lugar de la idea inicial "Tavern Jr"
- Mini-PRD redactado y guardado en `docs/PRD.md` (ADR-001)
- Scope V1 acotado a personaje móvil con WASD/ratón sobre mapa con colisiones (ADR-002)
- Sergio investigó por su cuenta opciones de stack (Vanilla JS + Canvas, Phaser.js, Kaboom.js) y decidió Phaser.js (ADR-003)

**Lo aprendido (en palabras de Sergio):**
- "Qué es un PRD" (mini-Product Requirements Document: el documento que define qué se construye y qué no)
- "La comparación de las diferentes tecnologías" (cómo evaluar opciones técnicas y elegir una con criterio)

**Lo más difícil / lo que más gustó:**
> "Entender qué es un PRD"

**Frase de resumen:**
> "Comparé las tecnologías que podrían servirme para este proyecto"

**Mini-retro:**
- Cambiamos: —
- Mantenemos: investigar fuera de sesión cuando hay que tomar una decisión técnica

**Bloqueos / lo que quedó raro:**
—
