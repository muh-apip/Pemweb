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

const angka1 = 10;
const angka2 = 3;

console.log("Penjumlahan:", tambah(angka1, angka2));
console.log("Pengurangan:", kurang(angka1, angka2));
console.log("Perkalian:", kali(angka1, angka2));
console.log("Pembagian:", bagi(angka1, angka2));
console.log("Modulus:", mod(angka1, angka2));
