'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let selectedPlayer;
let selectedScore;

let scores, currentScore, activePlayer, continueGame;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  continueGame = true;

  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
};

init();

/** Rolling the dice Implementation **/

const rollDice = function () {
  if (continueGame) {
    // Generate Random Dice Roll
    let random = Math.trunc(Math.random() * 6) + 1;

    // Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${random}.png`;

    // Check for rolled 1
    if (random === 1) {
      currentScore = 0;
      switchPlayer();
    } else {
      currentScore += random;
    }
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  }
};

btnRoll.addEventListener('click', rollDice);

/**  Switching Player Implementation **/
const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  // changing old player design
  selectedPlayer = document.querySelector(`.player--${activePlayer}`);
  selectedPlayer.classList.toggle('player--active');

  activePlayer = Number(!activePlayer);
  selectedPlayer = document.querySelector(`.player--${activePlayer}`);
  //selectedPlayer.classList.add('player--active');
  selectedPlayer.classList.toggle('player--active');
};

/**  Holding Score Implementation **/
btnHold.addEventListener('click', function () {
  if (continueGame) {
    scores[activePlayer] += currentScore;
    selectedScore = document.querySelector(`#score--${activePlayer}`);

    selectedScore.textContent = scores[activePlayer];

    console.log(`Player : ${activePlayer + 1}`);
    console.log(scores);

    if (scores[activePlayer] >= 100) {
      continueGame = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('.player--active');
    } else {
      switchPlayer();
    }
  }
});

/** Resetting Game Implementation **/
btnNew.addEventListener('click', init);
