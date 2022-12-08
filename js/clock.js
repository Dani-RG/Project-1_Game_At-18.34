class Clock {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.time = 'Ready!';
        this.minutes = this._randomMinute(20, 25);
        this.intervalID = null;
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