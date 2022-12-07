//let frameX = 0; //0-4max
//let frameY = 0; //0-3max

class Game{
  constructor(context) {
    this.ctx = context;
    //this.avatar = new Player (800, 500, spriteWidth, spriteHeight);
    this.avatar = new Player(); // rightX downY corner = 900, 500
    this.door = new Door(220, 110, 60, 100); //(450, 300, 50, 50)
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
    this.frameX = 0; //0-4max
    this.frameY = 1; //0-3max
    this.gameFrame = 0;
    this.staggerFrames = 7;
  }

  //function set values by default

  _drawDoor() {
    this.ctx.drawImage(this.door.image, this.door.x, this.door.y, this.door.width, this.door.height);
  }
  
  _drawAvatar() {
    //this.ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh); s=source // d=destination
    //////this.ctx.drawImage(this.avatar.image, this.avatar.x, this.avatar.y, this.avatar.width, this.avatar.height);
    ////this.ctx.drawImage(this.avatar.image, this.avatar.s_x, this.avatar.s_y, this.avatar.s_width, this.avatar.s_height, this.avatar.d_x, this.avatar.d_y, this.avatar.d_width, this.avatar.d_height);
    //this.ctx.drawImage(this.avatar.image, this.frameX * spriteWidth, this.frameY * spriteHeight, spriteWidth, spriteHeight, 900, 500, spriteWidth, spriteHeight);
    this.ctx.drawImage(this.avatar.image, this.frameX, this.frameY * spriteHeight, spriteWidth, spriteHeight, this.avatar.d_x, this.avatar.d_y, spriteWidth, spriteHeight);
  }

  _assignControls() {
    // Keyboard Controls:
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.frameY = 1;
          this.avatar.moveLeft();
          break;
        case 'ArrowRight':
          this.frameY = 3;
          this.avatar.moveRight();
          break;
        case 'ArrowUp':
          this.frameY = 0;
          this.avatar.moveUp();
          break;
        case 'ArrowDown':
          this.frameY = 2;
          this.avatar.moveDown();
          break;
        default:
          break;
      }
    });
  }

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

  /*_drawScore() {
    this.scoreText.innerHTML = `Rounds = ${this.score}`;
  }*/

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
        //this.score ++;
        this.avatar._hide();
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
      //set values by default
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
    //this._drawScore();
    //this._checkArrival();
    //this._checkTimeOver();
    //this._checkMeeting();

    this.gameFrame ++;
    let position = Math.floor(this.gameFrame / this.staggerFrames) % 5;
    this.frameX = spriteWidth * position;

    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._update();
    this.clock._createClock();
    //this.avatar._autoWalk();
    this._generateMates();
    this._assignControls();
  }

}

