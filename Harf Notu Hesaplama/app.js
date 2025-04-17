// --------------DERS ORTALAMASI BULMA--------------------

// vize %40, final %60

// let vize = Number(prompt("Vize notunuzu giriniz."));
// let final = Number(prompt("Final notunuzu giriniz."));

// let ortalama = (vize*0.4) + (final*0.6) ;

// if (ortalama>=65){
//     alert("Tebrikler dersi geçtiniz.");
// }

// else{
//     alert ("Dersten kaldınız,seneye görüşürüz :)");
// }


//-----------------HARF NOTU BULMA--------------------------

/*
90-100 A
85-89  BA
80-84  BB
70-79  CB
60-69  CC
50-54  DD
40-49  FD
0-39   FF
*/

let vize = Number(prompt("Vize notunuzu giriniz."));
let quiz = Number (prompt("Quiz notunuzu giriniz."));
let final = Number(prompt("Final notunuzu firiniz."));

let ortalama = (vize*0.3)+(quiz*0.3)+(final*0.4);

if (ortalama>=90){
    alert("harf notunuz AA");
}
else if (85<=ortalama && ortalama<=89){
    alert("Harf notunuz BA");
}
else if (80<=ortalama && ortalama<=84){
    alert("Harf notunuz BB");
}

else if (70<=ortalama && ortalama<=79){
    alert("harf notunuz CB");
}
else if (60<=ortalama && ortalama<=69){
    alert("harf notunuz CC");
}
else if (55<=ortalama && ortalama<=59){
    alert("harf notunuz DC");
}
else if (50<=ortalama && ortalama<=54){
    alert("harf notunuz DD");
}
else if (40<=ortalama && ortalama<=49){
    alert("harf notunuz FD");
}
else{
    alert("harf notunuz FF");
}

if (ortalama>=65){
        alert("Tebrikler dersi geçtiniz.");
    }
    
    else{
        alert ("Dersten kaldınız,seneye görüşürüz :)");
    }
    

