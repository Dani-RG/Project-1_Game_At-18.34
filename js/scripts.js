window.onload = function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const welcomePage = document.getElementById('welcome-page');
  const losePage = document.getElementById('lose-page');
  const winPage = document.getElementById('win-page');
  const startButton = document.getElementById('start');
  const clockText = document.getElementById('textClock');
  const tryAgainButton = document.getElementById('try-again');
  const newRoundButton = document.getElementById('new-round');

  
    startButton.onclick = function Play () {
    welcomePage.style = "display: none";
    canvas.classList.remove('hidden');
    clockText.classList.remove('hidden');
    const game = new Game(ctx);
    game.start();
  }
  
/*
  function play() { //add event listener??
    welcomePage.style = "display: none";
    losePage.style = "display: none";
    winPage.style = "display: none";
    canvas.classList.remove('hidden');
    clockText.classList.remove('hidden');
    const game = new Game(ctx);
    game.start();
  }

  //startButton.onclick = play();

  tryAgainButton.onclick = play();

  //newRoundButton.onclick = play();
*/
}


// DAR DISEÑO ESTÉTICO EL RELOJ
// CONVIENE CARGAR GIF COMO PLAYER? MEJOR NO, ARRAY DE 4 IMAGENES
// NO ES MEJOR EN FORMATO MAS GRANDE?
// AL PERDER, QUE UNA NUEVA RONDA EMPIECE