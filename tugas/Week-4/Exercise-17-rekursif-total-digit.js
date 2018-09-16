function totalDigitRekursif(angka) {

  if (String(angka).length === 1) {
    return angka;
  }
  else {
    var num = String(angka);
    var tanpaBelakang = Number(num.slice(0, -1));
    var numBelakang = Number(num[num.length - 1]);
    return numBelakang += totalDigitRekursif(tanpaBelakang);
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5