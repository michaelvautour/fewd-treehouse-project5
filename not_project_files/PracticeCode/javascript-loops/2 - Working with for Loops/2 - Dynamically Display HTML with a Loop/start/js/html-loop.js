const main = document.querySelector('main');

let html = '';

for (let i = 5; i <= 100; i+=5) {
    html += `<div>${i}</div>`;
}

main.innerHTML = html;


//Code to break out of a loop example:
let message = "supercalifragilisticexpialidocious";
message = message.length;

for ( let i = 1; i < message; i++ ) {
  if ( i === message / 2 ) {
    console.log('The loop has terminated...');
    break;
  } {
  console.log(`Logging the number ${i}`);
}
}
console.log('The program continues...');