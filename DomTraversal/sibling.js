var itemList = document.querySelector('#items');

// nextSibling
console.log(itemList.nextSibling);
// Issue -> It also considers newLine etc as sibling element
// Therefore it is not preferable

// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);
// Issue -> It also considers newLine etc as sibling element
// Therefore it is not preferable

// previousElementSibling
console.log(itemList.previousElementSibling);
