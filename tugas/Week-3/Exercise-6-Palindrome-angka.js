function angkaPalindrome(num) {
  var counter = num;
  var limit = 0;
  var temp = 0;
  for (counter; counter > limit; counter++) {
    var selector = counter.toString()
    if (counter < 10) {
      temp = counter + 1
      limit = counter + 5;
    }
    else {
      if (selector[0] === selector[selector.length - 1]) {
        temp = counter
        limit = counter + 5;
      }
    }
  }
  return temp
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001