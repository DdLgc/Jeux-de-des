let scores, currentScore, activePlayer, gamePlaying;

init();

document.getElementById("roll-dice").addEventListener("click", function () {
  if (gamePlaying) {
    let dice = Math.floor(Math.random() * 6) + 1;
    // document.getElementById("last-roll").textContent = dice;

    document.getElementById("dice-image").src = './img/Dice-' + dice + '.svg';

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

function init() {

  let player1Name = prompt("Nom du joueur1","Joueur1");
  let player2Name = prompt("Nom du joueur2","Joueur2");

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
  // document.getElementById("last-roll").textContent = "0";
}

function nextPlayer() {
  activePlayer = activePlayer === 1 ? 2 : 1;
  currentScore = 0;

  document.getElementById("current-score-1").textContent = "0";
  document.getElementById("current-score-2").textContent = "0";
}
// score global a afficher plus grand en rouge 
// une couleur plus foncé sur le joueur actif 
// changement de couleur active player 