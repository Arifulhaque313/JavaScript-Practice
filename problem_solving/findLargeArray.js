function sumarray(array) {
  var max = 0;
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  console.log(max);
}

sumarray([2, 8, 3]);
