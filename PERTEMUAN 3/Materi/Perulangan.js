//Operator Conditional
let age = 18;
let result = age >= 18 ? +"Eligible for voting" : "Not eligible for voting";
console.log(result);

//for
for (let i = 0; i < 10; i++) {
  console.log("Halo Bang!!");
}

//while
let i = 50;
while (i > 0) {
  console.log("\n" + i + " * 5 = " + i * 5);
  i = i - 5;
}

//do while
let a = 1;
do {
  console.log(a + " kuadrat = " + a * a);
  a = a + 1;
} while (a <= 10);

//for of
let faculties = [
  "Fakultas Ilmu Komputer",
  "Fakultas Hukum",
  "Fakultas Pertanian",
  "Fakultas Ilmu Sosial dan Ilmu Politik",
  "Fakultas Teknik",
];
for (let faculty of faculties) {
  console.log("\n" + faculty);
}

//break & continue
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    continue;
  }
  console.log("\n" + i);
}

//nested loop
let weeks = 3;
let days = 7;
for (let i = 1; i <= weeks; ++i) {
  console.log("Week: " + i);
  for (let j = 1; j <= days; ++j) {
    console.log(" Day: " + j);
  }
}
