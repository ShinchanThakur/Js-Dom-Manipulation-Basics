var newDiv = document.createElement('div');
newDiv.className = 'myClass';
newDiv.id = 'myId';
newDiv.setAttribute('title', 'Hello Div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
newDiv.style.fontSize = '30px';
console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);