function sumarray(array) {
  sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(sum);
}

sumarray([2, 2, 3]);
