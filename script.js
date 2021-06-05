'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let attemptsLeft = 5;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔ No Guess done');
  } else if (guess === secretNumber) {
    displayMessage('🎉 You guessed correct');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#1eae98';

    document.querySelector('.number').style.width = '30rem';

    if (attemptsLeft > highscore) {
      highscore = attemptsLeft;
      document.querySelector('.guess').value = '';
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (attemptsLeft > 1) {
      displayMessage(
        guess > secretNumber
          ? '📈 Your guess is too high'
          : '📉 Your guess is too low'
      );
      document.querySelector('.guess').value = '';
      attemptsLeft--;
      document.querySelector('.attemptsLeft').textContent = attemptsLeft;
    } else {
      displayMessage('You lost the game 😢');
      document.querySelector('.message').style.color = '#fb9300';
      document.querySelector('body').style.backgroundColor = '#810000';
      document.querySelector('.attemptsLeft').textContent = 0;
      document.querySelector('.attemptsLeft').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  attemptsLeft = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.attemptsLeft').textContent = attemptsLeft;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').style.color = '#ffe227';
  document.querySelector('body').style.backgroundColor = '#663f3f';

  document.querySelector('.number').style.width = '15rem';
});
