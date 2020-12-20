function getRandomNumber(upper) {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

console.log(getRandomNumber(85) );
console.log(getRandomNumber(100) );
console.log(getRandomNumber(1000) );
console.log(getRandomNumber(7) );