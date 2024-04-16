const input = document.querySelector('input');
const array = [];

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter') return;
    if (input.value == '')     return;

    array.push(input.value);

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = input.value;
    document.querySelector('ul').append(li);

    let counter = 0;
    let max     = 1;
    let item    = array[0];
    const elems = [];

    for (let i = 0; i < array.length; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter) {
                    max  = counter;
                    item = array[i];
                }
            }
        }
        counter = 0;
    }

    const alert = document.getElementsByClassName('alert')[0];

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`);
});