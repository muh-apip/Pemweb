//Arrow Function tanpa parameter
const greet = () => {
  console.log("Good Morning");
};
greet();

//Arrow Function dengan parameter
const sum = (x, z) => {
  let result = x + z;
  return result;
};
let result1 = sum(5, 10);
console.log(result1);
