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
      this.x = this.x + 2;
      if (this.x > 1000) {
        this.x = 0 - this.width;
      }
    }
  
    autoLeft() {
      this.x = this.x - 2;
      if (this.x + this.width < 0) {
        this.x = 1000;
      }
    }

    autoUp() {
      this.y = this.y - 2;
      if (this.y + this.height < 0) {
          this.y = 600;
      }
    }

    autoDown() {
      this.y = this.y + 2;
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
              this.curInterval = setInterval (()=>this.autoLeft(), 5)
            }
            else {
              this.curInterval = setInterval (()=>this.autoLeft(), 5)
            }
          break;

          case 'ArrowRight':
              if (this.curInterval != 0) {
              clearInterval(this.curInterval)
              this.curInterval = setInterval (()=>this.autoRight(), 5)
            }
            else {
              this.curInterval = setInterval (()=>this.autoRight(), 5)
            }
            break;

          case 'ArrowUp':
            if (this.curInterval != 0) {
              clearInterval(this.curInterval)
              this.curInterval = setInterval (()=>this.autoUp(), 5)
            }
            else {
              this.curInterval = setInterval (()=>this.autoUp(), 5)
            }
            break;

          case 'ArrowDown':
            if (this.curInterval != 0) {
              clearInterval(this.curInterval)
              this.curInterval = setInterval (()=>this.autoDown(), 5)
            }
            else {
              this.curInterval = setInterval (()=>this.autoDown(), 5)
            }
            break;

          default:
            break;
        }
      })
    }  
}


