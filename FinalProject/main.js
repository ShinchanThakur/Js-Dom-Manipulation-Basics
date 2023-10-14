var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e) {
    e.preventDefault();

    var li = document.createElement('li');
    li.className = 'list-group-item';

    var newItem = document.getElementById('item').value;
    var newItemTextNode = document.createTextNode(newItem);
    li.appendChild(newItemTextNode);

    var deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    var deleteButtonTextNode = document.createTextNode('X');
    deleteButton.appendChild(deleteButtonTextNode);
    li.appendChild(deleteButton);

    itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}