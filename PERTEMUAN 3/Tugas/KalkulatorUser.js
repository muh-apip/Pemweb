const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function tambah(angka1, angka2) {
  return angka1 + angka2;
}

function kurang(angka1, angka2) {
  return angka1 - angka2;
}

function kali(angka1, angka2) {
  return angka1 * angka2;
}

function bagi(angka1, angka2) {
  if (angka2 === 0) {
    return "Tidak bisa membagi dengan nol!";
  }
  return angka1 / angka2;
}

function mod(angka1, angka2) {
  if (angka2 === 0) {
    return "Tidak bisa membagi dengan nol!";
  }
  return angka1 % angka2;
}

rl.question("Masukkan angka pertama: ", (angka1) => {
  rl.question("Masukkan angka kedua: ", (angka2) => {
    angka1 = parseFloat(angka1);
    angka2 = parseFloat(angka2);

    rl.question("Operator apa yang mau anda gunakan (+, -, *, /, %): ", (operator) => {
      if (operator === "+") {
        console.log("Penjumlahan:", tambah(angka1, angka2));
      } else if (operator === "-") {
        console.log("Pengurangan:", kurang(angka1, angka2));
      } else if (operator === "*") {
        console.log("Perkalian:", kali(angka1, angka2));
      } else if (operator === "/") {
        console.log("Pembagian:", bagi(angka1, angka2));
      } else if (operator === "%") {
        console.log("Modulus:", mod(angka1, angka2));
      } else {
        console.log("Operator yang anda masukan tidak tersedia");
      }

      rl.close();
    });
  });
});
