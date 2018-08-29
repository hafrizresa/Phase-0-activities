// 1. Menyusun Barisan Bintang
console.log("1. Menyusun Barisan Bintang")
var rows1 = 5;
var a = 0;
var b = "*";
for (a = 0; a < rows1; a++) {
    console.log(b)
}

// ATAU
console.log("ATAU");
a = 0
while (a < rows1) {
    console.log(b)
    a++
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log("2. Menyusun Barisan Bintang Dengan Nested Looping")
var rows2 = 5;
var a2 = 0;
var b2 = 0;
var c2 = ""
for (a2 = 0; a2 < rows2; a2++) {
    for (b2 = 0; b2 < rows2; b2++) {
        c2 = c2 + "*"
    }
    console.log(c2);
    c2 = ""
}

// ATAU
console.log("ATAU")
a2 = 0;

while (a2 < rows2) {
    b2 = 0;
    c2 = "";
    while (b2 < rows2) {
        c2 = c2 + "*";
        b2 = b2 + 1
    }
    console.log(c2);
    a2 = a2 + 1
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping")
var rows3 = 5
var a3 = 0;
var b3 = 0;
var c3 = "*";

for (a3 = 0; a3 < rows3; a3++) {
    for (b3 = 0; b3 < a3; b3++) {
        c3 = c3 + "*"
    }
    console.log(c3)
    c3 = "*";
}

// ATAU
console.log("ATAU")
a3 = 0

while (a3 < rows3) {
    b3 = 0;
    while (b3 < a3) {
        c3 = c3 + "*";
        b3 = b3 + 1
    }
    console.log(c3);
    c3 = "*"
    a3++
}