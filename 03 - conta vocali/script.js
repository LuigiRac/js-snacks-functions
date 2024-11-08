/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numVocali() {
    const vocali = ["a", "e", "i", "o", "u"];
    const onlyVocali = [];

    for (let i = 0; i < word.length; i++) {
        if (vocali.includes(word[i])) {
            onlyVocali.push(word[i])
        }

    }

    return onlyVocali
}

// Invoca la funzione qui e stampa il risultato in console

console.log(numVocali());


//Risultato atteso se si passa 'javascript': 3 (a, a, i)