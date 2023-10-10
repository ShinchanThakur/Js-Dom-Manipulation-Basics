var itemList = document.querySelector('#items');

// childNodes
console.log(itemList.childNodes);
// Issue -> It also considers newLine etc as child element
// Therefore it is not preferable