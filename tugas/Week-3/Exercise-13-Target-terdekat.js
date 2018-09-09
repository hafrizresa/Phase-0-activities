function targetTerdekat(arr)
{var temp = 0
for (var i=0; i<arr.length; i++){
  if (arr[i] === 'o') {
    for (arr[i]; arr[i]!= 'x'; arr[i++])
    temp = temp + 1
  }
}
return temp
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// BELUM SELESAI