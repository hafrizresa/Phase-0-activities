var kata = 'I am a passionate developer'

var splited = kata.split(' ')
var temp = []

for (var i = 0; i < splited.length; i++) {
  var penampung = 0
  for (var j = 0; j < splited[i].length; j++) {
    for (var k = 0; k < splited[i].length; k++) {
      if (splited[i][j] === splited[i][k]) {
        penampung += 1
      }
    }
  }
  temp.push(penampung)
}
for (var l = 0; l < temp.length; l++) {
  penampung = 0
  for (var m = 0; m < temp.length; m++) {
    if (temp[l] > temp[m]) {
      penampung += 1
    }
  }
  if (penampung == temp.length - 1) {
    var result = temp.indexOf(temp[l])
  }
}
console.log(splited[result])

// MASIH SALAH DI PASSIONATE