let frameX = 0; //0-4max
let frameY = 0; //0-3max
let gameFrame = 0;
let staggerFrames = 15;

class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.avatar = new Player(); // rightX downY corner = 900, 500
    this.door = new Door(145, 40, 79, 128);
    this.clock = new Clock(100, 40);
    this.mates = [];
    this._generateInterval = null;
    this.textClock = document.getElementById('text-clock');
    this.canvas = document.getElementById('canvas');
    this.winPage = document.getElementById('win-page');
    this.losePage = document.getElementById('lose-page');
    this.secondLosePage = document.getElementById('second-lose-page');
    //this.scoreText = document.getElementById('score-text');
    //this.score = 0;
  }

  //function set values by default

  _drawDoor() {
    this.ctx.drawImage(this.door.image, this.door.x, this.door.y, this.door.width, this.door.height);
  }
  
  _drawAvatar() {
    //this.ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh); s=source // d=destination
    this.ctx.drawImage(this.avatar.image, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, this.avatar.d_x, this.avatar.d_y, spriteWidth, spriteHeight);
  }

  _generateMates() {
    this.generateInterval = setInterval(() => {
      const newMate = new Mate();
      newMate._assignImage();
      newMate._assignPosition(this.avatar.d_x, this.avatar.d_y)
      //newMate._assignPosition(1000, 600);
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
        (this.avatar.d_x >= mate.x && this.avatar.d_x <= mate.x + mate.width ||
        this.avatar.d_x + this.avatar.d_width >= mate.x && this.avatar.d_x +this.avatar.d_width <= mate.x + mate.width
        ) && 
          (this.avatar.d_y >= mate.y && this.avatar.d_y <= mate.y + mate.height ||
          this.avatar.d_y + this.avatar.d_height >= mate.y && this.avatar.d_y + this.avatar.d_height <= mate.y + mate.height
          )
      ) {
        this.avatar._stopMovement();
      }
    })
  }

  _drawClock() {
    this.textClock.innerHTML = this.clock.time;
  }

  /*_drawScore() {
    this.scoreText.innerHTML = `Rounds = ${this.score}`;
  }*/

  _checkArrival() {
    if (
      (
        this.clock.minutes === 35
      ) &&
      (this.avatar.d_x >= this.door.x && this.avatar.d_x <= this.door.x + this.door.width ||
      this.avatar.d_x + this.avatar.d_width >= this.door.x && this.avatar.d_x +this.avatar.d_width <= this.door.x + this.door.width
      ) && 
      (this.avatar.d_y >= this.door.y && this.avatar.d_y <= this.door.y + this.door.height ||
      this.avatar.d_y + this.avatar.d_height >= this.door.y && this.avatar.d_y + this.avatar.d_height <= this.door.y + this.door.height
      )
      )
      {
        this.winPage.style = 'display: flex';
        this.canvas.style = 'display: none';
        this.canvas.classList.add('hidden');
        this.clock._stopClock();
        this.textClock.classList.add('hidden');
        //this.score ++;
        this.avatar._hide();
    }
    else if (
      (this.clock.minutes < 34) &&
      (this.avatar.d_x >= this.door.x && this.avatar.d_x <= this.door.x + this.door.width ||
      this.avatar.d_x + this.avatar.d_width >= this.door.x && this.avatar.d_x +this.avatar.d_width <= this.door.x + this.door.width
      ) && 
      (this.avatar.d_y >= this.door.y && this.avatar.d_y <= this.door.y + this.door.height ||
      this.avatar.d_y + this.avatar.d_height >= this.door.y && this.avatar.d_y + this.avatar.d_height <= this.door.y + this.door.height
      )
      )
      {
        this.clock._stopClock()
        this.secondLosePage.style = 'display: flex';
        this.canvas.style = 'display: none';
        this.canvas.classList.add('hidden');
        this.textClock.classList.add('hidden');
    }
  }

  _checkTimeOver(){
    if (this.clock.minutes === 36){
      this.clock._stopClock()
      this.losePage.style = 'display: flex';
      this.canvas.style = 'display: none';
      this.canvas.classList.add('hidden');
      this.textClock.classList.add('hidden');
    }
  }

  _cleanCanvas() {
    this.ctx.clearRect(0, 0, 1280, 720);
  }

  _update() {
    this._cleanCanvas();
    this._drawDoor();
    this._drawAvatar();
    this._drawClock();
    this._drawMates();
    //this._drawScore();
    this._checkArrival();
    //this._checkTimeOver();
    //this._checkMeeting();
    gameFrame ++;
    let position = Math.floor(gameFrame / staggerFrames) % 5;
    frameX = spriteWidth * position;
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._update();
    this.clock._createClock();
    this.avatar._autoWalk();
    this._generateMates();
  }

}

