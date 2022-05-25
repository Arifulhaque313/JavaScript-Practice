// function EvenOdd(number) {
//   if (number % 2 == 0) {
//     console.log("It is even");
//   } else {
//     console.log("It is odd");
//   }
// }

// EvenOdd(79);

var i = 0;

function checkEvenOdd(limit) {
  count = 0;
  for (i = 1; i <= limit; i++) {
    if (i % 2 == 0) {
      count++;
      console.log(i);
    }
  }

  console.log("TOtal even numbe", count);
}

checkEvenOdd(22);
