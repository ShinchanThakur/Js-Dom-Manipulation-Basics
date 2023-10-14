var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

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

function filterItems(e) {
    var filterText = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    var itemArray = Array.from(items);
    itemArray.forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(filterText) != -1)
            item.style.display = 'block';
        else
            item.style.display = 'none';
    });
}