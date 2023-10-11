document.getElementById('button')
.addEventListener('click', buttonClick);

function buttonClick(e) {
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
}