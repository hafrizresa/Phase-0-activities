function urutkanAbjad(str) {
    var splited = str.split('').sort()
    var result = splited.join('')
    return result
    }
    
    // TEST CASES
    console.log(urutkanAbjad('hello')); // 'ehllo'
    console.log(urutkanAbjad('truncate')); // 'acenrttu'
    console.log(urutkanAbjad('developer')); // 'deeeloprv'
    console.log(urutkanAbjad('software')); // 'aeforstw'
    console.log(urutkanAbjad('aegis')); // 'aegis'
    
    