/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = "";
    if (myAge < 18) {
        return message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        return message = 'Hai più di 18 anni!';
    }
}
console.log(checkAge())
/* 
    1- Che cosa fa questo codice?
    Controlla l'età.
    2- Sono presenti errori di sintassi?
    Uso apici invece che virgolette, dato const ad una variabile che viene modificata, mancanza di un return, per la restituizione del risultato.
    3- Sono presenti errori logici? 
    Diciamo la presenza di una costante myAge definita all'interno della funzione con valore maggiore di 18, pregiudica l'avverarsi della condizione else
*/

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();
/* 
    1- Che cosa fa questo codice?
    Questo codice ha al suo interno una palette di colori in un array, e ne restituisce il numero di colori
    2- Sono presenti errori di sintassi?
    Presente un errore per quanto riguarda la scrittura corretta di length
    3- Sono presenti errori logici?
    No
*/


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = parseInt(userNumber) + 12;
    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
/* 
    1- Che cosa fa questo codice?
    Al numero inserito dall'utente aggiunge 12
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici? 
    Si viene sommata ad una stringa 12, quindi il risultato è una concatenazione
*/

// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com', 
        'yourmail@mail.com', 
        'hermail@mail.com', 
        'hismail@mail.com'
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
        console.log('Accesso consentito!');
    }else {
        console.log('Accesso negato!');
    }
}
checkAccess();
/* 
    1- Che cosa fa questo codice?
    Restituisce Accesso Consentito se l'email inserita figura nell'array di indirizzi mail, altrimenti restituisce Accesso Negato!
    2- Sono presenti errori di sintassi?
    Si l'uso di apici per assegnare un valore da una variabile booleana, che dovrebbe avere o true o false.
    3- Sono presenti errori logici? 
    La presenza di un controllo if, non necessario
*/

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];
        if (email === userEmail) {
            grantAccess = 'true';
            console.log('Accesso consentito!');
            break;
        } else if(i === addresses.length - 1) {
            console.log('Accesso negato!');
            break;
        } 
    }
}
checkAccessImproved();
/* 
    1- Che cosa fa questo codice?
    Controlla se l'email è presente o meno
    2- Sono presenti errori di sintassi?
    L'assenza della graffa di chiusura, la presenza del richiamo della funzione all'interno della funzione stessa
    3- Sono presenti errori logici? 
    Si ciclo si ripete senza uscire, risolto aggiungendo un break, condizione inutile che controlla se grantAccess è true, non c'è bisogno se la mail inserita dall'utente corrisponde, allora diviene vero l'utente può accedere ed è finito il controllo
*/