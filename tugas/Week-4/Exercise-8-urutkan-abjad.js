function urutkanAbjad(str) {

    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var penampung = []
    for (var i = 0; i < str.length; i++) {
        var temp = kamus.indexOf(str[i])
        penampung.push(temp)
    }
    var limit = 0
    for (var j = 1; j > limit; j++) {
        limit = j + 20
        for (var k = 0; k < penampung.length; k++) {
            if (penampung[k] > penampung[k + 1]) {
                var tampung = penampung[k]
                penampung[k] = penampung[k + 1]
                penampung[k + 1] = tampung
                limit = 0
            }
        }
    }
    var result = []
    for (var l = 0; l < penampung.length; l++) {
        result[l] = kamus[penampung[l]]
    }
    return result.join('')
}

console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'