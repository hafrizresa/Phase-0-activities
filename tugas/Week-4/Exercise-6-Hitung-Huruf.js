function hitungHuruf(kata) {
  var arr = kata.split(' ')
  var tempKata = '', maxIndex = 0

  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    tempKata = arr[i]
    for (var j = 0; j < tempKata.length; j++) {
      var tempHuruf = tempKata[j]

      for (var k = j + 1; k < tempKata.length; k++) {
        if (tempHuruf === tempKata[k]) {
          count++
        }
      }
    }
    if (count > maxIndex) {
      maxIndex = count
      arr = tempKata
    }
    if (maxIndex > 0) {
      return tempKata
    }
  }
}