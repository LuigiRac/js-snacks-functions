/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetter() {
    // console.log(names.length);
    const newArray = [];

    for (let i = 0; i < names.length; i++) {


        let fLetter = names[i].charAt(0);
        newArray.push(fLetter)

        // console.log(fLetter);
    }

    return newArray;

}

// Invoca la funzione qui e stampa il risultato in console

// firstLetter()
console.log(firstLetter());

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]