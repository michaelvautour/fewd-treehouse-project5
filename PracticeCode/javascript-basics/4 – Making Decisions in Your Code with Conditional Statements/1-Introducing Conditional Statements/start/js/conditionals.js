const answer = prompt("Which plant is closest to the sun?");
const actanswer = "MERCURY";

if (answer.toUpperCase() === actanswer) {
    console.log("You are right, it is: " + actanswer)
}
else {
    console.log("You are wrong, it was: " + actanswer)
}