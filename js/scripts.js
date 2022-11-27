window.onload = function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const welcomePage = document.getElementById('welcome-page');
  const startButton = document.getElementById('start');
  
  startButton.onclick = function () {
    welcomePage.style = "display: none";
    canvas.classList.remove('hidden');
    const game = new Game(ctx);
    game.start();
  }
}