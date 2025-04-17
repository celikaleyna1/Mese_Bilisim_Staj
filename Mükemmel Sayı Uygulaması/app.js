/*

Sayının bölenlerinin toplamı sayının iki katına eşitse 
bu sayı mükemmel sayıdır.

*/

let sayi = Number(prompt("Sayıyı giriniz."));
let sonuc = mukemmelSayiMi(sayi);

function mukemmelSayiMi(sayi){
   
    let toplam = 0;
    for(let i = 1 ; i<= sayi ;i++){
        if(sayi%i==0){
            toplam+=i
        }
    }
    if (toplam == sayi*2){
        alert("Girdiğiniz sayı mükemmel sayıdır.");
    }
    else{
        alert("Girdiğiniz sayı mükemmel sayı değildir.");
    }
    
}




