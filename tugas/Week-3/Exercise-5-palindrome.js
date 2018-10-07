'use strict';
function palindrome(kata){
    if (kata[0] === kata[kata.length-1]){
      return true
    }
    else {
      return false
    }
  }
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
