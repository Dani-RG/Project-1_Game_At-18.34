class Game{
  constructor(context) {
    this.ctx = context;
    this.avatar = new Player (470, 500, 70, 70);
    this.door = new Door (220, 110, 60, 100); //(450, 300, 50, 50)
    this.clock = new Clock (100, 40);
    this.mates = [];
    this._generateInterval = null;
    this.textClock = undefined;
    this.canvas = document.getElementById('canvas');
    this.losePage = document.getElementById('lose-page');
    this.winPage = document.getElementById('win-page');
  }

  _drawDoor() {
    this.ctx.drawImage(this.door.image, this.door.x, this.door.y, this.door.width, this.door.height);
  }

  _drawAvatar() {
    this.ctx.drawImage(this.avatar.image, this.avatar.x, this.avatar.y, this.avatar.width, this.avatar.height);
  }

  _generateMates() {
    this.generateInterval = setInterval(() => {
      const newMate = new Mate();
      newMate._assignImage();
      newMate._assignPosition(this.avatar.x, this.avatar.y)
      newMate._mateAppear();
      this.mates.push(newMate);
    }, 2000)
  }

  _drawMates() {
    this.mates.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
    })
  }

  // generate classroom in random position
  //  ON THIRD WIN, ALERT "GET READY, IT'S LAB DAY!" AND EVERITHING TURNS UP SIDE DOWN, DOOR, AVATAR AND CONTROLS.

  _checkMeeting() {
    this.mates.forEach((mate) => {
      if (
        (this.avatar.x >= mate.x && this.avatar.x <= mate.x + mate.width ||
        this.avatar.x + this.avatar.width >= mate.x && this.avatar.x +this.avatar.width <= mate.x + mate.width
        ) && 
          (this.avatar.y >= mate.y && this.avatar.y <= mate.y + mate.height ||
          this.avatar.y + this.avatar.height >= mate.y && this.avatar.y + this.avatar.height <= mate.y + mate.height
          )
      ) {
        this.avatar._stopMovement();
      }
    })
  }

  _drawClock() {
    //INNERTEXT HTML o TEXT CONTENT
    this.textClock = document.getElementById('textClock');
    this.textClock.innerHTML = this.clock.time;
    //this.ctx.font = '30px Courier New';
    //this.ctx.fillText(this.clock.time, this.clock.x, this.clock.y, this.clock.width, this.clock.height);
  }

  _cleanCanvas() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _checkCollision() {
    if (
      (
        this.clock.minutes === 35
      ) &&
      (this.avatar.x >= this.door.x && this.avatar.x <= this.door.x + this.door.width ||
      this.avatar.x + this.avatar.width >= this.door.x && this.avatar.x +this.avatar.width <= this.door.x + this.door.width
      ) && 
        (this.avatar.y >= this.door.y && this.avatar.y <= this.door.y + this.door.height ||
        this.avatar.y + this.avatar.height >= this.door.y && this.avatar.y + this.avatar.height <= this.door.y + this.door.height
        )
        )
      {
        this.winPage.style = 'display: flex';
        this.canvas.style = 'display: none';
        this.clock._stopClock();
        this.textClock.classList.add('hidden');
        //this.losePage.classList.add('hidden'); DOES NOT WORK
    }
  }

  _checkTimeOver(){
    if (this.clock.minutes === 36){
      this.clock._stopClock()
      this.losePage.style = 'display: flex';
      this.canvas.style = 'display: none';
      this.textClock.classList.add('hidden');
    }
  }

  _update() {
    this._cleanCanvas();
    this._drawDoor();
    this._drawAvatar();
    this._drawClock();
    this._drawMates();
    this._checkCollision();
    this._checkTimeOver();
    this._checkMeeting();
    
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._update();
    this.clock._createClock();
    this.avatar._autoWalk();
    this._generateMates();
  }
}

