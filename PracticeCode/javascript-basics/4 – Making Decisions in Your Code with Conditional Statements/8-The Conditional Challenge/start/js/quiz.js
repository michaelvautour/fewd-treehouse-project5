/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let userScore = 0;

const answer1 = 2020;
const answer2 = 'microsoft';
const answer3 = 'canada';
const answer4 = 'north america';
const answer5 = 18;

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element

let main = document.querySelector('main');
/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const question1 = prompt("What year did COVID-19 mess with the world?");
if (answer1 === +question1) {
  userScore += 1;
}

// adding method tuUppercase() in order for different case sensitivity answers to be provided
const question2 = prompt("Who made windows?");
if (answer2.toUpperCase() == question2.toUpperCase()) {
  userScore += 1;
}

const question3 = prompt("What country is Cold Lake in");
if (answer3.toUpperCase() == question3.toUpperCase()) {
  userScore += 1;
}

const question4 = prompt("What continent is Canada in?");
if (answer4.toUpperCase() == question4.toUpperCase()) {
  userScore += 1;
}

const question5 = prompt("What is legal drinking age in Alberta?");
if (answer5 === +question5) {
  userScore += 1;
}
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (userScore === 0) {
  rank = 'No crown';
} else if ( userScore >= 1 && userScore <= 2) {
  rank = "Bronze";
} else if ( userScore >= 3 && userScore <= 4) {
  rank = "Silver";
} else if ( userScore === 5) {
  rank = "Gold";
}  else {
    rank = "No crown"
  }

// 6. Output results to the <main> element

main.innerHTML = `<h1> You got ${userScore} out of 5 questions correct.</h1> <p> Crown earned: ${rank} </p>`;

// added for testing purposes
console.log(`Your score is ${userScore}`);