function balikString(arr) {
  var index = arr.length - 1
  var hasil = ''
  for (index; index >= 0; index--) {
    var hasil = hasil + arr[index]
  }
  return hasil
}

console.log(balikString('hello world!'))