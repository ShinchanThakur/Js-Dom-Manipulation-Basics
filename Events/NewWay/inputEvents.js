var itemInput = document.querySelector('input[type="text"]');
var output = document.getElementById('output');

itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);

itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);

itemInput.addEventListener('cut', hideEverything);
itemInput.addEventListener('paste', runEvent);

itemInput.addEventListener('input', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: ' + e.type);
    console.log(e.target.value);
    output.innerHTML = '<h3>' + e.target.value + '</h3>';
}

function hideEverything(){
    document.body.style.display = 'none';
    console.log("I have hidden everything as a punishment");
}