// When i use prompt the below fails because it still indicates 5 as a is greater then 10. I believe it's because prompts are treated as a string?

const a = 5;
const b = 10;
const c = 30;

if (a > b) {
 console.log("a is greater than b")
}
else {
  console.log("a is not greater than b") 
}