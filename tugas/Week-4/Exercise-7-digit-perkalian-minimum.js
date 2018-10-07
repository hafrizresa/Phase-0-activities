function digitPerkalianMinimum(angka) {
    var temp = []
    for (var i = 0; i <= angka; i++) {
        for (var j = 0; j <= angka; j++) {
            var penampung = []
            if (i * j == angka) {
                penampung.push(i + '' + j)
                temp.push(penampung)
            }
        }
    }
    var result = temp[0][0].length
    for (var k = 0; k < temp.length; k++) {
        for (var l = 0; l < temp.length; l++) {
            if (temp[k][0].length < temp[l][0].length) {
                var result = temp[k][0].length
            }
        }
    }
    return result
}


console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2