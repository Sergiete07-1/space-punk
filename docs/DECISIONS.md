# Decisions Log

> Log append-only de decisiones importantes (técnicas, de producto, de proceso).
>
> **Por qué existe:** las decisiones se toman con un contexto que se olvida. Documentarlas aquí permite revisarlas en el futuro sin reabrir todo el debate.
>
> **Formato:** ADR ligero (Architecture Decision Record). Cada entrada tiene:
> - Fecha
> - Título
> - Estado (`Accepted` / `Superseded by ADR-XXX` / `Deprecated`)
> - Contexto (qué problema queremos resolver)
> - Decisión (qué hacemos)
> - Consecuencias (qué implica, qué dejamos de poder hacer fácil)

---

## ADR-000 — Plantilla

**Fecha:** YYYY-MM-DD
**Estado:** Accepted

### Contexto
[Qué situación nos llevó a tener que decidir algo. Qué opciones había.]

### Decisión
[Qué hemos decidido hacer.]

### Consecuencias
[Qué implica esta decisión: qué se simplifica, qué se complica, qué dejamos de poder hacer fácil, qué riesgos asumimos.]

---

<!-- Las decisiones reales empezarán a partir de M1. Mantener orden cronológico inverso (más reciente arriba). -->

---

## ADR-001 — Concepto del juego: Space Punk

**Fecha:** 2026-05-06
**Estado:** Accepted

### Contexto

En la Sesión 1 (M1) exploramos qué tipo de juego quería construir Sergio. Partimos de la idea provisional "Tavern Jr" (RPG de taberna) y se abrió el abanico para que Sergio eligiera algo que le motivase de verdad.

### Decisión

El proyecto se llama **Space Punk**. Es un juego 2D web con vista cenital (top-down) y mundo abierto. Las características centrales son:

- Ambientación steampunk-fantasía con magia y monstruos (referencia estética: Age of Sigmar)
- Exploración de mundo abierto con biomas distintos
- Movimiento a pie o en vehículos (robots, tanques)
- Progresión por loot y por fabricación de objetos
- Vehículos de construcción modular: cada módulo aporta habilidades
- Jefes distribuidos por el mundo, matables en cualquier orden (pensados para cierta progresión de dificultad)

El scope mínimo viable (qué entra en las 15 sesiones) queda pendiente de definir al completar el PRD y elegir el stack.

### Consecuencias

- La elección de stack debe soportar canvas/sprites 2D (Phaser.js es candidato natural, también Pixi.js o incluso CSS/canvas puro si se simplifica el scope)
- El scope real habrá que recortarlo significativamente para que quepa en 15 sesiones — el concepto es ambicioso, está bien tener visión grande y MVP pequeño
- El PRD que está escribiendo Sergio será el siguiente input para tomar la decisión de stack (ADR-002, pendiente)

---

---

## ADR-002 — Scope V1: personaje móvil en mapa pre-diseñado

**Fecha:** 2026-05-06
**Estado:** Accepted

### Contexto

Con el PRD completado (ver `docs/PRD.md`), había que acotar qué entra en la primera versión jugable del juego para que sea alcanzable dentro de las 15 sesiones disponibles.

### Decisión

El V1 de Space Punk se limita a:
- Un personaje que se mueve en todas direcciones sobre un mapa pre-diseñado
- Control: WASD para moverse, ratón para apuntar
- La cámara sigue al personaje (el mapa se desplaza, el personaje permanece centrado)
- Colisiones con obstáculos del mapa

Todo lo demás (inventario, vehículos, loot, jefes, biomas) queda fuera del V1.

### Consecuencias

- El stack elegido en S2 debe soportar: canvas 2D, input de teclado/ratón, cámara y colisiones. Phaser.js es el candidato más natural.
- El equipo puede avanzar a elegir stack (S2) con claridad sobre qué necesita técnicamente el V1.
- La visión completa del juego (mundo abierto, vehículos modulares, jefes) pasa a ser la hoja de ruta post-prácticas.

---

## ADR-003 — Stack técnico: Phaser.js

**Fecha:** 2026-05-08
**Estado:** Accepted

### Contexto

El V1 (ADR-002) requiere un personaje moviéndose con WASD/ratón sobre un mapa 2D con colisiones y cámara que sigue al personaje. Sergio investigó las opciones por su cuenta antes de la sesión 2 (Vanilla JS + Canvas, Phaser.js, Kaboom.js) y llegó con una preferencia ya formada.

### Decisión

El stack del proyecto es **Phaser.js**. La decisión la tomó Sergio antes de la sesión 2 y se la comunicó directamente a Abel; queda formalizada aquí para alinear los demás documentos.

### Consecuencias

- Phaser cubre de serie input, sprites, físicas básicas y cámaras → menos código que escribir desde cero.
- Hay que aprender la API de Phaser (escenas, sistemas), no solo JS puro. Es un coste razonable dado que evitamos reinventar lo de bajo nivel.
- El "Hello World" de M1 será una escena de Phaser sirviéndose desde el navegador.
- Servicio de despliegue (Vercel/Netlify/itch.io) sigue pendiente — se decide en S2.

### Nota de proceso

Esta decisión se tomó fuera del flujo formal (sin sesión guiada, sin tabla comparativa escrita). No es un problema en sí, pero al pasar a documentación quedó un hueco entre lo que sabíamos y lo que reflejaban los docs. Aprendizaje: cuando una decisión se toma offline, el primer paso al sentarnos es **dejarla escrita** antes de seguir.

---

## ADR-004 — Tooling de Phaser: Vite

**Fecha:** 2026-05-08
**Estado:** Accepted

### Contexto

Decidido el stack (ADR-003: Phaser.js), quedaba elegir cómo servimos Phaser y nuestro código al navegador. Dos caminos viables:

- **HTML plano + `<script>` desde CDN.** Cero setup, cero dependencias, ideal para entender los fundamentos del navegador. Funciona abriendo el archivo (con un mini-servidor local).
- **Vite (bundler).** Servidor de desarrollo con hot reload, módulos ES (`import`/`export`), build optimizado para producción. Estándar profesional actual.

El `CLAUDE.md` ya anticipaba una posible migración a Vite en M2. La pregunta era si arrancar con HTML plano y migrar más adelante, o empezar con Vite directamente.

### Decisión

Usamos **Vite** desde el primer "Hello World".

Razones:
- Evita una migración futura (deuda técnica eliminada antes de existir).
- El hot reload acelera el ciclo de feedback durante el desarrollo.
- Es el tooling estándar en proyectos web reales — alinea el aprendizaje con lo que Sergio se encontrará en cualquier empresa.
- El despliegue en Vercel (T-013) detecta Vite automáticamente, simplificando S3.
- Más superficie de aprendizaje para Sergio: tocar `package.json`, `node_modules`, scripts npm y módulos ES desde el día uno entra de pleno en el objetivo educativo del proyecto.

### Consecuencias

- Hay que entender desde el principio: `package.json`, `node_modules`, scripts npm, módulos ES, configuración mínima de Vite. Curva inicial real pero pequeña.
- A partir de aquí el comando para levantar el juego en local será `npm run dev`, no abrir el `index.html` con doble clic.
- Linter (ESLint + Prettier) entra en juego en M2 cuando ya tengamos código sustancial — el `CLAUDE.md` ya lo anticipa.
- Se introduce dependencia con el ecosistema npm: `node_modules/` puede romperse, las versiones de paquetes pueden cambiar. Riesgo asumido a cambio del beneficio.

---

## Decisiones pendientes

- Servicio de despliegue (M1, S2)
- Estrategia de testing (M3)
- Cómo y cuándo introducimos el workflow agentic (M4)
