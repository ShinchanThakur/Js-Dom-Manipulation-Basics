// EXAMINE THE DOCUMENT OBJECT 
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = "Changed Title";
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
document.all[10].textContent = "Very wrong way of selecting an element";
console.log(document.forms);
console.log(document.links);
console.log(document.images);