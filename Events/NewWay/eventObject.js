document.getElementById('button')
.addEventListener('click', buttonClick);

function buttonClick(e) {
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);

    var output = document.getElementById('output');
    output.innerHTML = '<h3>' + e.target.id + '<h3>';

    console.log(e.type);
    console.log(e.clientX);     // Position of click wrt Window
    console.log(e.clientY);
    console.log(e.offsetX);     // Position of click wrt the clicked element
    console.log(e.offsetY);
}