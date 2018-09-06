function pasanganTerbesar(num) {
    var string = num.toString(); // ini jadi string
    var seleksi = string.split('') // Ini udah jadi array; INI KENAPA BELOM DI SORT MALAH KE SORT?
    var sorting = seleksi.sort()// Ini udah di sort arraynya;
    var angkaTerbesar = sorting[sorting.length - 1]// ini jadi angka terbesar
    for (var counter = 0; counter < string.length - 1; counter++) {
        var temp = 0 //ini nampung buat hit index setelah angka terbsar
        if (string[counter] == angkaTerbesar) {
            var temp = counter
            counter = counter + string.length
        }
    }
    temp = temp + 1
    var calculation = angkaTerbesar + string[temp]
    var result = Number(calculation)
    return result
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99