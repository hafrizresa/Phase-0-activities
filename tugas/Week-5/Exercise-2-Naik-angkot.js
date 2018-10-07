function naikAngkot(arrPenumpang) {
    if (arrPenumpang.length == 0) {
        return arrPenumpang
    }
    var route = ['A', 'B', 'C', 'D', 'E', 'F']
    var arr = arrPenumpang
    var result = []
    for (var i = 0; i < arr.length; i++) {
        var obj = {}
        var temp = 0
        obj.penumpang = arr[i][0]
        obj.naikDari = arr[i][1]
        obj.tujuan = arr[i][2]
        for (var j = route.indexOf(arr[i][1]); j < route.indexOf(arr[i][2]); j++) {
            temp += 2000
        }
        obj.bayar = temp
        result.push(obj)
    }
    return result
}


//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]