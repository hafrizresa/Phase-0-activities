function dataHandling2(input) {
    var copy = input.slice()
    copy.splice(1, 1, 'Roman Alamsyah Elsharawy')
    copy.splice(4, 2, 'Pria', 'SMA Internasional Metro')
    console.log(copy)
    var tanggal = copy[3].split('/')
    switch (tanggal[1]) {
        case '01':
            console.log('januari');
            break
        case '02':
            console.log('Februari');
            break
        case '03':
            console.log('Maret');
            break
        case '04':
            console.log('april');
            break
        case '05':
            console.log('mei');
            break
        case '06':
            console.log('juni');
            break
        case '07':
            console.log('juli');
            break
        case '08':
            console.log('agustus');
            break
        case '09':
            console.log('september');
            break
        case '10':
            console.log('oktober');
            break
        case '11':
            console.log('november');
            break
        case '12':
            console.log('desember');
            break
    }
    console.log(tanggal)
    copy[3] = tanggal.join('-')
    console.log(copy[3])
    console.log(copy[1])
}
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
dataHandling2(input)