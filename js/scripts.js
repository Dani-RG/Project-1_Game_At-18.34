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


// DAR DISEÑO ESTÉTICO EL RELOJ
// REEMPLAZAR EL WIN Y EL LOSE ALERT POR UNA NUEVA VENTANA MAS COLORIDA ES OTRO CANVAS?
// CONVIENE CARGAR GIF COMO PLAYER? MEJOR NO ARRAY DE 4 IMAGENES
// NO ES MEJOR EN FORMATO MAS GRANDE?
// AL PERDER, QUE UNA NUEVA RONDA EMPIECE