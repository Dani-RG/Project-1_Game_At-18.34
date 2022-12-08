const spriteWidth = 84;
const spriteHeight = 109;
let avatarX = this.d_x;
let avatarY = this.d_y;

class Player {
  constructor() {
    this.image = avatar;
    //SOURCE ARGUMENTS:
    this.s_x = 0;
    this.s_y = 0;
    this.s_width = spriteWidth;
    this.s_height = spriteHeight;
    //DESTINATION ARGUMENTS:
    this.d_x = 1100;
    this.d_y = 560;
    this.d_width = spriteWidth;
    this.d_height = spriteHeight;
    this.curInterval = null;
  }

  autoRight() {
    frameY = 3;
    this.d_x = this.d_x + 1;
    if (this.d_x > 1280) {
      this.d_x = 0 - this.d_width;
    }
  }

  autoLeft() {
    frameY = 1;
    this.d_x = this.d_x - 1;
    if (this.d_x + this.d_width < 0) {
      this.d_x = 1280;
    }
  }

  autoUp() {
    frameY = 0;
    this.d_y = this.d_y - 1;
    if (this.d_y + this.d_height < 0) {
        this.d_y = 720;
    }
  }

  autoDown() {
    frameY = 2;
    this.d_y = this.d_y + 1;
    if (this.d_y > 720) {
        this.d_y = 0 - this.d_height;
    }
  }

  _autoWalk() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {

        case 'ArrowLeft':

          if (this.curInterval != 0) {
            clearInterval(this.curInterval)
            this.curInterval = setInterval (()=>this.autoLeft(), 3)
          }
          else {
            this.curInterval = setInterval (()=>this.autoLeft(), 3)
          }
        break;

        case 'ArrowRight':
          if (this.curInterval != 0) {
            clearInterval(this.curInterval)
            this.curInterval = setInterval (()=>this.autoRight(), 3)
          }
          else {
            this.curInterval = setInterval (()=>this.autoRight(), 3)
          }
          break;

        case 'ArrowUp':
          if (this.curInterval != 0) {
            clearInterval(this.curInterval)
            this.curInterval = setInterval (()=>this.autoUp(), 3)
          }
          else {
            this.curInterval = setInterval (()=>this.autoUp(), 3)
          }
          break;

        case 'ArrowDown':
          if (this.curInterval != 0) {
            clearInterval(this.curInterval)
            this.curInterval = setInterval (()=>this.autoDown(), 3)
          }
          else {
            this.curInterval = setInterval (()=>this.autoDown(), 3)
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
    this.d_x = -70;
    this.d_y = -70;
    this.d_width = 0;
    this.d_height = 0;
  }
}