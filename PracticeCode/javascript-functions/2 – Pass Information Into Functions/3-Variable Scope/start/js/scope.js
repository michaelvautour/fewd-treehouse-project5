//Global scope variables
let person = 'Lee';

function greeting() {
//function variables, if I remove the 'Let' it could access the global function but NOT recommended
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}

// 