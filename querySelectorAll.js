var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var oddListItems = document.querySelectorAll('li:nth-child(odd)');
var evenListItems = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<oddListItems.length && i<evenListItems.length; i++){
    oddListItems[i].style.backgroundColor = '#f4f4f4';
    evenListItems[i].style.backgroundColor = '#ccc';
}