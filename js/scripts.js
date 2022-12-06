window.onload = function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const welcomePage = document.getElementById('welcome-page');
  const winPage = document.getElementById('win-page');
  const losePage = document.getElementById('lose-page');
  const secondLosePage = document.getElementById('second-lose-page');
  const startButton = document.getElementById('start');
  const clockText = document.getElementById('text-clock');
  const newRoundButton = document.getElementById('new-round');
  const tryAgainButton = document.getElementById('try-again');
  const scoreText = document.getElementById('score-text');

  function play() {
    welcomePage.style = 'display: none';
    winPage.style = 'display: none';
    losePage.style = 'display: none';
    secondLosePage.style = 'display: none';
    canvas.classList.remove('hidden');
    clockText.classList.remove('hidden');
    scoreText.classList.remove('hidden');
    //winPage.classList.add('hidden'); DOES NOT WORK
    //losePage.classList.add('hidden'); DOES NOT WORK
    const game = new Game(ctx);
    game.start();
    console.log('clicked!'); ///////////
  }

  startButton.onclick = function () {
    play();
    // FIND RESET WINDOW METHOD
  }

  newRoundButton.onclick = function () {
    play();
    // FIND RESET WINDOW METHOD
  }

  tryAgainButton.onclick = function () {
    play();
    // FIND RESET WINDOW METHOD
  }

}

// DAR DISEÑO ESTÉTICO EL RELOJ
// CONVIENE CARGAR GIF COMO PLAYER? MEJOR NO, ARRAY DE 4 IMAGENES
// NO ES MEJOR EN FORMATO MAS GRANDE?

/*
window.onload = function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const welcomePage = document.getElementById('welcome-page');
  const losePage = document.getElementById('lose-page');
  const winPage = document.getElementById('win-page');
  const startButton = document.getElementById('start');
  const clockText = document.getElementById('textClock');
  const newRoundButton = document.getElementById('new-round');
  const tryAgainButton = document.getElementById('try-again');

  function play() {
    welcomePage.style = 'display: none';
    winPage.style = 'display: none';
    losePage.style = 'display: none';
    canvas.classList.remove('hidden');
    clockText.classList.remove('hidden');
    //winPage.classList.add('hidden'); DOES NOT WORK
    //losePage.classList.add('hidden'); DOES NOT WORK
    const game = new Game(ctx);
    game.start();
    console.log('clicked!'); ///////////
  }

  startButton.onclick = function () {
    play();
  }

  newRoundButton.onclick = function () {
    play();
  }

  tryAgainButton.onclick = function () {
    play();
  }

}
*/