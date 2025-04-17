/*
1- Türkçe 40
2- Matematik 40
3- Sosyal Bilimler 20
4- Fen Bilimleri 20

-------> 100 puanı ÖSYM veriyor.
-------> Okul puanı max 60 geliyor.

*/

let turkceDogru , turkceYanlis = 0 ;
let matDogru , matYanlis = 0 ;
let sosyalDogru , sosyalYanlis = 0 ;
let fenDogru , fenYanlis = 0 ;
let puan = 0 ;
let okulPuani = 0 ;

let yeniSatir = "\r\n";
let mesaj = "TYT Puan hesaplama uygulamasına hoşgeldiniz!"+yeniSatir
+"1-Puan Hesaplama" + yeniSatir
+"2-Çıkış yap ";

let secim = prompt(mesaj);

switch(secim){
    case "1":
    
    okulPuani = Number(prompt("Okul puanınızı giriniz."));

    turkceDogru = Number(prompt("Türkçe doğru sayınızı giriniz."));
    turkceYanlis = Number(prompt("Türkçe yanlış sayınızı giriniz."));

    matDogru = Number(prompt("Matematik doğru sayınızı giriniz."));
    matYanlis = Number(prompt("Matematik yanlış sayınızı giriniz."));

    sosyalDogru = Number(prompt("Sosyal Bilgiler doğru sayınızı giriniz."));
    sosyalYanlis = Number(prompt("Sosyal Bilgiler yanlış sayınızı giriniz."));

    fenDogru = Number(prompt("Fen Bilimleri doğru sayınızı giriniz."));
    fenYanlis = Number(prompt("Fen Bilimleri yanlış sayınızı giriniz."));

    let dogruSayisi = turkceDogru + matDogru + sosyalDogru + fenDogru ;
    let yanlisSayisi = turkceYanlis + matYanlis + sosyalYanlis + fenYanlis ;
    let kalanDogruSayisi = dogruSayisi - (yanlisSayisi/4);
    puan = (kalanDogruSayisi*4) + 100 + okulPuani;
    alert("TYT puanınız : " + puan);
    
    break;

    case "2":
        alert("Uygulamadan çıkış yapıldı.");
        break;

    default :
    alert("Lütfen geçerli aralıkta bir değer giriniz!");    
    break;

}