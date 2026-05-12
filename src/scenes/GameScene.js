import Phaser from 'phaser';
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    const graphics = this.add.graphics();
    

    for(let fila = 0; fila < 18; fila++){
      for(let columna = 0; columna < 25; columna++){
        graphics.fillStyle(0x228B22);
        graphics.fillRect(columna * 32, fila * 32, 32, 32);
      }
      
    }
  this.player = this.add.rectangle(400, 300, 32, 32, 0xff0000);  
  this.keys = this.input.keyboard.addKeys('W,A,S,D');
}
update() {
const velocidad = 3;

if (this.keys.W.isDown) {
  this.player.y -= velocidad;
}


if (this.keys.A.isDown) {
  this.player.x -= velocidad;
}

if (this.keys.S.isDown) {
  this.player.y += velocidad;
}

if (this.keys.D.isDown) {
  this.player.x += velocidad;
}

if (this.player.x < 16) this.player.x = 16;
if (this.player.x > 784) this.player.x = 784;
if (this.player.y < 16) this.player.y = 16;
if (this.player.y > 560) this.player.y = 560;

}
}