
function tentukanDeretAritmatika(arr) {
    var copy = arr.slice();
    var selisih = copy[1] - copy[0];
    var selector = copy[arr.length - 1]
    if (copy[arr.length - 2] + selisih == selector) {
        return true
    }
    else { return false }
}
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false