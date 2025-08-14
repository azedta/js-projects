'use strict';

const initialScore = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = initialScore;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.score').textContent = initialScore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('⛔ Number not valid !');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number !');
    document.querySelector('.number').textContent = secretNumber;
    score++;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High !' : '📉 Too Low !');
      score--;
    } else {
      document.querySelector('.message').textContent = '🎃 Game failed !';
      score = 0;
    }
  }

  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highScore;
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing ...');
  document.querySelector('.number').style.width = '15rem';
  score = initialScore;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
