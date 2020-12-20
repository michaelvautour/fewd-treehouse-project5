// function getRandomNumber(upper) {
//     return Math.floor( Math.random() * upper ) + 1;
//   }

// difference is do while will execute code first
// without checking if condition if true or false
// if you need to at least run once, perform a do while
// let  counter = 0;

//   do {
//     console.log( `The random number is ${getRandomNumber(10)}` );
//     counter++;
// } while (counter < 10);

// Display the prompt dialogue while the value assigned to `secret` is not equal to "sesame"

let secret = prompt("What is the secret password?")

do {
    secret = prompt("What is the secret password?")
} while (secret !== 'sesame')
// This should run after the loop is done executing
alert("You know the secret password. Welcome!");