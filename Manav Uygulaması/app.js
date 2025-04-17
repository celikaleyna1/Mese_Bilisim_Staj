//Elma kg 40
//Armut kg 48
//Domates kg 35
//Salatalık kg 40
//Biber kg 100

let elma = 40 , armut = 48 , domates = 35 , salatalık = 40 , biber = 100 ;
const yeniSatir = "\r\n";

const alisVerisMetni = 
"1-Elma" + yeniSatir +
"2-Armut" + yeniSatir + 
"3-Domates" + yeniSatir +
"4-Salatalık" + yeniSatir +
"5-Biber" + yeniSatir +
"Lütfen aldığınız ürünleri giriniz.";

let alinanUrUnler = Number (prompt(alisVerisMetni));
let alinanMiktar = Number (prompt ("Aldığınız miktarı giriniz."));
let bakiye = Number (prompt ("Bakiyenizi giriniz."));


if (alinanUrUnler == 1){
    let odenecekTutar = elma * alinanMiktar;
    
    if (odenecekTutar<bakiye){
        alert("Satın alımınız başarıyla gerçekleşti." + yeniSatir
            + "Kalan Bakiye : " + (bakiye - odenecekTutar));
    }
    else{
        alert("Bakiyeniz yeterli değil."+ yeniSatir +
            "Ödenecek tutar : " + odenecekTutar + yeniSatir
            +"Bakiyeniz : " + bakiye + yeniSatir
            +"Eksik tutar : " + (odenecekTutar - bakiye));

    }
}
if (alinanUrunler == 2){
    let odenecekTutar = armut * alinanMiktar;

    if (odenecekTutar<bakiye){
        alert("Satın alımınız başarıyla gerçekleşti." + yeniSatir
            + "Kalan Bakiye : " + (bakiye - odenecekTutar));
    }
    else{
        alert("Bakiyeniz yeterli değil."+ yeniSatir +
            "Ödenecek tutar : " + odenecekTutar + yeniSatir
            +"Bakiyeniz : " + bakiye + yeniSatir
            +"Eksik tutar : " + (odenecekTutar - bakiye));

    }
}
if (alinanÜrünler == 3){
    let odenecekTutar = domates * alinanMiktar;

    if (odenecekTutar<bakiye){
        alert("Satın alımınız başarıyla gerçekleşti." + yeniSatir
            + "Kalan Bakiye : " + (bakiye - odenecekTutar));
    }
    else{
        alert("Bakiyeniz yeterli değil."+ yeniSatir +
            "Ödenecek tutar : " + odenecekTutar + yeniSatir
            +"Bakiyeniz : " + bakiye + yeniSatir
            +"Eksik tutar : " + (odenecekTutar - bakiye));

    }
}
if (alinanÜrünler == 4){
    let odenecekTutar = salatalık * alinanMiktar;

    if (odenecekTutar<bakiye){
        alert("Satın alımınız başarıyla gerçekleşti." + yeniSatir
            + "Kalan Bakiye : " + (bakiye - odenecekTutar));
    }
    else{
        alert("Bakiyeniz yeterli değil."+ yeniSatir +
            "Ödenecek tutar : " + odenecekTutar + yeniSatir
            +"Bakiyeniz : " + bakiye + yeniSatir
            +"Eksik tutar : " + (odenecekTutar - bakiye));

    }
}
if (alinanÜrünler == 5){
    let odenecekTutar = biber * alinanMiktar;

    if (odenecekTutar<bakiye){
        alert("Satın alımınız başarıyla gerçekleşti." + yeniSatir
            + "Kalan Bakiye : " + (bakiye - odenecekTutar)); 
    }
    else{
        alert("Bakiyeniz yeterli değil."+ yeniSatir +
            "Ödenecek tutar : " + odenecekTutar + yeniSatir
            +"Bakiyeniz : " + bakiye + yeniSatir
            +"Eksik tutar : " + (odenecekTutar - bakiye));

    }
}

