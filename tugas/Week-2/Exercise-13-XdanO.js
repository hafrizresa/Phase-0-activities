// Logic Challenge - X dan O

function xo(str) {
    var countx = str.match(/x/g);
    var indexx = countx.length;
    var counto = str.match(/o/g);
    var indexo = counto.length;
    if (indexx === indexo) {
        return true
    }
    else { return false }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true