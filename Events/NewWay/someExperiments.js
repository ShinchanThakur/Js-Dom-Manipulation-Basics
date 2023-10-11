var box = document.getElementById('box');
box.addEventListener('mousemove', runEvent);

var output = document.getElementById('output');

function runEvent(e) {
    console.log('EVENT TYPE: ' + e.type);
    output.innerHTML = '<h3>MouseX: ' + e.offsetY + '</hr3><h3>MouseY: ' + e.offsetY + '</h3>';
}
