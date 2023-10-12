var select = document.querySelector('select');
var output = document.getElementById('output');

select.addEventListener('change', runEvent);
select.addEventListener('input', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: ' + e.type);
    output.innerHTML = '<h3>' + e.target.value + '</h3>';
}