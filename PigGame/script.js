'use strict';

//Selecting Elements.
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const diceRoll = document.querySelector('.btn--roll');

let currentScore = 0;

// starting conditions.
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling dice functionality
diceRoll.addEventListener('click', function () {
  // Generating random dice
  let randomDice = Math.trunc(Math.random() * 6) + 1;

  // Displaying dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomDice}.png`;

  if (randomDice !== 1) {
    currentScore += randomDice;
    current0El.textContent = currentScore;
  }
});
