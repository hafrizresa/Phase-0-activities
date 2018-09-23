function cariModus(arr) {
    var tampung = []
    for (var i = 0; i < arr.length; i++) {
        var temp = 0
        for (var j = i; j < arr.length; j++) {
            if (arr[i] == arr[j + 1]) {
                temp += 1
            }
        }
        tampung.push(temp)
    }
    temp = 0
    var angka = 0
    for (var i = 0; i < tampung.length; i++) {
        if (tampung[i] > temp) {
            temp = tampung[i]
            angka = i
        }
    }

    if (temp == 0 || temp == arr.length - 1) {
        return -1
    }
    return arr[angka]
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([10, 4, 5, 2, 4, 10, 4])); // 4