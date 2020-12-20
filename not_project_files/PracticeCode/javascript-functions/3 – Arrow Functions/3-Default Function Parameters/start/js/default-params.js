function sayGreeting(greeting, name = 'student') {
    return `${greeting}, ${name}`;
}

sayGreeting('Hello');

function getArea(width, length, unit = "sq m") {
    const area = width * length;
    return `${area} ${unit}`;
}

getArea(15, 10);


// convert below into an arrow function:

//--------BEFORE--------
// greet('cool coders');

// function greet(val) {
//   return `Hi, ${val}!`;
// }

//--------AFTER--------
const greet = val => {
  return `Hi, ${val}!`;
}

greet('cool coders');
