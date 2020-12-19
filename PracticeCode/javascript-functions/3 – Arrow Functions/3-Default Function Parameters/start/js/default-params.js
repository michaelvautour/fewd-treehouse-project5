function sayGreeting(greeting, name = 'student') {
    return `${greeting}, ${name}`;
}

sayGreeting('Hello');

function getArea(width, length, unit = "sq m") {
    const area = width * length;
    return `${area} ${unit}`;
}

getArea(15, 10);