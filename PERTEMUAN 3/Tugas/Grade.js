const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan Nama Anda: ", (nama) => {
  rl.question("Masukkan Nilai Anda: ", (nilai) => {
    if (nilai >= 85) {
      console.log("Hallo " + nama + " Grade Anda A");
    } else if (nilai >= 70) {
      console.log("Hallo " + nama + " Grade Anda B");
    } else if (nilai >= 60) {
      console.log("Hallo " + nama + " Grade Anda C");
    } else if (nilai >= 50) {
      console.log("Hallo " + nama + " Grade Anda D");
    } else {
      console.log("Hallo " + nama + " Grade Anda E");
    }
    rl.close();
  });
});
