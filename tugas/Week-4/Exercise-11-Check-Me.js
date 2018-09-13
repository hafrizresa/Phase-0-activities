var arr =[['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male', 1994]]
var obj ={}
var result = []

for (var i=0; i<arr.length; i++){
 obj.firstname = arr[i][0]
 obj.lastname = arr[i][1]
 obj.gender = arr[i][2]
 obj.age = 2018 - arr[i][3]
result.push(obj)
}
