window.onload = function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const welcomePage = document.getElementById('welcome-page');
  const winPage = document.getElementById('win-page');
  const losePage = document.getElementById('lose-page');
  const secondLosePage = document.getElementById('second-lose-page');
  const clockText = document.getElementById('text-clock');
  //const scoreText = document.getElementById('score-text');

  const startButton = document.getElementById('start');
  const newRoundButton = document.getElementById('new-round');
  const tryAgainButton = document.getElementById('try-again');
  const secondTryAgainButton = document.getElementById('second-try-again');

  function playMusic() {
    music.play();
  }

  playMusic()

  function playGame() {
    welcomePage.style = 'display: none';
    winPage.style = 'display: none';
    losePage.style = 'display: none';
    secondLosePage.style = 'display: none';
    canvas.classList.remove('hidden');
    clockText.classList.remove('hidden');
    //scoreText.classList.remove('hidden');
    const game = new Game(ctx);
    game.start();
  }

  startButton.onclick = function () {
    playGame();
  }

  newRoundButton.addEventListener('click', function() {
    location.reload()
  })

  tryAgainButton.addEventListener('click', function() {
    location.reload()
  })

  secondTryAgainButton.addEventListener('click', function() {
    location.reload()
  })

}


/*window.onload = function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const welcomePage = document.getElementById('welcome-page');
  const winPage = document.getElementById('win-page');
  const losePage = document.getElementById('lose-page');
  const secondLosePage = document.getElementById('second-lose-page');
  const clockText = document.getElementById('text-clock');
  //const scoreText = document.getElementById('score-text');

  const startButton = document.getElementById('start');
  const newRoundButton = document.getElementById('new-round');
  const tryAgainButton = document.getElementById('try-again');
  const secondTryAgainButton = document.getElementById('second-try-again');

  startButton.onclick = function() {
    welcomePage.style = 'display: none';
    winPage.style = 'display: none';
    losePage.style = 'display: none';
    secondLosePage.style = 'display: none';
    canvas.classList.remove('hidden');
    clockText.classList.remove('hidden');
    //scoreText.classList.remove('hidden');
    const game = new Game(ctx);
    game.start();
  }

  newRoundButton.onclick = function() {
    welcomePage.style = 'display: none';
    winPage.style = 'display: none';
    losePage.style = 'display: none';
    secondLosePage.style = 'display: none';
    canvas.classList.remove('hidden');
    clockText.classList.remove('hidden');
    //scoreText.classList.remove('hidden');
    const game = new Game(ctx);
    game.start();
  }

  tryAgainButton.onclick = function() {
    welcomePage.style = 'display: none';
    winPage.style = 'display: none';
    losePage.style = 'display: none';
    secondLosePage.style = 'display: none';
    canvas.classList.remove('hidden');
    clockText.classList.remove('hidden');
    //scoreText.classList.remove('hidden');
    const game = new Game(ctx);
    game.start();
  }

  secondTryAgainButton.onclick = function() {
    welcomePage.style = 'display: none';
    winPage.style = 'display: none';
    losePage.style = 'display: none';
    secondLosePage.style = 'display: none';
    canvas.classList.remove('hidden');
    clockText.classList.remove('hidden');
    //scoreText.classList.remove('hidden');
    const game = new Game(ctx);
    game.start();
  }

}*/