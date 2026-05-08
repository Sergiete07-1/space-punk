# Backlog

> Tareas activas del proyecto. Se actualiza cada sesión.
>
> **Formato:** cada tarea tiene un ID, título, etiquetas y estado.
> **Etiquetas:** `[product]` `[tech]` `[learning]` `[docs]` `[infra]`
> **Estados:** `🔵 todo` `🟡 doing` `🟢 done` `⚫ blocked` `🔴 cancelled`

---

## 🟡 In Progress

- [ ] **T-006-PREP** [infra] *(Abel)* Preparar zip del proyecto y enviárselo a Sergio para que lo instale

---

## 🔵 To Do — Sprint actual (M1)

### S2 — Sesión 2: Setup del entorno y primer Hello World

> Objetivo: Sergio tiene su máquina lista, el repo subido a GitHub, y un Hello World de Phaser corriendo en local.

- [ ] **T-004** [infra] Crear cuenta de GitHub (si no la tiene) y configurar SSH/token
- [ ] **T-005** [infra] Instalar VSCode, Node.js LTS, Git en el equipo del estudiante
- [ ] **T-006** [tech] Crear repo vacío en GitHub, descomprimir el zip dentro y hacer primer push (ver `docs/COLABORACION.md`)
- [ ] **T-008** [docs] Sustituir las URLs placeholder de `docs/COLABORACION.md` por la URL real del repo (hay 2 ocurrencias: la del `git clone` que usa Abel y la del `git remote add origin` que usa Sergio)
- [ ] **T-012a** [tech] Decidir tooling de Phaser: HTML plano + `<script>` vs bundler (Vite). Documentar en `DECISIONS.md` (ADR-004)
- [ ] **T-012** [tech] "Hello World" de Phaser corriendo en local (una escena con texto o un sprite)
- [ ] **T-016** [docs] Escribir entrada de S1 en `LEARNINGS.md` (retrospectiva — quedó pendiente)
- [ ] **T-017** [docs] Escribir entrada de S2 en `LEARNINGS.md` al cerrar la sesión

### S3 — Sesión 3: Despliegue y cierre de M1

> Objetivo: el Hello World está desplegado en una URL pública con auto-deploy, y el backlog de M2 está poblado.

- [ ] **T-013** [infra] Configurar despliegue automático en **Vercel** (push a `main` → live)
- [ ] **T-014** [tech] Push del Hello World → desplegado en URL pública compartible
- [ ] **T-015** [docs] Poblar backlog de M2 con tareas concretas (mínimo 10)
- [ ] **T-018** [docs] Escribir entrada de S3 + retro de M1 en `LEARNINGS.md`

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

### S1 — Sesión 1: Kickoff (2026-05-06)

- [x] **T-001** [product] Entrevista de descubrimiento: qué juego le motiva construir → Space Punk acordado
- [x] **T-002** [product] Redactar mini-PRD → guardado en `docs/PRD.md`
- [x] **T-009** [learning] Entender qué es un stack y comparar 2-3 opciones → investigación de Sergio fuera de sesión
- [x] **T-010** [tech] Decidir stack y documentar la decisión en `DECISIONS.md` → ADR-003 (Phaser.js)

---

## 🔴 Cancelled

_(Vacío. Cuando algo se cancele, anotar el motivo.)_
