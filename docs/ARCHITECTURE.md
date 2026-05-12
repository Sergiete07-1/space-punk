# Arquitectura del juego

## Escenas

- **MenuScene** — pantalla de inicio
- **ControlsScene** — pantalla de controles
- **GameScene** — donde ocurre el juego
- **GameOverScene** — cuando el jugador muere

---

## GameScene

### Input
- Teclado: WASD para mover al personaje en las cuatro direcciones
- Ratón: para apuntar (se añade cuando lleguemos al combate)

### Render
- Mapa del mundo (tilemap)
- Sprite del personaje encima del mapa

### Estado
- Vida del jugador (se añade cuando lleguemos al combate)
- Por ahora Phaser gestiona automáticamente la posición `x`/`y` del personaje