'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 10;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const guessNumber = guess => {
  document.querySelector('.number').textContent = guess;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //No input
  if (!guess) {
    displayMessage('No number');
  } //Number guessed correctly
  else if (guess === secretNumber) {
    displayMessage('Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (highscore < score) highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    guessNumber(secretNumber);
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      score -= 1;
      document.querySelector('.score').textContent = score;
      displayMessage('You lost the game');
    }
  }

  if (document.querySelector('.score').textContent === '0') {
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').textContent = 'x';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //   document.querySelector('.number').textContent = secretNumber;

  document.querySelector('body').style.backgroundColor = 'black';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
});
