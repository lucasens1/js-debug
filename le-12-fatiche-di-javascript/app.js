const input = document.querySelector('input');
console.log(input)
//Inizializzo l'array
const array = [];


//All'input viene aggiunto l'EventListener
input.addEventListener('keypress', function(event) {

    /*
        L'event in questo caso controlla nel primo caso se quello che inserisco
        è diverso dal valore del tasto Enter ossia 'Enter', e se l'input -> valure.lenght è 0
        esce dall'EventListener
    */
    if (event.code != 'Enter')    return;
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
    let counter = 0;
    //Item viene inizializzato alla prima posizione dell'array 
    let item = array[0];
    //Max?
    let max = 1;
    //Oggetto e non un array
    const elems = {};

    //Nell'array aggiungo .length per evitare un ciclo infinito il ciclo in questione deve essere inizializzato solo una volta che la length dell'array è diversa da zero
    if(array.length != 0){
        for (let i = 0 ; i < array.length; i++) {
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
            for (let j = i; j < array.length; j++) {
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
            counter = 0;
        }
    }
    
    console.log(elems)

    const alert = document.querySelector('.alert');
    console.log(alert)
    //Viene tolto d-none così diviene visibile e aggiunto flex così risponde ai cambiamenti in page
    alert.classList.remove('d-none');
    alert.classList.add('d-flex');
    //Il primo elemento che viene scritto nella lista è quello che sarà confrontato con gli altri dopo
    //Nel primo span metto quindi array[0] ossia item
    alert.querySelector('span:first-child').innerText = item;
    //Nel secondo il counter
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} è stato trovato : ${max} volte`);
});