var nama = "Hafriz"

var peran = "Ksatria"

if (nama == "") {
    console.log("Nama harus diisi")
}
else if (peran == "") {
    console.log("Peran Harus diisi dengan Ksatria/Tabib/Penyihir")
}
else if (peran == "Ksatria") {
    console.log("Selamat datang di Dunia Proxytia, " + nama + "\nHalo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu !")
}
else if (peran == "Tabib") {
    console.log("Selamat datang di Dunia Proxytia, " + nama + "\nHalo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.")
}
else if (peran == "Penyihir") {
    console.log("Selamat datang di Dunia Proxytia, " + nama + "\nHalo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
}
else { console.log('pilih peran dengan benar') }