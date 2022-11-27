//Avatar
const avatar = new Image();
avatar.src = '../img/avatar.png';

// Door
const door = new Image();
door.src = '../img/door.png';

// Clock
//definirle que se ejecute cuando pase a la pantalla del game

function randomMinute(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let minutes = randomMinute(39, 45);

let time = `18:${minutes}`;

function countdown (){
    minutes --;
    console.log(minutes);
    time = `18:${minutes}`;
    if (minutes === 34) {
        clearInterval(intervalID);
    }
}

const intervalID = setInterval (countdown, 1000);



