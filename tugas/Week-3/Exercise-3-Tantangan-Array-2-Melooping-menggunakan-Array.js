var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
input.forEach(function (arr) {
    console.log('Nomor ID: ' + arr[0])
    console.log('Nama Lengkap: ' + arr[1])
    console.log('TTL: ' + arr[2] + ' ' + arr[3])
    console.log('Hobi: ' + arr[4])
    console.log('')
})

// ATAU
// TAPI INI KURANG DINAMIS DI ARRAY DALAMNYA
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input) {
    var counter = 0
    while (counter <= input.length - 1) {
        var counterDalam = 0;
        var indexDalam = ''
        while (counterDalam <= counter) {
            counterDalam++
            indexDalam = indexDalam + counterDalam;
        }
        console.log('Nomor ID:' + input[counter][0]);
        console.log('Nama Lengkap: ' + input[counter][1]);
        console.log('TTL: ' + input[counter][2] + ' ' + input[counter][3]);
        console.log('Hobi: ' + input[counter][4])
        counter++
    }
}
dataHandling(input)
