function cariModus(arr) {
    var tes = 0
    for (var i = 0; i < arr.length; i++) {
        var penampung = 0
        var copy = arr.slice();
        var selector = copy.splice(i, 1)
        for (var j = 0; j < copy.length; j++) {
            if (selector == copy[j]) {
                penampung += 1
                tes += 1
            }
        }
        if (penampung >= 1 && penampung != arr.length - 1) {
            return arr[i]
        }
        else if (penampung == arr.length - 1) {
            return -1
        }
    }
    if (tes == 0) {
        return -1
    }
}


console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1