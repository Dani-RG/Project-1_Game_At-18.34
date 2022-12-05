class Player {
    constructor(x, y, width, height) {
        this.image = avatar;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.curInterval = null;
        //this.playerPosition = null;
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
              this.curInterval = setInterval (()=>this.autoDown(), 4)
            }
            else {
              this.curInterval = setInterval (()=>this.autoDown(), 4)
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

    //playerPosition
}


