var newDiv = document.createElement('div');
newDiv.className = 'myClass';
newDiv.id = 'myId';
newDiv.setAttribute('title', 'Hello Div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
console.log(newDiv);