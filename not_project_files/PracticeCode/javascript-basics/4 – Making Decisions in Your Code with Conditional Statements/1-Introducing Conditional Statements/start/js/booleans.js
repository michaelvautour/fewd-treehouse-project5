let correctGuess = false;
const number = 6;
const guess = prompt("Guess a number between 1-10?");

if ( +guess === number ) {
  correctGuess = true;
}

if (correctGuess === true) {
  console.log('You guessed the number.');
} else {
  console.log(`Sorry. You guessed ${guess} but the answer was ${number}.`);
}