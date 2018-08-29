// Logic Challenge - Balik Kata
function balikKata(kata) {
    var a = kata.length - 1;
    var b = ''
      while (a >= 0) {
        b = b + kata[a]
        a = a - 1
      }
      return b
    }
    
    // TEST CASES
    console.log(balikKata('Hello World and Coders')); 
    console.log(balikKata('John Doe')); 
    console.log(balikKata('I am a bookworm'));
    console.log(balikKata('Coding is my hobby'));
    console.log(balikKata('Super')); 