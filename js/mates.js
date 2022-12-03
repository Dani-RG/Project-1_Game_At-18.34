class Mate {
    constructor() {
        //this.x = Math.floor(Math.random() * 1000);
        //this.y = Math.floor(Math.random() * 600);
        this.x = null;
        this.y = null;
        this.width = 50;
        this.height = 80;
        this.image = null;
        this.appearInterval = undefined;
    }

    _assignPosition(avatarX, avatarY) {
        this.x = Math.floor(Math.random() * avatarX-70);
        this.y = Math.floor(Math.random() * avatarY-70);
    }

    _assignImage() {
        this.image = matesImages[Math.floor(Math.random() * matesImages.length)];
    }

    _mateAppear() {
        this.appearInterval = setInterval(() => {
            if (this.x > 1000) {
                clearInterval(this.appearInterval);
            }

            if (this.image === matesImages[0]) {
                this.x = this.x + 1;
            }
            
            if (this.image === matesImages[1]) {
                this.y = this.y + 1;
            }

            if (this.image === matesImages[2]) {
                this.y = this.y + 1;
            }

            if (this.image === matesImages[3]) {
                this.y = this.y + 1;
                this.x = this.x + 1;
            }

            if (this.image === matesImages[4]) {
                this.y = this.y + 1;
                this.x = this.x + 1;
            }

        }, 50)
    }
}

/*
class Mate {
    constructor() {
        this.x = Math.floor(Math.random() * 1000);
        this.y = Math.floor(Math.random() * 600);
        this.width = 50;
        this.height = 80;
        this.image = null;
        this.appearInterval = undefined;
    }

    _assignImage() {
        this.image = matesImages[Math.floor(Math.random() * matesImages.length)];
    }

    _mateAppear() {
        this.appearInterval = setInterval(() => {
            if (this.x > 1000) {
                clearInterval(this.appearInterval);
            }

            if (this.image === matesImages[0]) {
                this.x = this.x + 1;
            }
            
            if (this.image === matesImages[1]) {
                this.y = this.y + 1;
            }

            if (this.image === matesImages[2]) {
                this.y = this.y + 1;
            }

            if (this.image === matesImages[3]) {
                this.y = this.y + 1;
                this.x = this.x + 1;
            }

            if (this.image === matesImages[4]) {
                this.y = this.y + 1;
                this.x = this.x + 1;
            }

        }, 50)
    }
}
*/
