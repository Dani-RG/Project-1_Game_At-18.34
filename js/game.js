class Game{
  constructor(context) {
    this.ctx = context;
    this.avatar = new Player (470, 500, 70, 70);
    this.door = new Door (270, 0, 450, 350);
    this.clock = new Clock (100, 40);
  }

  _drawDoor() {
    this.ctx.drawImage(this.door.image, this.door.x, this.door.y, this.door.width, this.door.height);
  }

  _drawAvatar() {
    this.ctx.drawImage(this.avatar.image, this.avatar.x, this.avatar.y, this.avatar.width, this.avatar.height);
  }

  _assignControls() {
    // Keyboard Controls:
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.avatar.moveLeft();
          break;
        case 'ArrowRight':
          this.avatar.moveRight();
          break;
        case 'ArrowUp':
          this.avatar.moveUp();
          break;
        case 'ArrowDown':
          this.avatar.moveDown();
          break;
        default:
          break;
      }
    });
  }

  _drawClock() {
    this.ctx.font = '30px Courier New';
    this.ctx.fillText(this.clock.time, this.clock.x, this.clock.y, this.clock.width, this.clock.height);
  }

  _cleanCanvas() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._cleanCanvas();
    this._drawDoor();
    this._drawAvatar();
    this._drawClock();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._update();
    this._assignControls();
  }
}

