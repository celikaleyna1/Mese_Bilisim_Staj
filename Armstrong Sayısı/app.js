let sayi = prompt("Lütfen sayıyı giriniz.");
let toplam = 0;

for(let i=0 ; i<sayi.length; i++){
 let rakam = sayi.charAt(i);
toplam += rakam*rakam*rakam;
}

if(sayi==toplam){
    alert("Sayı armstrong sayısıdır.");
}
else{
    alert("Sayı armstrong sayısı değildir.");
}


//Sayıyı string olarak tanımladık çünkü length metodunu numberda kullanamayız.
//length metodu uzunluğu anlamına gelir.
/*belirli bir dizinde orijinal dizeden tek bir karakter 
içeren yeni bir dize döndürür*/