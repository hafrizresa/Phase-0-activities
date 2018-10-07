function hitungHuruf(kata) {
  var splited = kata.split(' ')
  var obj = {}
  var temp = []
  for (var i = 0; i < splited.length; i++) {
    obj[splited[i]] = {}
    for (var j = 0; j < splited[i].length; j++) {
      if (obj[splited[i]][splited[i][j]] == undefined) {
        obj[splited[i]][splited[i][j]] = 1
      }
      else {
        obj[splited[i]][splited[i][j]] += 1
      }
    }
  }
  var selector = 0
  var hasil;
  for (var i in obj) {
    var penampung = 0
    for (var j in obj[i]) {
      if (obj[i][j] > 1) {
        penampung += obj[i][j]
      }
    }
    temp.push(penampung)
    if (selector < penampung) {
      selector = penampung
      hasil = i
    }
  }
  return hasil
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau