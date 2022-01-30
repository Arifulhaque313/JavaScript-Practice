// var i;
// for (i = 5; i > 0; i--) {
//   console.log(i);
// }

function factorial(num) {
  var i = num;
  var fact = 1;
  for (i; i > 0; i--) {
    fact *= i;
  }
  console.log(fact);
}

factorial(5);
