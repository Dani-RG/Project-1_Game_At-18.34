class Mate {
    constructor() {
        this.x = null;
        this.y = null;
        this.width = 31*1.5;
        this.height = 59*1.5;
        this.image = null;
        this.appearInterval = undefined;
    }

    _assignPosition() {
        this.x = Math.floor(Math.random() * 600);
        this.y = Math.floor(Math.random() * 350);
    }

    /*_assignPosition(avatarX, avatarY) {
        this.x = Math.floor(Math.random() * avatarX -70);
        this.y = Math.floor(Math.random() * avatarY-70);
    }*/

    _assignImage() {
        this.image = matesImages[Math.floor(Math.random() * matesImages.length)];
    }

    _mateAppear() {
        this.appearInterval = setInterval(() => {
            if (this.x > 1280 || this.y > 720) {
                clearInterval(this.appearInterval);
            }

            if (this.image === matesImages[0]) {
                this.x = this.x + 1;
            }
            
            if (this.image === matesImages[1]) {
                this.y = this.y + 1;
            }

            if (this.image === matesImages[2]) {
                this.x = this.x - 1;
            }

            if (this.image === matesImages[3]) {
                this.y = this.y - 1;
            }

        }, 15)
    }
}

