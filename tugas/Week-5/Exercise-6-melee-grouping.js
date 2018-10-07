function meleeRangedGrouping (str){
    if (str.length == 0){
      return []
    }
  var result  =[[],[]]
  var splited = str.split(',')
  var saring =[]
  
  for (var i=0; i<splited.length; i++){
    saring.push(splited[i].split('-'))
  }
  
  for (var j=0; j<saring.length; j++){
    if (saring[j][1] == 'Ranged'){
      result[0].push(saring[j][0])
    }
    else {result[1].push(saring[j][0])}
  }
  return result
  }
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []