//Membuat Function
function greet() {
  console.log("Good Afternoon");
  console.log("Good Morning");
  console.log("Good Night");
}

//Memanggil Function
function greet() {
  console.log("Good Morning");
  console.log("Good Afternoon");
  console.log("Good Night");
}
greet();

//Return Function
function greet() {
  return "Good Morning";
}
let regard = greet();
console.log(regard);
console.log(greet());

//Return Function Array
function hobbies() {
  const listHobbies = ["Footbal", "Swimming", "Reading", "Writing", "Coding"];
  return listHobbies;
}
let hobby = hobbies();
for (const iterator of hobby) {
  console.log(iterator);
}

//Function Parameter
function sum(number1, number2) {
  let results = number1 + number2;
  return results;
}
console.log(sum(5, 5));

//Spread Operator
function average(...index) {
  let sum = index.length;
  let result = 0;
  for (const i of index) {
    result += i;
  }
  return result / sum;
}
let x = average(4, 8, 3, 7);
console.log(x);
