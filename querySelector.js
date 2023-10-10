var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');    //selects first input element
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = "Send";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';