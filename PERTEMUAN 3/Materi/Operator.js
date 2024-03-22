//aritmatika
let aritmatika = 9 + 10;
console.log(aritmatika);
aritmatika = 15 - 10;
console.log(aritmatika);
aritmatika = 9 * 5;
console.log(aritmatika);
aritmatika = 18 / 2;
console.log(aritmatika);
aritmatika = 28 % 3;
console.log(aritmatika);
aritmatika = 10 + (15 * 2) / 2;
console.log(aritmatika);

//Operator Perbandingan
let perbandingan = 18 < 2;
console.log(perbandingan);
perbandingan = 10 > 3;
console.log(perbandingan);
perbandingan = 5 >= 10;
console.log(perbandingan);
perbandingan = 16 <= 4;
console.log(perbandingan);
perbandingan = 19 == 10;
console.log(perbandingan);
perbandingan = 20 === 20;
console.log(perbandingan);

//Operator Logika
let bool;
bool = true && false;
console.log(bool);
bool = false || true;
console.log(bool);
bool = !false;
console.log(bool);
bool = true || true || false;
console.log(bool);
bool = (true && false) || true;
console.log(bool);

// Operator String
let firstName, lastName, fullName;
firstName = "Budi";
lastName = "Setiawan";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log("Halo, my name is " + fullName);
let Mahasiswa = ["Reni Mulyasari", "Kevin Alam", "Putri Nabila", "Rudi Widodo"];
console.log(students[0] + " dan " + students[2] + " merupakan teman dekat");
let exam = students[3] + " mendapatkan nilai " + 9 * 9;
console.log(exam);

// Operator Spread
let male = ["Ujang Sanjaya","Kevin Alam","Dedi Wijaya"];
console.log(male);
let female = ["Lilis Puspitasari","Ririn Noviyanti","Putri Wijaya"];
console.log(female);
let students = [...male,...female];
console.log(students);
