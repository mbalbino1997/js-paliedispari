/*Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma*/
const userString = prompt("inserisci una parola");
function stringReverse (word) {
    let newString= ""
    for (let i=0; i<word.length;i++) {
        newString+=word.at(-i-1)
    }
    return newString.toLowerCase()===userString.toLowerCase()
}
console.log(stringReverse(userString))

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/
const userOddOrEven=prompt("Scegli PARI o DISPARI");
let userNumber=0;
while(userNumber>5 || userNumber<1){
    userNumber=parseInt(prompt("Scegli un numero da 1 a 5"));
}
const randomNumber=intRandomFrom1To5();
const numberSum=userNumber+randomNumber;
console.log(winOrLose(numberSum,userOddOrEven));
function intRandomFrom1To5 () {
    return Math.floor(Math.random()*5)+1;
}

function winOrLose (num,str) {
    if(isNaN(num)||(str.toUpperCase()!=="PARI"&&str.toUpperCase()!=="DISPARI")) {
        return "parametri non validi"
    }
    if((num%2===0 && str.toUpperCase()==="PARI") || (num%2!==0 && str.toUpperCase()==="DISPARI")) {
        return "hai vinto"
    }
    return "hai perso"
}

