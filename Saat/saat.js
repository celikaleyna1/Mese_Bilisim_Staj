let sa = document.getElementById("sa");
let dk = document.getElementById("dk");
let sn = document.getElementById("sn");

setInterval(() => {

let zaman = new Date();
let saDeger = zaman.getHours();
let dkDeger = zaman.getMinutes();
let snDeger = zaman.getSeconds();


let guncelSn = 0;

if (snDeger % 5 == 0 && snDeger != guncelSn){
    sa.innerHTML = saDeger;
    dk.innerHTML = dkDeger;
    sn.innerHTML = snDeger;
}

guncelSn = snDeger;
    
}, 1000);


