class Game{
  constructor(context) {
    this.ctx = context;
    this.avatar = new Player (470, 500, 70, 70);
    this.door = new Door (270, 0, 450, 350); //(450, 300, 50, 50)
    this.clock = new Clock (100, 40);
  }

  _drawDoor() {
    this.ctx.drawImage(this.door.image, this.door.x, this.door.y, this.door.width, this.door.height);
  }

  _drawAvatar() {
    this.ctx.drawImage(this.avatar.image, this.avatar.x, this.avatar.y, this.avatar.width, this.avatar.height);
  }

  // generate classroom in random position
  //  ON THIRD WIN, ALERT "GET READY, IT'S LAB DAY!" AND EVERITHING TURNS UP SIDE DOWN, DOOR, AVATAR AND CONTROLS.

  /*
  _checkCollision() {
    if ((this.avatar.x + (this.avatar.width/2) === this.door.x) && 
      (this.avatar.y + (this.avatar.height/2) === (this.door.y + this.door.height))) {
        window.alert('Congrats!');
    }
  }
*/

  _checkCollision() {
    if (this.avatar.x === this.door.x) /*&& 
      (this.avatar.y + (this.avatar.height/2) === (this.door.y + this.door.height))*/ {
        window.alert('Congrats!');
    }
  }

  _drawClock() {
    this.ctx.font = '30px Courier New';
    this.ctx.fillText(this.clock.time, this.clock.x, this.clock.y, this.clock.width, this.clock.height);
  }

 // autowalk

  _cleanCanvas() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _checkMinutes(){
    if (this.clock.minutes === 34){
      this.clock._stopClock()
    }
  }

  // IF AVATAR TOUCH DOOR, ALERT CONGRATS!
  // IF MINUTES O CLOCK === 18:34, ALERT TRY AGAIN!

  _update() {
    this._cleanCanvas();
    this._drawDoor();
    this._drawAvatar();
    this._drawClock();
    this._checkMinutes();
    this._checkCollision();
    
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._update();
    this.clock._createClock();
    this.avatar._autoWalk();
  }
}

