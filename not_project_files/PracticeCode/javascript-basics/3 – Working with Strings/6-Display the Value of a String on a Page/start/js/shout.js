const stringtoShout = prompt("What do you want to shout?");
const shout = stringtoShout.toUpperCase();
const shoutMessage = `<h2>The message to shout is: ${shout}!!</h2>`;
console.log(shoutMessage);

document.querySelector('main').innerHTML = shoutMessage;
