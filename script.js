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