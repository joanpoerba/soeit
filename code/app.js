var tanya = true;
while(tanya){
var a = prompt("pilih : batu, gunting, kertas");

var bot = Math.random();

if ( bot < 0.34){
    bot = "batu";
} else if ( bot >= 0.34 && bot < 0.67){
    bot = "gunting";
} else {
    bot = "kertas";
}

var hasil = " ";

    if (bot == a){
        hasil = "seri";
    } else if (bot == "batu"){
        if(a == "gunting"){
            hasil = "kalah";
        } else {
            hasil = "menang";
        }
    } else if (bot == "gunting"){
        if(a == "batu"){
            hasil = "menang";
        } else{
            hasil = "kalah";
        }
    } else if (bot == "kertas"){
        if(a == "batu"){
            hasil = "kalah";
        } else {
            hasil = "menang";
        }
    } else {
        hasil = "memasukkan pilihan yang salah"
    }

    alert ("bot memilih : " + bot + ", kamu memilih : " + a + "\nselamat, kamu " + hasil);
    tanya = confirm("lagi?");
}


