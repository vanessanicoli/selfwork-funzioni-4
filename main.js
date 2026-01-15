// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Primo step: eliminare gli spazi e i segni di punteggiatura:
// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

// Esempio:
// Input: “i topi non avevano nipoti”
// Output: true


let str = 'i topi non avevano nipoti';

function clearString(string){
    return string.replace(/\W/g, "");
}

function reverseString(string){
    return string.split('').reverse().join('');
}

function palindromeString(str1, str2) {
    if(str1 == str2){
        return true;
    }
    else{
        return false;
    }
}

let cleared = clearString(str);
console.log(cleared);

let reversed = reverseString(cleared);
console.log(reversed);

let check = palindromeString(cleared, reversed);
console.log(check);
