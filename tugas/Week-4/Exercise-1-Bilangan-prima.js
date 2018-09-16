function angkaPrima(angka) {
    var temp = 0
    for (var i = 2; i < angka; i++) {
        if (angka % i == 0) {
            temp = temp + 1
        }
    }
    if (temp == 0) {
        return true
    }
    else { return false }
}

// ATAU
function angkaPrima(angka) {
    for (var i = 2; i < angka; i++) {
        if (angka % i == 0) {
            return false
        }
    }
    return angka > 1
}


console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false