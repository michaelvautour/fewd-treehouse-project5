// 1. Declare variables and capture input.
const quest1 = prompt("What is your name?");
const quest2 = prompt("Where were you born?");
const quest3 = prompt("What month were you born?");

// 2. Combine the input with other words to create a story.
const story = `<p>${quest1}, you have been given a special mission. You must go to ${quest2} in ${quest3} to save the world!<p>`

// 3. Display the story as a <p> inside the <main> element.
document.querySelector(`main`).innerHTML = story;
