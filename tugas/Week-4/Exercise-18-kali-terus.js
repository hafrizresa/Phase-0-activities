function kaliTerusRekursif(angka) {
    if (angka.toString().length === 1) {
      return angka;
    } else {
      var perkalian = Number(angka.toString().substring(0, 1));
      
      for (var i = 1; i < angka.toString().length; i++) {
        perkalian = perkalian * Number(angka.toString()[i]);
      }  
      
      return kaliTerusRekursif(perkalian);
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6