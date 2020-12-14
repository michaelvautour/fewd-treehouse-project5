const answer = prompt("Which plant is closest to the sun?");

if (answer.toUpperCase() === "MERCURY") {
    console.log("You are right, it is: " + answer.toUpperCase())
}
else {
    console.log("Good try, but the planet is actually Mercury!")
}