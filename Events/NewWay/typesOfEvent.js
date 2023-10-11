var button = document.getElementById('button');
button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);

var box = document.getElementById('box');
box.addEventListener('mouseenter', runEvent); // will only trigger for current element
box.addEventListener('mouseleave', runEvent);
box.addEventListener('mouseover', runEvent); // will also run for child elements
box.addEventListener('mouseout', runEvent);

function runEvent(e) {
    console.log('EVENT TYPE: ' + e.type);
}
