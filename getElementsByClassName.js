var items = document.getElementsByClassName('list-group-item');
console.log(items);     //HTMLCollection
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//Gives error
//items.style.backgroundColor = 'yellow';

for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}