const spriteWidth = 55.8; //one sprite, not the sprite sheet
const spriteHeight = 72.75; //one sprite, not the sprite sheet
// noha 4 ways = 279 x 291 // one noha = 55.8 x 72.75

//let frameX = 0; //0-4max
//let frameY = 0; //0-3max

class Player {
  constructor(s_x, s_y, s_width, s_height, d_x, d_y, d_width, d_height) {
    this.image = avatar;
    //SOURCE ARGUMENTS:
    this.s_x = s_x;
    this.s_y = s_y;
    this.s_width = s_width;
    this.s_height = s_height;
    //DESTINATION ARGUMENTS:
    this.d_x = d_x;
    this.d_y = d_y;
    this.d_width = d_width;
    this.d_height = d_height;

    //this.frameX = 0; //0-4max
    //this.frameY = 0; //0-3max
  }

  /*_spriteIterater() {
    if (this.frameX < 4) {this.frameX ++}
    else {this.frameX = 0}
    console.log(this.frameX);
  }*/

}

/*if (frameX < 4) {frameX ++}
else {frameX = 0}
console.log(frameX);*/


  /*
  autoRight() {
    this.x = this.x + 1;
    if (this.x > 1000) {
      this.x = 0 - this.width;
    }
  }

  autoLeft() {
    this.x = this.x - 1;
    if (this.x + this.width < 0) {
      this.x = 1000;
    }
  }

  autoUp() {
    this.y = this.y - 1;
    if (this.y + this.height < 0) {
        this.y = 600;
    }
  }

  autoDown() {
    this.y = this.y + 1;
    if (this.y > 600) {
        this.y = 0 - this.height;
    }
  }

    // AUMENTARLE SU VELOCIDAD POR RONDAS PUEDE SER UN IF CANVAS 1 {AUTOWALK NO1}, ELSE IF CANVAS 2 {AUTOWALK NO2}

  _autoWalk() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {

        case 'ArrowLeft':
          if (this.curInterval != 0) {
            clearInterval(this.curInterval)
            this.curInterval = setInterval (()=>this.autoLeft(), 2)
          }
          else {
            this.curInterval = setInterval (()=>this.autoLeft(), 2)
          }
        break;

        case 'ArrowRight':
          if (this.curInterval != 0) {
            clearInterval(this.curInterval)
            this.curInterval = setInterval (()=>this.autoRight(), 2)
          }
          else {
            this.curInterval = setInterval (()=>this.autoRight(), 2)
          }
          break;

        case 'ArrowUp':
          if (this.curInterval != 0) {
            clearInterval(this.curInterval)
            this.curInterval = setInterval (()=>this.autoUp(), 2)
          }
          else {
            this.curInterval = setInterval (()=>this.autoUp(), 2)
          }
          break;

        case 'ArrowDown':
          if (this.curInterval != 0) {
            clearInterval(this.curInterval)
            this.curInterval = setInterval (()=>this.autoDown(), 2)
          }
          else {
            this.curInterval = setInterval (()=>this.autoDown(), 2)
          }
          break;

        default:
          break;
      }
    })
  }
  
  _stopMovement() {
    clearInterval(this.curInterval);
  }

  _hide() {
    this.x = -70;
    this.y = -70;
    this.width = 0;
    this.height = 0;
  }
}
*/

//////////////////////////////////////////////////////////////////////////////////

/* THIS CODE WORKS. IT MOVES THE AVATAR AUTOMATICALLY AND CHANGES ITS DIRECTIONS
class Player {
  constructor(x, y, width, height) {
      this.image = avatar;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.curInterval = null;
  }

  autoRight() {
    this.x = this.x + 1;
    if (this.x > 1000) {
      this.x = 0 - this.width;
    }
  }

  autoLeft() {
    this.x = this.x - 1;
    if (this.x + this.width < 0) {
      this.x = 1000;
    }
  }

  autoUp() {
    this.y = this.y - 1;
    if (this.y + this.height < 0) {
        this.y = 600;
    }
  }

  autoDown() {
    this.y = this.y + 1;
    if (this.y > 600) {
        this.y = 0 - this.height;
    }
  }

    // AUMENTARLE SU VELOCIDAD POR RONDAS PUEDE SER UN IF CANVAS 1 {AUTOWALK NO1}, ELSE IF CANVAS 2 {AUTOWALK NO2}

  _autoWalk() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {

        case 'ArrowLeft':

          if (this.curInterval != 0) {
            clearInterval(this.curInterval)
            this.curInterval = setInterval (()=>this.autoLeft(), 2)
          }
          else {
            this.curInterval = setInterval (()=>this.autoLeft(), 2)
          }
        break;

        case 'ArrowRight':
          if (this.curInterval != 0) {
            clearInterval(this.curInterval)
            this.curInterval = setInterval (()=>this.autoRight(), 2)
          }
          else {
            this.curInterval = setInterval (()=>this.autoRight(), 2)
          }
          break;

        case 'ArrowUp':
          if (this.curInterval != 0) {
            clearInterval(this.curInterval)
            this.curInterval = setInterval (()=>this.autoUp(), 2)
          }
          else {
            this.curInterval = setInterval (()=>this.autoUp(), 2)
          }
          break;

        case 'ArrowDown':
          if (this.curInterval != 0) {
            clearInterval(this.curInterval)
            this.curInterval = setInterval (()=>this.autoDown(), 2)
          }
          else {
            this.curInterval = setInterval (()=>this.autoDown(), 2)
          }
          break;

        default:
          break;
      }
    })
  }
  
  _stopMovement() {
    clearInterval(this.curInterval);
  }

  _hide() {
    this.x = -70;
    this.y = -70;
    this.width = 0;
    this.height = 0;
  }
}
*/