class Player {
    constructor(x, y, width, height) {
        this.image = avatar;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /*
    moveRight() {
        this.x = this.x + 25;
        if (this.x > 1000) {
          this.x = 0 - this.width;
        }
      }
    
      moveLeft() {
        this.x = this.x - 25;
        if (this.x + this.width < 0) {
          this.x = 1000;
        }
      }

    
    moveUp() {
        this.y = this.y - 25;
        if (this.y + this.height < 0) {
            this.y = 600;
        }
    }

    moveDown() {
        this.y = this.y + 25;
        if (this.y > 600) {
            this.y = 0 - this.height;
        }
    }
    */

    autoRight() {
      this.x = this.x + 1; //25
      if (this.x > 1000) {
        this.x = 0 - this.width;
      }
    }
  
    autoLeft() {
      this.x = this.x - 1; //25
      if (this.x + this.width < 0) {
        this.x = 1000;
      }
    }

  
  autoUp() {
      this.y = this.y - 1; //25
      if (this.y + this.height < 0) {
          this.y = 600;
      }
  }

  autoDown() {
      this.y = this.y + 1; //25
      if (this.y > 600) {
          this.y = 0 - this.height;
      }
  }

    _autoWalk() {
      document.addEventListener('keydown', (event) => {
        switch (event.code) {
          case 'ArrowLeft':
            setInterval (()=>this.autoLeft(), 10);
            break;
          case 'ArrowRight':
            setInterval (()=>this.autoRight(), 10);
            break;
          case 'ArrowUp':
            setInterval (()=>this.autoUp(), 10);
            break;
          case 'ArrowDown':
            setInterval (()=>this.autoDown(), 10);
            break;
          default:
            break;
        }
      })
    }

    /* CORRECT CODE OF ASSIGNING CONTROLS
        _autoWalk() {
      document.addEventListener('keydown', (event) => {
        switch (event.code) {
          case 'ArrowLeft':
            this.autoLeft();
            break;
          case 'ArrowRight':
            this.autoRight();
            break;
          case 'ArrowUp':
            this.autoUp();
            break;
          case 'ArrowDown':
            this.autoDown();
            break;
          default:
            break;
        }
      })
    }

    THIS IS NOT NECESSARY:
    _startAutoWalk() {
      setInterval (()=>this._autoWalk(), 500);
    }
    */
    
}


