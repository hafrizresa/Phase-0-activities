function changeVocals(str) {
    var splited = str.split('')
    for (var i = 0; i < splited.length; i++) {
        switch (splited[i]) {
            case 'a':
                splited[i] = 'b';
                break;
            case 'i':
                splited[i] = 'j';
                break;
            case 'u':
                splited[i] = 'v';
                break;
            case 'e':
                splited[i] = 'f';
                break;
            case 'o':
                splited[i] = 'p';
                break;
            case 'A':
                splited[i] = 'B';
                break;
            case 'I':
                splited[i] = 'J';
                break;
            case 'U':
                splited[i] = 'V';
                break;
            case 'E':
                splited[i] = 'F';
                break;
            case 'O':
                splited[i] = 'P';
                break;
        }
    }
    var result = splited.join('')
    return result
}

function reverseWord(str) {
    var result = ''
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

function setLowerUpperCase(str) {
    var splited = str.split('')
    for (var i = 0; i < splited.length; i++) {
        if (splited[i] === splited[i].toLowerCase()) {
            splited[i] = splited[i].toUpperCase()
        }
        else { splited[i] = splited[i].toLowerCase() }
    }
    var result = splited.join('')
    return result
}

function removeSpaces(str) {
    var splited = str.split('')
    for (var i = 0; i < splited.length; i++) {
        if (splited[i] == ' ') {
            splited.splice(i, 1)
        }
    }
    var result = splited.join('')
    return result
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var result = changeVocals(name);
    result = reverseWord(result);
    result = setLowerUpperCase(result);
    result = removeSpaces(result)
    return result

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'