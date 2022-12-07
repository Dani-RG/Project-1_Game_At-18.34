/* CORRECT CODE TO DISPLAY ANIMATED SPRITE WITHOUT MOVEMENT:
const spriteWidth = 55.8; //one sprite, not the sprite sheet
const spriteHeight = 72.75; //one sprite, not the sprite sheet
// noha 4 ways = 279 x 291 // one noha = 55.8 x 72.75

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
  }
}*/

const spriteWidth = 55.8; //one sprite, not the sprite sheet
const spriteHeight = 72.75; //one sprite, not the sprite sheet
// noha 4 ways = 279 x 291 // one noha = 55.8 x 72.75

class Player {
  //constructor(s_x, s_y, s_width, s_height, d_x, d_y, d_width, d_height) {
  constructor() {
    this.image = avatar;
    //SOURCE ARGUMENTS:
    this.s_x = 0;
    this.s_y = 0;
    this.s_width = spriteWidth;
    this.s_height = spriteHeight;
    //DESTINATION ARGUMENTS:
    this.d_x = 0;
    this.d_y = 0;
    this.d_width = spriteWidth;
    this.d_height = spriteHeight;
    //this.curInterval = null;
  }

  moveRight() {
    this.d_x = this.d_x + 25;
    console.log("arrow");
    console.log(this.d_x);
    if (this.d_x > 1000) {
      this.d_x = 0 - this.d_width;
    }
  }

  moveLeft() {
    this.d_x = this.d_x - 25;
    console.log("arrow");
    if (this.d_x + this.d_width < 0) {
      this.d_x = 1000;
    }
  }


  moveUp() {
      this.d_y = this.d_y - 25;
      console.log("arrow");
      if (this.d_y + this.d_height < 0) {
          this.d_y = 600;
      }
  }

  moveDown() {
      this.d_y = this.d_y + 25;
      console.log("arrow");
      if (this.d_y > 600) {
          this.d_y = 0 - this.d_height;
      }
  }

}

  /*autoRight() {
    this.s_x = this.s_x + 1;
    if (this.s_x > 1000) {
      this.s_x = 0 - this.s_width;
    }
  }

  autoLeft() {
    this.s_x = this.s_x - 1;
    if (this.s_x + this.s_width < 0) {
      this.s_x = 1000;
    }
  }

  autoUp() {
    this.s_y = this.s_y - 1;
    if (this.s_y + this.s_height < 0) {
        this.s_y = 600;
    }
  }

  autoDown() {
    this.s_y = this.s_y + 1;
    if (this.s_y > 600) {
        this.s_y = 0 - this.s_height;
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
    this.s_x = -70;
    this.s_y = -70;
    this.s_width = 0;
    this.s_height = 0;
  }
}*/


// THIS CODE WORKS. IT MOVES THE AVATAR AUTOMATICALLY AND CHANGES ITS DIRECTIONS:
/*const spriteWidth = 55.8; //one sprite, not the sprite sheet
const spriteHeight = 72.75; //one sprite, not the sprite sheet

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
}*/

// ORIGINAL CODE. IT WORKS MOVING THE AVATAR AUTOMATICALLY AND CHANGING ITS DIRECTIONS
/*class Player {
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