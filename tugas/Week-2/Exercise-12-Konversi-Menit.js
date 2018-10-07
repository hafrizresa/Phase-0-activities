// Logic Challenge - Konversi Menit
function konversiMenit(menit) {
  var perhitunganMenit = 0;
  while (menit % 60 != 0) {
    perhitunganMenit = perhitunganMenit + 1;
    menit = menit - 1
  }
  var jam = menit / 60

  if (jam < 10) {
    jam = '0' + jam
  }
  if (perhitunganMenit < 10) {
    perhitunganMenit = '0' + perhitunganMenit
  }
  return hasil = jam + ':' + perhitunganMenit
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00