var form = document.querySelector('form');

form.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault(); // this is needed to prevent page reload
    console.log('EVENT TYPE: ' + e.type);
}