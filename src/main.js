import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  scene: {
    create: function () {
      this.add.text(400, 300, 'Hello, Space Punk!', {
        font: '32px monospace',
        color: '#ffffff'
      }).setOrigin(0.5);
    }
  }
};

new Phaser.Game(config);