//Should display randomly from 1 to the users entered #


// Collect input from a user
const userInput = prompt("Put a number in here");

// Convert the input to a number
let numberInput = parseInt(userInput);

if (numberInput) {
    // Use Math.random() and the user's number to generate a random number
    let randomInput = Math.floor(Math.random() * numberInput) +1;

    // Create a message displaying the random number
    console.log(`${randomInput} is a random number between 1 and ${numberInput}`);
    alert(`${randomInput} is a random number between 1 and ${numberInput}`);

} else {
    console.log(`${userInput} is not a number, try again`);
}