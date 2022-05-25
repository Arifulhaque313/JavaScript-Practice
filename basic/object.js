var student = {
  name: "sajib",
  age: 22,
  address: "kasimpur",
};

student.address = "Enayetpur";
student["age"] = 23;

for (x in student) {
  console.log(student[x]);
}
