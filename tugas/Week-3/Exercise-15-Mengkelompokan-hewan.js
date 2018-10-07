function groupAnimals(animals) {
    var copy = animals.slice().sort()
    var result = []
    for (var i = 0; i < copy.length; i++) {
        var selector = copy[i][0]
        var temp = []
        for (var j = 0; j < copy.length; j++) {
            if (selector == copy[j][0]) {
                temp.push(copy[j])
                copy[j] = ' '
            }
        }
        if (temp[0] !== ' ') {
            result.push(temp)
        }
    }
    return result
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]