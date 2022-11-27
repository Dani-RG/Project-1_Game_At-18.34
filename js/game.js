class Game{
  constructor(context) {
    this.ctx = context;
    this.avatar = new Player (470, 500, 70, 70);
    this.door = new Door (300, 0, 400, 300);
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
        default:
          break;
      }
    });
  }

  _drawDoor() {
    this.ctx.drawImage(this.door.image, this.door.x, this.door.y, this.door.width, this.door.height);
  }

  _update() {
    this._drawAvatar();
    this._drawDoor();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
  }
}

