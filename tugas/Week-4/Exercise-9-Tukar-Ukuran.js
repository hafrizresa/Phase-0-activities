function tukarBesarKecil(kalimat) {
    var arr = kalimat.split('')
  
  for (var i=0; i<arr.length; i++){
    var selector = arr[i]
    for (var j=0; j<arr.length; j++){
      if (selector == arr[j].toUpperCase()){
        arr.splice(i,1,selector.toLowerCase())
      }
      else if (selector == arr[j]){
        arr.splice(i, 1, selector.toUpperCase())
      }
    }
  }
  var result = arr.join('')
  return result
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"