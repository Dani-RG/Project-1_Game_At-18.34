class Clock {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.time = 'READY!';
        this.minutes = this.randomMinute(20, 25);
        this.intervalID = null;
        //font size desde el html definiendo su div y cogiendolo con document.??
        //this.fontSize = 
        //this.width = width;
        //this.height = height;
    }

    randomMinute(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    incrementMinutes() { //startCount
        this.minutes ++;
        this.time = `18:${this.minutes}`;
        console.log(this.time);
        //return time;
    }

    createClock(){
        this.intervalID = setInterval (()=>this.incrementMinutes(), 1000);
    }

    stopClock(){
        clearInterval(this.intervalID)
    }
}

