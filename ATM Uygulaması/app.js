/*
1-Bakiye Görüntüleme
2-Para Çekme
3-Para Yatırma
4-Çıkış

*/

let bakiye = 1000;
let yeniSatir = "\r\n";

let metin = "1-Bakiye Görüntüleme " + yeniSatir
+ "2-Para Çekme " + yeniSatir
+ "3-Para Yatırma " + yeniSatir
+ "4-Çıkış " + yeniSatir
+"Lütfen bir değer seçiniz.";

let secim = prompt(metin);

switch(secim){
    case "1":
        alert("Bakiyeniz : " + bakiye);
        break;
    
    
    case "2":
    let cekilecekTutar = Number (prompt("Çekmek istediğiniz tutarı giriniz."));

    if(cekilecekTutar<bakiye){
        bakiye = bakiye - cekilecekTutar;
        alert("İşleminiz başarılı"+ yeniSatir
           + "Kalan Bakiyeniz : " + bakiye );
    }
    else{
        alert("İstediğiniz tutarda bakiyeniz yok!"+yeniSatir
            +"Bakiyeniz : "+ bakiye + " " + "Çekilmek istenen tutar : " + cekilecekTutar);
    }
    break;
   
   
    case "3":
        let yatirilacakTutar = Number (prompt("Yatıracağınız tutarı giriniz."));
        bakiye = bakiye + yatirilacakTutar
        alert("Güncel bakiyeniz : " + bakiye);
        break;

    
    case "4":
    console.log("Sistemden çıkış yapılmıştır.");
    break;

    default:
     alert("Lütfen 1 - 4 arasında bir değer giriniz!");
     break;
}