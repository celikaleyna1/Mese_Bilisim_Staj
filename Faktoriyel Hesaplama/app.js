let sayi = Number(prompt("Hesaplamak istediğiniz sayıyı giriniz."));
let carpim = 1;

for( let i = sayi ; i>0 ; i--){
  carpim = carpim*i;

}
// console.log(carpim);

alert("Sonuç : " + carpim);