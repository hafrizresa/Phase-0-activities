// 1. Melakukan Looping Menggunakan While
        // Looping Pertama
        var a = "i love coding";
        var a1= "LOOPING PERTAMA"
        var b = 0;
        while (b <= 20) {
            if (b == 0) {
                console.log(a1)
            }
            else if (b % 2 == 0) {
                console.log(b + " - " + a)
            }
            b = b + 1
        }

        // Looping Kedua
        var c = "I will become fullstack developer";
        var c1 = "LOOPING KEDUA"
        var d = 20;
        while (d > 0) {
            if (d == 20) {
                console.log(c1)
            }
            if (d % 2 == 0) {
                console.log(d + " - " + c)
            }
            d = d - 1
        }

        // 2. Melakukan Looping Menggunakan For
        // Looping Pertama
        var e = "i love coding";
        var e1 = "LOOPING PERTAMA";
        var f;
        for (f=0; f<=20; f++) {
            if (f == 0) {
                console.log(e1)
            }
            else {console.log(f + " - " + e)}
        }
        
        // Looping Kedua
        var g = "I will become fullstack developer"
        var g1 = "LOOPING KEDUA"
        var h;
        for (h=21; h>0; h--) {
            if (h == 21) {
                console.log(g1)
            }
            else {console.log(h + " - " + g)}
        }

        // 3. Angka Ganjil dan Genap
        // Loop 1
        var i = 1
        var j = "ganjil"
        var k = "genap"
        while (i<=100) {
            if (i%2 == 0) {
                console.log (i + " - " + k)
            }
            else {console.log(i + " - " + j)}
            i = i + 1
        }

        // Loop Counter 2
        var l = 1
        var l1 = " Kelipatan 3"
        while (l <= 100) {
            if (l%3 == 0) {
                console.log(l + l1)
            }
            else {console.log("")}
            l = l + 2
        }
        
        // Loop Counter 5
        var m = 1
        var m1 = " Kelipatan 6"
        while (m <=100) {
            if (m%6 == 0) {
                console.log(m + m1)
            }
            else {console.log("")}
            m = m + 5
        }

        // Loop Counter 9
        var n = 1
        var n1 = " Kelipatan 10"
        while (n <= 100) {
            if (n%10 == 0) {
                console.log(n + n1)
            }
            else {console.log("")}
            n = n + 9
        }