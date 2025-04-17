let metin = "Şu anda Meşe Bilişim'de staj yapıyorum.";

let harf = prompt("Harfi giriniz");

let sonuc = bul(harf);
alert("Sonuç : "+sonuc);

function bul(harf){
    let toplam = 0
    for(let i = 0 ; i < metin.length; i++ ){
        if(metin.charAt(i).toLowerCase() === harf.toLowerCase()){
        toplam+=1;
        }
    }
    return toplam;
}


