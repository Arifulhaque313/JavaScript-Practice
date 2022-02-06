var shopping = [
  { name: "shirt", price: 600, quantity: 2 },
  { name: "Laptop", price: 43000, quantity: 2 },
  { name: "watch", price: 1500, quantity: 2 },
  { name: "pant", price: 900, quantity: 2 },
];

var totalPrice = 0;
for (const p of shopping) {
  totalPrice = totalPrice + p.price * p.quantity;
}
console.log(totalPrice);
