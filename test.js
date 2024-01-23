let scores, currentScore, activePlayer, gamePlaying;
let animationFrameId; // Variable globale pour stocker l'ID de l'animation frame

init();

document.getElementById("roll-dice").addEventListener("click", function () {
  if (gamePlaying) {
    let dice = Math.floor(Math.random() * 6) + 1;
    let diceImage = document.getElementById("dice-image");
    diceImage.style.animation = "none";
    diceImage.src = './img/Dice-' + dice + '.svg';

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById("current-score-" + activePlayer).textContent = currentScore;
    } else {
      nextPlayer();
    }
  }
});

document.getElementById("hold").addEventListener("click", function () {
  if (gamePlaying) {
    scores[activePlayer - 1] += currentScore;
    document.getElementById("global-score-" + activePlayer).textContent = scores[activePlayer - 1];
    checkWin();
  }
});

document.getElementById("new-game").addEventListener("click", init);

function updateActivePlayer() {
  document.getElementById("player1").classList.remove("active");
  document.getElementById("player2").classList.remove("active");
  document.getElementById("player" + activePlayer).classList.add("active");
}

function init() {
  stopConfetti(); // Arrêter l'animation de confettis si elle est en cours

  let player1Name = prompt("Nom du joueur1", "Player 1");
  let player2Name = prompt("Nom du joueur2", "Player 2");

  document.getElementById("player1").querySelector("h2").textContent = player1Name;
  document.getElementById("player2").querySelector("h2").textContent = player2Name;

  scores = [0, 0];
  activePlayer = 1;
  currentScore = 0;
  gamePlaying = true;

  document.getElementById("global-score-1").textContent = "0";
  document.getElementById("global-score-2").textContent = "0";
  document.getElementById("current-score-1").textContent = "0";
  document.getElementById("current-score-2").textContent = "0";
  updateActivePlayer();
}

function nextPlayer() {
  activePlayer = activePlayer === 1 ? 2 : 1;
  currentScore = 0;

  document.getElementById("current-score-1").textContent = "0";
  document.getElementById("current-score-2").textContent = "0";
  updateActivePlayer();
}

function checkWin() {
  if (scores[activePlayer - 1] >= 50) {
    alert("Joueur " + activePlayer + " a gagné !");
    initConfetti();
    render();
    gamePlaying = false;
  } else {
    nextPlayer();
  }
}

//-----------Confetti js--------------
//-----------Var Inits--------------
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
  // Couleurs des confettis
];

//-----------Functions--------------
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function initConfetti() {
  confetti = [];
  for (let i = 0; i < confettiCount; i++) {
    // Ajout de confettis au tableau
  }
  canvas.style.pointerEvents = 'none';
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Dessin des confettis
  animationFrameId = window.requestAnimationFrame(render);
}

function stopConfetti() {
  window.cancelAnimationFrame(animationFrameId);
  confetti = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.pointerEvents = 'auto';
}

//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});

//------------Click------------
window.addEventListener('click', function () {
  initConfetti();
});