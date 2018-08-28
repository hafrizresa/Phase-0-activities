var nama = prompt('isi nama kamu')
while (nama == "") {
    nama = prompt("nama harus di isi, silahkan isi nama kamu")
}
var peran = prompt('Halo ' + nama + "," + "Pilih peranmu untuk memulai game ! Ksatria, Tabib, dan Penyihir")
while (peran == "") {
    prompt('peran harus di isi, silahkan isi peran kamu')
}

if (peran == "Ksatria") {
    alert("Selamat datang di Dunia Proxytia, " + nama + "\nHalo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu !")
}
else if (peran == "Tabib") {
    alert("Selamat datang di Dunia Proxytia, " + nama + "\nHalo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.")
}
else { alert("Selamat datang di Dunia Proxytia, " + nama + "\nHalo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!") }