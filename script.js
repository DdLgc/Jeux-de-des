let scores, currentScore, activePlayer, gamePlaying;

init();

document.getElementById("roll-dice").addEventListener("click", function () {
  if (gamePlaying) {
    let dice = Math.floor(Math.random() * 6) + 1;

    let diceImage = document.getElementById("dice-image");
    diceImage.style.animation = "none";
    diceImage.src = './img/Dice-' + dice + '.svg';

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

    if (scores[activePlayer - 1] >= 50) {
      alert("Joueur " + activePlayer + " a gagné !");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

document.getElementById("new-game").addEventListener("click", init);

function updateActivePlayer() {
  document.getElementById("player1").classList.remove("active");
  document.getElementById("player2").classList.remove("active");

  document.getElementById("player" + activePlayer).classList.add("active");
}

function init() {

  let player1Name = prompt("Nom du joueur1","Player 1");
  let player2Name = prompt("Nom du joueur2","Player 2");

  document.getElementById("player1").querySelector("h2").textContent = player1Name

  document.getElementById("player2").querySelector("h2").textContent = player2Name

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




//probleme d'affichage du nom du joueur lorsque le jeu est lancé et background !!
// animation de dé 
// menu dépliant pour les regles tout en haut
