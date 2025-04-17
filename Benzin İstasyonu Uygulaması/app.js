//Benzin İstasyonu

/*
 1-Dizel    : 24.53
 2-Benzin   : 22.25
 3-LPG      : 11.1

 Gelen müşteriden alacağımız bilgiler
 1- Yakıt tipi
 2- yüklenecek yakıt litresi
*/

let dizel = 24.53, benzin = 22.25, lpg = 11.1;
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel" + yeniSatir
    + "2-Benzin" + yeniSatir
    + "3-LPG" + yeniSatir
    + "Lütfen yakıt tipinizi giriniz.";

let yakitTipi = prompt(yakitMetni);
if (yakitTipi == 1 || yakitTipi == 2 || yakitTipi == 3) {
    let yakitLitresi = Number(prompt("Yakıt Litresini giriniz."));
    let bakiye = Number(prompt("Bakiyenizi giriniz."));
    if (yakitTipi == "1") {
        let odenecekTutar = yakitLitresi * dizel;
        if (odenecekTutar < bakiye) {
            bakiye = bakiye - odenecekTutar;
            alert("Ödemeniz başarıyla tamamlandı." + yeniSatir
                + "Kalan Bakiye : " + (bakiye - odenecekTutar));
        }
        else {
            alert("Bakiyeniz yetersiz." + yeniSatir
                + "Ödenecek Tutar : " + odenecekTutar + " TL " + yeniSatir
                + "Bakiye : " + bakiye + " TL " + yeniSatir
                + "Eksik Tutar : " + (odenecekTutar - bakiye) + "TL");
        }
    }

    if (yakitTipi == "2") {
        let odenecekTutar = yakitLitresi * benzin;
        if (odenecekTutar < bakiye) {
            bakiye = bakiye - odenecekTutar;
            alert("Ödemeniz başarıyla tamamlandı." + yeniSatir
                + "Kalan Bakiye : " + (bakiye - odenecekTutar));
        }
        else {
            alert("Bakiyeniz yetersiz." + yeniSatir
                + "Ödenecek Tutar : " + odenecekTutar + " TL " + yeniSatir
                + "Bakiye : " + bakiye + " TL " + yeniSatir
                + "Eksik Tutar : " + (odenecekTutar - bakiye) + "TL");
        }
    }

    if (yakitTipi == "3") {
        let odenecekTutar = yakitLitresi * lpg;
        if (odenecekTutar < bakiye) {
            bakiye = bakiye - odenecekTutar;
            alert("Ödemeniz başarıyla tamamlandı." + yeniSatir
                + "Kalan Bakiye : " + (bakiye - odenecekTutar));
        }
        else {
            alert("Bakiyeniz yetersiz." + yeniSatir
                + "Ödenecek Tutar : " + odenecekTutar + " TL " + yeniSatir
                + "Bakiye : " + bakiye + " TL " + yeniSatir
                + "Eksik Tutar : " + (odenecekTutar - bakiye) + "TL");
        }
    }
}

else {
    alert("Lütfen geçerli bir yakıt türü giriniz!");
} 