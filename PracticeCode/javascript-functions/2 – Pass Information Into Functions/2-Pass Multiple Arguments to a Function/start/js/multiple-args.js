function getArea(width, length, unit) {
    const area = width * length;
    return `${area} ${unit}`;
}

console.log(getArea(5, 17.5, 'sq m'));