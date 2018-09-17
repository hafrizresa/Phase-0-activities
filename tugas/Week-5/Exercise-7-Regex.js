
function hapusSimbol(str) {
    var symb = ',./;][=-)(*&^%$#@!`~?><:}{+ '
    var splited = str.split('')
    var limit = 0
    for (var i = 0; i < symb.length; i++) {
        for (var j = 0; j < splited.length; j++) {
            if (symb[i] == splited[j]) {
                splited[j] = ' '
            }
        }
        for (var k = 0; k < splited.length; k++) {
            if (splited[k] == ' ') {
                splited.splice(k, 1)
            }
        }
    }
    var result = splited.join('')
    return result
}

console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100