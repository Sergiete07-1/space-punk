import Phaser from 'phaser';
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
  const graphics = this.add.graphics();

  for (let fila = 0; fila < 54; fila++) {
    for (let columna = 0; columna < 75; columna++) {
      graphics.fillStyle(0x228B22);
      graphics.fillRect(columna * 32, fila * 32, 32, 32);
    }
  }

  this.player = this.add.rectangle(400, 300, 32, 32, 0xff0000);
  this.physics.add.existing(this.player);
  this.keys = this.input.keyboard.addKeys('W,A,S,D');

  this.cameras.main.startFollow(this.player);
  this.cameras.main.setBounds(0, 0, 2400, 1728);

this.walls = this.physics.add.staticGroup();
this.walls.add(this.add.rectangle(200, 200, 64, 64, 0x8B4513));
this.physics.add.collider(this.player, this.walls);

this.physics.world.setBounds(0, 0, 2400, 1728);
this.player.body.setCollideWorldBounds(true);

}
update() {


this.player.body.setVelocity(0, 0);

if (this.keys.W.isDown) this.player.body.setVelocityY(-150);
if (this.keys.S.isDown) this.player.body.setVelocityY(150);
if (this.keys.A.isDown) this.player.body.setVelocityX(-150);
if (this.keys.D.isDown) this.player.body.setVelocityX(150);

}
}