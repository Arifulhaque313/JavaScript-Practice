var arif = [1, 2, 3, 4, 5, 4, 3, 5, 4, 2, 1];

var unique = [];

for (var i = 0; i < arif.length; i++) {
  if (unique.indexOf(arif[i]) == -1) {
    unique.push(arif[i]);
  }
}
console.log(unique);
