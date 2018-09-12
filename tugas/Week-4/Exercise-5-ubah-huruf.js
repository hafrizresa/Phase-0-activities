function ubahHuruf(kata) {
    var kamus ='abcdefghijklmnopqrstuvwxyz'
    var result = ''
    for (var i=0; i<kata.length; i++){
      var penampung = 0;
      penampung = kamus.indexOf(kata[i])
      result = result + kamus[penampung + 1]
    }
    return result
    }
    
    // TEST CASES
    console.log(ubahHuruf('wow')); // xpx
    console.log(ubahHuruf('developer')); // efwfmpqfs
    console.log(ubahHuruf('javascript')); // kbwbtdsjqu
    console.log(ubahHuruf('keren')); // lfsfo
    console.log(ubahHuruf('semangat')); // tfnbohbu