class Mate {
    constructor() {
        this.x = Math.floor(Math.random() * 950);
        this.y = Math.floor(Math.random() * 300);
        this.width = 70;
        this.height = 70;
        this.image = null;
        this.appearInterval = undefined;
    }

    _mateAppear() {
        this.appearInterval = setInterval(() => {
            if (this.x > 1000) {
                clearInterval(this.appearInterval);
            }
            this.x = this.x + 2;
        }, 50)
    }

    _assignImage() {
        this.image = matesImages[Math.floor(Math.random() * matesImages.length)];
    }
}