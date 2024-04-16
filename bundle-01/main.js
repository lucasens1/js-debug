/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
/*
1. Fa il log in console dell'indice
2. No
3. Errore logico così il ciclo non parte, "i < 5" è il fix
*/
console.log('-------------------------')
// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
}
console.log(addIfEven(6))
/*
1. Ritorna il numero incrementato di 5, se il numero in entrata quest'ultimo è pari,
2. Si in quanto nella condizione dobbiamo avere '===' e non '=' in quanto non ASSEGNAMO ma controlliamo se num coincide con zero
3. No
*/
console.log('-------------------------')
// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
loopToFive()
/*
1. Fa il log in console dell'indice, da 0 a 4
2. C'è un errore di scrittura, in quanto la ',' deve essere sostituita dal ';'
3. Le funzione non viene chiamata.
*/
console.log('--------------------------')

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers()) // dovrebbe restituire [2,4,6,8]
/*
1. Funzione che se richiamata deve restituire i numeri pari presenti in un array definito dentro, salvandoli quando li scorre in un array che ha solo numeri pari, nel return restituisce l'array di numeri pari
2. Presenti due ';' dove non necessario, presente un operatore di assegnazione in una condizione che dovrebbe confrontare se coincidono quindi '===' e non '='
3. Errore logico quindi il < è della length in totale no decrementata, il return va messo fuori ciclo,  viene pushato nel ciclo l'indice ma deve essere invece pushato il contenuto dell'indice, problema che si presenta anche nella condizione dove troviamo numbers confrontato ma è un array,
*/