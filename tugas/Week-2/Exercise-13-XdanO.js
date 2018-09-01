// Logic Challenge - X dan O

function xo(str) {
    var countX = 0;
    var countO = 0;
    var counter = 0;

    for (counter = 0; counter < str.length; counter++) {
        if (str[counter] === 'x') {
            countX = countX + 1
        }
        else if (str[counter] === 'o') {
            countO = countO + 1
        }
    }
    if (countX == countO) {
        return true
    }
    else { return false }
}

// ATAU

function xo1(str) {
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

console.log(xo1('xoxoxo')); // true
console.log(xo1('oxooxo')); // false
console.log(xo1('oxo')); // false
console.log(xo1('xxxooo')); // true
console.log(xo1('xoxooxxo')); // true