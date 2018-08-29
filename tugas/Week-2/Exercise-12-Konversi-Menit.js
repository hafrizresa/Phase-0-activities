// Logic Challenge - Konversi Menit
function konversiMenit(menit) {
    var b = 0;
    while(menit%60 != 0){
      b = b + 1;
      menit = menit - 1
    }
    c = menit / 60
    
    if (c<10) {
      c = '0' + c
    }
    if (b<10) {
      b = '0' + b
    }
    return d = c + ':' + b
    }
    // TEST CASES
    console.log(konversiMenit(63)); // 1:03
    console.log(konversiMenit(124)); // 2:04
    console.log(konversiMenit(53)); // 0:53
    console.log(konversiMenit(88)); // 1:28
    console.log(konversiMenit(120)); // 2:00