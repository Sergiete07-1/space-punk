import Phaser from 'phaser';
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {

  const map = this.make.tilemap({ key: 'map' });
  const tileset = map.addTilesetImage('desert', 'tiles');
  const layer = map.createLayer('Capa de patrones 1', tileset, 0, 0);
  layer.setScale(2);

  this.player = this.add.rectangle(400, 300, 32, 32, 0xff0000);
  this.physics.add.existing(this.player);
  this.keys = this.input.keyboard.addKeys('W,A,S,D');

  this.cameras.main.setBounds(0, 0, map.widthInPixels * 2, map.heightInPixels * 2);
  this.physics.world.setBounds(0, 0, map.widthInPixels * 2, map.heightInPixels * 2);

  this.player.body.setCollideWorldBounds(true);
  this.cameras.main.startFollow(this.player);
}

preload() {
  this.load.image('tiles', 'assets/tilemap_packed.png');
  this.load.tilemapTiledJSON('map', 'assets/map.json');
}

update() {


this.player.body.setVelocity(0, 0);

if (this.keys.W.isDown) this.player.body.setVelocityY(-150);
if (this.keys.S.isDown) this.player.body.setVelocityY(150);
if (this.keys.A.isDown) this.player.body.setVelocityX(-150);
if (this.keys.D.isDown) this.player.body.setVelocityX(150);

}

}