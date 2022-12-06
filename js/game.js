//let frameX = 0; //0-4max
//let frameY = 0; //0-3max

class Game{
  constructor(context) {
    this.ctx = context;
    this.frameX = 0; //0-4max
    this.frameY = 0; //0-3max
    this.avatar = new Player (800, 500, spriteWidth, spriteHeight);
    //this.avatar = new Player (this.frameX * spriteWidth, this.frameY * spriteHeight, spriteWidth, spriteHeight, 900, 500, spriteWidth, spriteHeight); // rightX downY corner = 900, 500
    this.door = new Door (220, 110, 60, 100); //(450, 300, 50, 50)
    this.clock = new Clock (100, 40);
    this.mates = [];
    this._generateInterval = null;
    this.textClock = document.getElementById('text-clock');
    this.canvas = document.getElementById('canvas');
    this.winPage = document.getElementById('win-page');
    this.losePage = document.getElementById('lose-page');
    this.secondLosePage = document.getElementById('second-lose-page');
    this.scoreText = document.getElementById('score-text');
    this.score = 0;
  }

  _drawDoor() {
    this.ctx.drawImage(this.door.image, this.door.x, this.door.y, this.door.width, this.door.height);
  }
  
  _drawAvatar() { // CONSIDERAR PASARLE LOS DATOS DE FRAMEX Y FRAMEY AQUI
    //this.ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh); s=source // d=destination
    this.ctx.drawImage(this.avatar.image, this.avatar.x, this.avatar.y, this.avatar.width, this.avatar.height);
    //this.ctx.drawImage(this.avatar.image, this.avatar.s_x, this.avatar.s_y, this.avatar.s_width, this.avatar.s_height, this.avatar.d_x, this.avatar.d_y, this.avatar.d_width, this.avatar.d_height);
  }

  _spriteIterater() {
    if (this.frameX < 4) {this.frameX ++}
    else {this.frameX = 0}
    console.log(this.frameX);
  }

  /* THIS CODE ITERATES WELL BUT IMAGE DOES NOT CHANGE
  _spriteIterater() {
    if (this.frameX < 4) {this.frameX ++}
    else {this.frameX = 0}
    console.log(this.frameX);
  }
  */

  _generateMates() {
    this.generateInterval = setInterval(() => {
      const newMate = new Mate();
      newMate._assignImage();
      //newMate._assignPosition(this.avatar.x, this.avatar.y)
      newMate._assignPosition(1000, 600);
      newMate._mateAppear();
      this.mates.push(newMate);
    }, 700)
  }

  _drawMates() {
    this.mates.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
    })
  }

  // GENERATE CLASSROOM IN RANDOM POSITION
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
    this.textClock.innerHTML = this.clock.time;
  }

  _drawScore() {
    this.scoreText.innerHTML = `Rounds = ${this.score}`;
  }

  _checkArrival() {
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
        this.score ++;
        this.avatar._hide();
        // RESET CANVAS
    }
    else if (
      (this.clock.minutes < 34) &&
      (this.avatar.x >= this.door.x && this.avatar.x <= this.door.x + this.door.width ||
      this.avatar.x + this.avatar.width >= this.door.x && this.avatar.x +this.avatar.width <= this.door.x + this.door.width
      ) && 
      (this.avatar.y >= this.door.y && this.avatar.y <= this.door.y + this.door.height ||
      this.avatar.y + this.avatar.height >= this.door.y && this.avatar.y + this.avatar.height <= this.door.y + this.door.height
      )
    )
    {
      this.clock._stopClock()
      this.secondLosePage.style = 'display: flex';
      this.canvas.style = 'display: none';
      this.textClock.classList.add('hidden');
    }
  }

  _checkTimeOver(){
    if (this.clock.minutes === 36){
      this.clock._stopClock()
      this.losePage.style = 'display: flex';
      this.canvas.style = 'display: none';
      this.textClock.classList.add('hidden');
      // RESET CANVAS
    }
  }

  _cleanCanvas() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._cleanCanvas();
    this._drawDoor();
    this._drawAvatar();
    this._drawClock();
    this._drawMates();
    this._drawScore();
    this._checkArrival();
    this._checkTimeOver();
    this._checkMeeting();
    //this._spriteIterater();
    
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._update();
    this.clock._createClock();
    this.avatar._autoWalk();
    this._generateMates();
  }
}

