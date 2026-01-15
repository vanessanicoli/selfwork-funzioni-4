// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Primo step: eliminare gli spazi e i segni di punteggiatura:
// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

// Esempio:
// Input: “i topi non avevano nipoti”
// Output: true


let check = false;
let str = 'i topi non avevano nipoti';
str = str.replace(/\W/g, "");
let reversed = str.split('').reverse().join('');

if(str == reversed){
    check = true;
}
else{
    check = false;
}

console.log(check);