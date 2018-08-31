// Logic Challenge - Balik Kata
function balikKata(kata) {
  var indexKata = kata.length - 1;
  var hasil = ''
  while (indexKata >= 0) {
    hasil = hasil + kata[indexKata]
    indexKata = indexKata - 1
  }
  return hasil
}

// TEST CASES
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super')); 