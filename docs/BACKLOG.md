# Backlog

> Tareas activas del proyecto. Se actualiza cada sesión.
>
> **Formato:** cada tarea tiene un ID, título, etiquetas y estado.
> **Etiquetas:** `[product]` `[tech]` `[learning]` `[docs]` `[infra]`
> **Estados:** `🔵 todo` `🟡 doing` `🟢 done` `⚫ blocked` `🔴 cancelled`

---

## 🟡 In Progress

_(Vacío.)_

---

## 🔵 To Do — Sprint actual (M2)

### S5 — Sesión 5: Cámara y mejoras del mapa

> Objetivo: cámara que sigue al jugador, mapa más grande que la pantalla.

- [ ] **T-024** [tech] Cámara que sigue al jugador (el mapa se mueve, el jugador queda centrado)

---

## 🔵 To Do — Próximos sprints

_(Se irá llenando conforme avancemos. No tiene sentido planificar M3 al detalle desde M1.)_

### Ideas sueltas para M2 (a refinar al cerrar M1)

- [ ] **T-011** [tech] Dibujar arquitectura básica del juego (escenas, input, render, estado) en Excalidraw o papel y guardarla en `docs/`
- [ ] Diseño de las pantallas principales del juego (wireframes simples)
- [ ] Componentes de UI básicos
- [ ] Estado del juego: qué necesita guardar mientras se juega
- [ ] Lógica del bucle principal del juego
- [ ] Pantalla de inicio y de fin de partida

### Ideas sueltas para M3

- [ ] **T-003** [learning] Repaso conceptos básicos: cliente vs servidor, frontend vs backend, qué es una API *(movido aquí porque hasta M3 el juego es 100% client-side)*
- [ ] Sistema de persistencia
- [ ] Cuentas de usuario simples (opcional)
- [ ] Tests unitarios de la lógica del juego
- [ ] Pipeline de CI con GitHub Actions

### Ideas sueltas para más adelante

- [ ] Refactor del código de M2 con tests que protegen (M4)
- [ ] Feature compleja vía agente (M4)
- [ ] Testing con usuarios reales (M5)
- [ ] Vídeo demo (M5)

---

## ⚫ Blocked

_(Vacío.)_

---

## 🟢 Done

_(Las más recientes arriba.)_

### S4 — Sesión 4: Inicio de M2 — arquitectura y mapa básico (2026-05-12)

- [x] **T-011** [tech] Completar arquitectura básica del juego (input, render, estado dentro de GameScene)
- [x] **T-020** [tech] Crear mapa básico
- [x] **T-021** [tech] Personaje visible en el mapa
- [x] **T-022** [tech] Movimiento del personaje con WASD
- [x] **T-023** [tech] Límites de movimiento del personaje

### S3 — Sesión 3: Despliegue en Vercel y cierre de M1 (2026-05-11)

- [x] **T-013** [infra] Configurar despliegue automático en Vercel (push a `main` → live)
- [x] **T-014** [tech] Push del Hello World → desplegado en URL pública (space-punk.vercel.app)
- [x] **T-015** [docs] Poblar backlog de M2 con tareas concretas (T-020 a T-029)
- [x] **T-018** [docs] Entrada de S3 + retro de M1 en `LEARNINGS.md`

### S2 — Sesión 2: Setup del entorno y primer Hello World (2026-05-08)

- [x] **T-006-PREP** [infra] *(Abel)* Preparar zip del proyecto y enviárselo a Sergio
- [x] **T-005** [infra] Instalar VSCode, Node.js LTS, Git → ya estaban instalados (verificado)
- [x] **T-004** [infra] Cuenta GitHub + SSH configurado (claves Ed25519, agente automático)
- [x] **T-006** [tech] Repo `space-punk` creado en GitHub y primer push (vía SSH)
- [x] **T-008** [docs] URLs reales en `docs/COLABORACION.md`
- [x] **T-012a** [tech] Tooling de Phaser decidido → ADR-004 (Vite)
- [x] **T-012** [tech] Hello World de Phaser 4.1.0 corriendo en `localhost:5173`
- [x] **T-016** [docs] Entrada de S1 en `LEARNINGS.md`
- [x] **T-017** [docs] Entrada de S2 en `LEARNINGS.md`

### S1 — Sesión 1: Kickoff (2026-05-06)

- [x] **T-001** [product] Entrevista de descubrimiento: qué juego le motiva construir → Space Punk acordado
- [x] **T-002** [product] Redactar mini-PRD → guardado en `docs/PRD.md`
- [x] **T-009** [learning] Entender qué es un stack y comparar 2-3 opciones → investigación de Sergio fuera de sesión
- [x] **T-010** [tech] Decidir stack y documentar la decisión en `DECISIONS.md` → ADR-003 (Phaser.js)

---

## 🔴 Cancelled

_(Vacío. Cuando algo se cancele, anotar el motivo.)_
