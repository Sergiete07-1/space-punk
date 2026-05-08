# Cómo trabajamos juntos con Git

> Este documento explica cómo Abel y Sergio comparten el proyecto usando Git y GitHub.
> Léelo antes de tu primera sesión y consúltalo cuando tengas dudas.

---

## La idea general

Usamos **un mismo repositorio en GitHub** para los dos. Así:

- Sergio trabaja en su equipo y sube sus cambios.
- Abel puede ver el progreso desde su equipo en cualquier momento.
- Abel puede dejar tareas actualizando el `BACKLOG.md` y subirlas.
- Sergio las recibe haciendo `git pull` al empezar la sesión.

Es exactamente cómo trabajan los equipos de software reales.

---

## Setup inicial (solo se hace una vez)

### Lo que hace Abel (antes de la primera sesión)

1. Prepara un zip con el contenido actual del proyecto y se lo envía a Sergio.
2. Cuando Sergio suba el repo, Abel lo clona en su equipo:
   ```
   git clone https://github.com/Sergiete07-1/space-punk.git
   ```

### Lo que hace Sergio (primera sesión)

1. Instalar Git, Node.js y VSCode (ver lista de tareas de S2).
2. Crear cuenta en GitHub en github.com.
3. Crear un repositorio nuevo en GitHub llamado `space-punk`. **Dejarlo vacío** (sin README, sin nada).
4. Descomprimir el zip que le pasó Abel en una carpeta local.
5. Abrir la terminal dentro de esa carpeta y ejecutar:

```
git init
git remote add origin https://github.com/Sergiete07-1/space-punk.git
git add .
git commit -m "chore: proyecto inicial"
git push -u origin main
```

6. Avisar a Abel para que clone el repo.

---

## Rutina de cada sesión

### Al empezar

Siempre, antes de tocar nada:

```
git pull
```

Esto descarga los cambios que Abel haya subido (tareas nuevas, notas, etc.).

### Al acabar

Siempre, al terminar la sesión:

```
git add .
git commit -m "tipo: descripción corta de lo que hiciste"
git push
```

Ejemplos de mensajes de commit:
- `feat: personaje se mueve con WASD`
- `fix: la cámara ya no se sale del mapa`
- `docs: actualiza backlog con tareas de M2`
- `chore: configura Phaser con escena inicial`

---

## Quién toca qué

Para evitar conflictos, seguimos esta regla simple:

| Quién | Qué archivos toca |
|-------|-------------------|
| **Sergio** | Todo el código + puede editar `docs/` también |
| **Abel** | Solo `docs/` (BACKLOG, LEARNINGS, DECISIONS, etc.) |

**Regla de oro:** Abel solo edita y sube cambios cuando Sergio **no está trabajando** (por ejemplo, la noche anterior para dejar las tareas del día siguiente).

---

## Qué es un conflicto y cómo evitarlo

Un **conflicto** ocurre cuando los dos editáis el mismo archivo al mismo tiempo y Git no sabe con qué versión quedarse. No es grave, pero hay que resolverlo.

Para evitarlo:
1. **Siempre `git pull` antes de empezar.**
2. Respetar la tabla de "quién toca qué" de arriba.
3. Si tienes dudas, pregunta antes de tocar un archivo que quizás Abel también ha editado.

---

## Ramas (branches)

Por ahora, los dos trabajáis en la rama `main` directamente.

A partir de **M3** empezaremos a usar ramas y pull requests. Se documentará cuando llegue el momento.

---

## Si algo falla

Si Git te da un error que no entiendes:
1. Lee el mensaje completo — suele explicar qué pasó.
2. No hagas nada más hasta entender qué pasó.
3. Pregunta a Abel con el mensaje de error copiado.

Nunca uses comandos que no entiendes para "solucionar" un error de Git. Puedes empeorar las cosas.
