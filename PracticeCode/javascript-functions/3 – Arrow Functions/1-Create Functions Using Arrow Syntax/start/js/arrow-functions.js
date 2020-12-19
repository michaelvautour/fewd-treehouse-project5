// function getRandomNumber() {
//   const randomNumber = Math.floor( Math.random() * 6 ) + 1;
//   return randomNumber;
// }

// converting above to a arrow function:
const getRandomNumber = (upper) => {
    const randomNumber = Math.floor( Math.random() * upper ) + 1;
    return randomNumber;
  }

  //Acts similar to expressions for arrow expressions because it needs to be defined
  // above the code before it's called, unlike declaration functions

//write below as an arrow function
//BEFORE
  function getArea(width, length, unit) {
    const area = width * length;
    return `${area} ${unit}`;
  }

  //Here is the re-written code as an arrow, changed first variable name to showcase better
  //AFTER
  const getArea2 = (width, length, unit) => {
    const area = width * length;
    return `${area} ${unit}`;
  }