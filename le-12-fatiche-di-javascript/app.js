const input = document.querySelector('input');
console.log(input)
//Inizializzo l'array
const array = [];


//All'input viene aggiunto l'EventListener
input.addEventListener('keypress', function (event) {

    /*
        L'event in questo caso controlla nel primo caso se quello che inserisco
        è diverso dal valore del tasto Enter ossia 'Enter', e se l'input -> valure.lenght è 0
        esce dall'EventListener
    */
    if (event.code != 'Enter') return;
    //Tolgo la length e controllo se è vuota la stringa
    if (input.value.length === 0) return;

    //Pusho il valore dentro l'input nell'array
    array.push(input.value);
    //Stampo in console per controllare se ha pushato
    console.log(array);

    //Crea una costante che crea nel dom l'elemento 'li'
    const li = document.createElement('li');
    //Aggiunge la classe 'list-group-item'
    li.classList.add('list-group-item');
    //Scrive nel li il valore dell'input con innerText no Text
    li.innerText = input.value;
    //Stampo per controllare se passo il valore
    /* console.log(li.innerText); */
    //Prendo l'elemento padre
    const ulElem = document.querySelector('ul');
    /* console.log(ulElem); */
    //Non si può pushare in quanto non è un array ma un elemento HTML
    /*document.querySelector('ul').push(li);*/
    ulElem.append(li);

    console.log('Fine prima parte correzione, la lista viene appesa in pagina')
    console.log(array)

    //Counter è inizializzato come stringa e poi incrementato ne cambio dunque il valore
    /* let counter = 0; */
    //Item viene inizializzato alla prima posizione dell'array 
    /* let item = array[0]; */
    //Max?
    /* let max = 1; */
    //Oggetto e non un array
    const elems = {};

    //Nell'array aggiungo .length per evitare un ciclo infinito il ciclo in questione deve essere inizializzato solo una volta che la length dell'array è diversa da zero
    if (array.length != 0) {
        for (let i = 0; i < array.length; i++) {
            //Variabile Val con valore identico al valore corrisposto nella posizione indicata dall'indice
            let val = array[i];
            console.log(val)

            //Controllo se l'elemento di elems non è presente nell'oggetto
            if (!elems[val]) {
                elems[val] = 1;
            } else {
                //Se già presente incremento conteggio
                elems[val]++;
            }
            console.log(elems)
            console.log(array)

            //Secondo ciclo in lettura che incrementa (forse evitabile con il counter dentro l'oggetto)
            /* for (let j = i; j < array.length; j++) {
                //L'elemento nell'array è uguale all'elemento nel secondo array?
                if(array[i] === array[j]) {
                    //incrementa il counter
                    counter++;
                    if (max < counter){
                        max  = counter;
                        item = array[i];
                    }      
                }
            }
            //Rinizializza il counter
            counter = 0; */
        }
    }

    console.log(elems)
    //Inizializzo un contatore che mi conta quante volte è stato ripetuto il nome e prende il suo valore dall'oggetto, che si aggiorna ogni qualvolta inseriamo un valore nella lista, quando quel valore nella lista supera il valore precedentemente più scritto ne prende il posto e il contatore semplicemente continua ad incrementarsi.
    let contatoreParola = 0;
    let nomeRipetuto = "";
    //Faccio un ciclo in elems per provare a salvare le sue proprietà
    for (let key in elems) {
        //Noto che da questo log in elems[key] sono presenti dei valori numerici che stanno ad indicare il numero di volte in cui una voce dell'oggetto è ripetuta
        console.log(elems[key])
        const counterInterno = elems[key];
        //Faccio il controllo se il counter è maggiore del contatore allora il contatore prenderà il valore del counter il nomeRipetuto prenderà il valore della key
        if (counterInterno > contatoreParola) {
            contatoreParola = counterInterno;
            nomeRipetuto = key;
        }
    }

    const alert = document.querySelector('.alert');
    console.log(alert)
    //Viene tolto d-none così diviene visibile e aggiunto flex così risponde ai cambiamenti in page
    alert.classList.remove('d-none');
    alert.classList.add('d-flex');
    //Il primo elemento che viene scritto nella lista è quello che sarà confrontato con gli altri dopo
    //Nel primo span metto quindi array[0] ossia item
    alert.querySelector('span:first-child').innerText = nomeRipetuto;
    //Nel secondo il counter
    alert.querySelector('span:last-child').innerText = contatoreParola;

    console.log(`${nomeRipetuto} è stato trovato : ${contatoreParola} volte`);
});