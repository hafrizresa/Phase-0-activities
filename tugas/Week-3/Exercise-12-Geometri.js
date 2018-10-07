function tentukanDeretGeometri(arr) {
    var copy = arr.slice();
    var selisih = copy[1] / copy[0];

    if (copy[copy.length - 2] * selisih === copy[copy.length - 1]) {
        return true
    }
    else { return false }
}
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false