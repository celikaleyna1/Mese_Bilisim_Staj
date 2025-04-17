/*
BKE Aralığı	Değerlendirme
0 – 18.4	Zayıf
18.5 – 24.9	Normal kilolu
25.0 – 29.9	Fazla kilolu
30.0 – 34.9	1. derece obezite
35.0 – 39.9	2. derece obezite
40.0 ve üzeri	3. derece (morbid) obezite
*/

let kilo = Number (prompt("Kilonuzu giriniz"));
let boy = Number (prompt("Boyunuzu metre cinsinden giriniz."));

let bke= (kilo/(boy*2));

if (bke<=18.4){
     alert("beden kitle endeksiniz :" + bke.toFixed(2) + "\nkilonuz normalin altında");
}
else if (18.5<=bke && bke<=24.9){
     alert("beden kitle endeksiniz :" + bke.toFixed(2) + "\nkilonuz normal"); 
}
else if (25.0<=bke && bke<=29.9){
     alert("beden kitle endeksiniz :" + bke.toFixed(2) + "\nkilonuz normalin üstünde");
}
else if (30.0<=bke && bke<=34.9){
    alert("beden kitle endeksiniz :" + bke.toFixed(2) + "\nkilonuz normalin çok üstünde (obez)");
}
else{
    alert("beden kitle endeksiniz :" + bke.toFixed(2) + "\nkilonuz normalin çok üstünde (morbid obez)");
}

