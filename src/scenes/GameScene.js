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
    this.add.rectangle(400, 300, 32, 32, 0xff0000);
  }
}