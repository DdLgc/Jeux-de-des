let scores, currentScore, activePlayer, gamePlaying;
let confetti = [];
let animationFrameId;

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

init();

document.getElementById("roll-dice").addEventListener("click", function () {
  if (gamePlaying) {
    let dice = Math.floor(Math.random() * 6) + 1;

    let diceImage = document.getElementById("dice-image");
    diceImage.style.animation = "none";
    diceImage.src = "./img/Dice-" + dice + ".svg";

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById("current-score-" + activePlayer).textContent =
        currentScore;
    } else {
      nextPlayer();
    }
  }
});

document.getElementById("hold").addEventListener("click", function () {
  if (gamePlaying) {
    scores[activePlayer - 1] += currentScore;
    document.getElementById("global-score-" + activePlayer).textContent =
      scores[activePlayer - 1];

    checkWin();

    //   if (scores[activePlayer - 1] >= 50) {
    //     alert("Joueur " + activePlayer + " a gagné !");
    //     gamePlaying = false;
    //   } else {
    //     nextPlayer();
    //   }
  }
});

document.getElementById("new-game").addEventListener("click", init);

function updateActivePlayer() {
  document.getElementById("player1").classList.remove("active");
  document.getElementById("player2").classList.remove("active");
  document.getElementById("player" + activePlayer).classList.add("active");
}

function init() {
  stopConfetti();

  let player1Name = prompt("Nom du joueur1", "Player 1");
  let player2Name = prompt("Nom du joueur2", "Player 2");

  document.getElementById("player1").querySelector("h2").textContent =
    player1Name;
  document.getElementById("player2").querySelector("h2").textContent =
    player2Name;

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
// canvas = document.getElementById("canvas");
// ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// cx = ctx.canvas.width / 2;
// cy = ctx.canvas.height / 2;

const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
  { front: "red", back: "darkred" },
  { front: "green", back: "darkgreen" },
  { front: "blue", back: "darkblue" },
  { front: "yellow", back: "darkyellow" },
  { front: "orange", back: "darkorange" },
  { front: "pink", back: "darkpink" },
  { front: "purple", back: "darkpurple" },
  { front: "turquoise", back: "darkturquoise" },
];

//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // cx = ctx.canvas.width / 2;
  // cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

function initConfetti() {
  confetti = [];
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30),
      },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1,
      },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1,
      },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50),
      },
    });
  }
  canvas.style.pointerEvents = "none";
}

//---------Render-----------
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(
      confetto.velocity.y + gravity,
      terminalVelocity
    );
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle =
      confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetto
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });


  if (confetti.length > 0) {
    animationFrameId = window.requestAnimationFrame(render);
  } else {
    animationFrameId = null;
  }

  // Fire off another round of confetti
  // if (confetti.length <= 10) initConfetti();
  // window.requestAnimationFrame(render);
  // animationFrameId = window.requestAnimationFrame(render);
};

function stopConfetti() {
  if (animationFrameId) {
    window.cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  confetti = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.pointerEvents = "auto";
}

//----------Resize----------
window.addEventListener("resize", function () {
  resizeCanvas();
});

//------------Click------------
window.addEventListener("click", function () {
  initConfetti();
});