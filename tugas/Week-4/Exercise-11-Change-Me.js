

function changeMe(arr) {
    var result = []

    for (var i = 0; i < arr.length; i++) {
        var obj = {}
        obj.firstname = arr[i][0]
        obj.lastname = arr[i][1]
        obj.gender = arr[i][2]
        if (arr[i][3] >= 1 && arr[i][3] <= 2018) {
            obj.age = 2018 - arr[i][3]
        }
        else { obj.age = 'invalid birth date' }
        result.push(obj)
        console.log(i + 1 + '.' + ' ' + obj.firstname + ' ' + obj.lastname)
        console.log(obj)
        console.log('')
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 2020], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // "