var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    var li = document.createElement('li');
    li.className = 'list-group-item';

    var newItem = document.getElementById('item').value;
    var textNode = document.createTextNode(newItem);
    li.appendChild(textNode);
}