class Clock {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.time = 'READY!';
        this.minutes = this._randomMinute(25, 30);
        this.intervalID = null;
        //font size desde el html definiendo su div y cogiendolo con document.??
        //this.fontSize = 
        //this.width = width;
        //this.height = height;
    }

    _randomMinute(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    _incrementMinutes() {
        this.minutes ++;
        this.time = `18:${this.minutes}`;
    }

    _createClock(){
        this.intervalID = setInterval (()=>this._incrementMinutes(), 1000);
    }

    _stopClock(){
        clearInterval(this.intervalID)
    }
}

