var itemList = document.querySelector('#items');

// childNodes
console.log(itemList.childNodes);
// Issue -> It also considers newLine etc as child element
// Therefore it is not preferable

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
console.log(itemList.firstChild);
// Issue -> It also considers newLine etc as child element
// Therefore it is not preferable

