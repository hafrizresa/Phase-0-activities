var tanggal = 23;
var bulan = 11;
var tahun = 2012;

switch (bulan) {
    case 1:
        bulan = 'january';
        break;
    case 2:
        bulan = 'february';
        break;
    case 3:
        bulan = 'maret';
        break;
    case 4:
        bulan = 'april';
        break;
    case 5:
        bulan = 'mei';
        break;
    case 6:
        bulan = 'juni';
        break;
    case 7:
        bulan = 'july';
        break;
    case 8:
        bulan = 'agustus';
        break;
    case 9:
        bulan = 'september';
        break;
    case 10:
        bulan = 'oktober';
        break;
    case 11:
        bulan = 'november';
        break;
    default:
        bulan = 'desember';
}
console.log(tanggal + ' ' + bulan + ' ' + tahun)
