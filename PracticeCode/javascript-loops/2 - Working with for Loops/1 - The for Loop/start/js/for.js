
function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper) +1;
}

let i;

for (i = 0; i < 10; i++) {
    alert(`${getRandomNumber(10)}!`);
}