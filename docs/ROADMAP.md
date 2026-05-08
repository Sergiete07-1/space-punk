# Roadmap

> Documento vivo. Se revisa al cerrar cada milestone y se ajusta si hace falta.
> El roadmap describe **outcomes**, no tareas. Las tareas viven en `BACKLOG.md`.

---

## Visión general

| # | Milestone | Outcome | Sesiones estimadas |
|---|-----------|---------|--------------------|
| M1 | Discovery & Foundations | Proyecto definido, stack elegido, repo con "Hello World" desplegado | ~3 |
| M2 | Playable Core | Versión jugable mínima, en local, sin persistencia | ~3-4 |
| M3 | Real Product | Juego con persistencia, desplegado, otros pueden jugarlo | ~3-4 |
| M4 | Engineering Maturity | Código mantenible, feature compleja vía workflow agentic | ~3-4 |
| M5 | Ship & Reflect | Proyecto pulido, documentado, presentable | ~2 |

**Total:** ~14-17 sesiones para 15 disponibles. Margen de flexibilidad incluido a propósito.

---

## M1 — Discovery & Foundations

**Outcome:** Tenemos un proyecto definido (qué juego, para quién, con qué scope), un stack técnico elegido y justificado, un repo en GitHub con "Hello World" del stack desplegado, y un backlog inicial poblado.

**Skills clave:**
- Definición de producto: identificar usuario, problema, propuesta de valor mínima
- Toma de decisiones técnicas justificadas (comparar opciones, elegir, documentar el por qué)
- Setup profesional de un proyecto: Git, GitHub, estructura de carpetas, README
- Primer contacto con terminal y herramientas de desarrollo

**Definition of Done:**
- [ ] Existe un mini-PRD (1 página) con qué es el juego, para quién, qué hace y qué NO hace
- [ ] Stack técnico decidido y justificado en `DECISIONS.md`
- [ ] Repo creado en GitHub con README inicial
- [ ] "Hello World" del stack corriendo en local
- [ ] "Hello World" desplegado en una URL pública (Vercel/Railway/Netlify)
- [ ] Backlog inicial con al menos 10 tareas para M2
- [ ] Estudiante sabe hacer commit, push y abrir el proyecto en su entorno

**Riesgos a vigilar:**
- Que la idea del juego sea demasiado ambiciosa para 15 sesiones
- Que se pierda demasiado tiempo eligiendo el stack "perfecto" — recordar que cualquier stack moderno sirve

---

## M2 — Playable Core

**Outcome:** Existe una versión jugable mínima del juego, ejecutable en local. Es fea, no tiene persistencia ni cuentas, pero al jugar se entiende qué es. Otra persona la prueba durante 2 minutos y dice "ah, es un juego de X".

**Skills clave:**
- HTML, CSS y diseño de interfaces básico
- JavaScript / TypeScript: variables, funciones, eventos, control de flujo
- Componentes y estado en el framework elegido
- Lógica de aplicación: traducir reglas del juego a código
- Debugging básico: leer errores, usar las DevTools del navegador

**Definition of Done:**
- [ ] Las pantallas principales del juego están maquetadas
- [ ] El bucle principal del juego es jugable de principio a fin
- [ ] El estudiante puede explicar cualquier línea de código que haya escrito
- [ ] El juego se ejecuta sin errores en consola
- [ ] Otra persona (sin contexto) entiende qué es el juego al verlo

**Notas:**
- En este milestone NO se usa IA generadora de código. Solo IA como tutor que explica conceptos cuando hace falta.
- Está bien que el código sea mejorable. Lo refactorizamos en M4.

**Riesgos a vigilar:**
- Bloqueos largos sin entender. Si algo lleva más de 30 min sin progreso, parar y replantear.
- Tentación de meter features extra. Recordar el scope.

---

## M3 — Real Product

**Outcome:** El juego tiene persistencia (lo que haces se guarda), está desplegado en internet con una URL real, y cualquier persona con el enlace puede jugarlo desde su móvil o navegador. Existen tests para la lógica crítica.

**Skills clave:**
- Concepto cliente-servidor y APIs
- Bases de datos relacionales: schema, queries básicas
- Despliegue continuo (push a `main` → live)
- Testing: unitarios para lógica, integración para flujos clave
- Git workflow profesional: branches, pull requests, code review
- Primer contacto con IA como copiloto (Cursor o Claude Code)

**Definition of Done:**
- [ ] El juego está desplegado en una URL pública compartible
- [ ] Lo que el usuario hace se persiste (mínimo: progreso, puntuaciones, lo que aplique al juego)
- [ ] Hay al menos 5 tests unitarios pasando
- [ ] Hay al menos 1 test de integración pasando
- [ ] Existe pipeline de CI básico (los tests corren al hacer push)
- [ ] El estudiante ha abierto y mergeado al menos 1 pull request
- [ ] El estudiante sabe usar la IA como copiloto y rechazar sugerencias malas

**Riesgos a vigilar:**
- Sobre-confianza en la IA. Verificar que sigue entendiendo lo que hace.
- Problemas de despliegue que consumen una sesión entera. Tener plan B (despliegue local con ngrok si hace falta).

---

## M4 — Engineering Maturity

**Outcome:** El código del proyecto se puede mantener. Hay refactors hechos sobre código que olía mal. Los errores se manejan en lugar de explotar. Hay logs útiles. Se ha implementado al menos una feature compleja delegando a un agente y haciendo code review profundo del resultado.

**Skills clave:**
- Identificar y refactorizar deuda técnica
- Manejo de errores y logs
- Lectura crítica de código generado por IA
- Definición de specs claras para delegar
- Conceptos de observabilidad básica
- Code review profundo: ¿por qué este código?, ¿qué falla?, ¿qué hace mal?

**Definition of Done:**
- [ ] Al menos 1 refactor hecho con tests que protegen el comportamiento
- [ ] Manejo de errores básico en frontend y backend (nada explota silenciosamente)
- [ ] Logs útiles en operaciones críticas
- [ ] Al menos 1 feature compleja implementada vía workflow agentic
- [ ] El estudiante ha rechazado/corregido al menos 1 sugerencia mala del agente y puede explicar por qué
- [ ] Documento `DECISIONS.md` actualizado con las decisiones técnicas del milestone

**Riesgos a vigilar:**
- "Refactor por refactor". Cualquier refactor debe tener motivo claro.
- Que el agente meta cosas que el estudiante no entiende. La regla sigue siendo: si no lo entiendes, no lo merges.

---

## M5 — Ship & Reflect

**Outcome:** El proyecto está pulido lo suficiente para enseñarlo con orgullo. Tiene README profesional. Está documentado para que el estudiante pueda retomarlo en 6 meses sin perderse. Ha sido probado por usuarios reales (amigos, familia) y se han arreglado los bugs críticos. El estudiante sabe contar el proyecto en una conversación de 3 minutos.

**Skills clave:**
- Comunicación técnica escrita (README, docs)
- Recogida y priorización de feedback de usuarios
- Comunicación oral del proyecto (storytelling técnico)
- Retrospectiva crítica
- Planificación a futuro: qué seguiría después

**Definition of Done:**
- [ ] README profesional con: qué es, cómo arrancarlo, capturas, decisiones técnicas, próximos pasos
- [ ] Mínimo 3 personas externas han probado el juego
- [ ] Bugs críticos del feedback están arreglados
- [ ] Existe un vídeo demo o GIFs en el README
- [ ] El estudiante ha redactado un resumen para la memoria de prácticas
- [ ] El estudiante puede explicar el proyecto en 3 minutos sin notas
- [ ] Retro final escrita en `LEARNINGS.md` con: qué se llevó, qué fue duro, qué haría diferente, qué quiere construir después

---

## Política de revisión del roadmap

- **Al cerrar cada milestone:** revisar si el siguiente sigue teniendo sentido o hay que ajustarlo.
- **Si M2 acaba en 5 sesiones en lugar de 4:** se recorta scope de M4 (refactor menos profundo, una feature agentic en lugar de dos).
- **Si vamos sobrados:** se amplía scope de M5 (más pulido, más testing, demo más elaborada). NO se mete una feature nueva en M2-M4 a estas alturas.
- **Si el estudiante engancha mucho con un área (ej: backend):** podemos rebalancear sin problema. El roadmap sirve al aprendizaje, no al revés.
