// anonymous function
document.getElementById('button')
.addEventListener('click', function() {
    console.log(123);
});

// named function
document.getElementById('button2')
.addEventListener('click', buttonClick);

function buttonClick() {
    console.log('Button Clicked')
}