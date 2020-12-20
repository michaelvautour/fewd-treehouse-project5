/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
function callRandomNum(startNum, endNum) {
    if ( isNaN(startNum) || isNaN(endNum) ) {
        throw Error ('You need to enter a number');
    } else {
        const randNum = Math.floor(Math.random() * (startNum - endNum + 1)) + endNum;
        return randNum;
    }
}

// Call the function and pass it different values

console.log(callRandomNum(100, 1000));
console.log(callRandomNum(33, 330));
console.log(callRandomNum('fudge', 10));
console.log(callRandomNum(1, 10));
console.log(callRandomNum(5, 'hello'));
console.log(callRandomNum(10, 109));
console.log(callRandomNum(22, 54));