const input = document.querySelector('input')
const button = document.querySelector('button')
const list = document.querySelector('#list')

button.addEventListener('click', function() { 
    const newItem = input.value
    input.value = '';

    const liElement = document.createElement('li');

    const deleteBtn = document.createElement('button');

    liElement.textContent = newItem;
    deleteBtn.textContent = 'X';

    liElement.appendChild(deleteBtn);
    list.appendChild(liElement);

    deleteBtn.addEventListener('click', () => {
        list.removeChild(liElement);
    });

    input.focus();
    

});