var keyElement = document.querySelector('.box-key .key-press__box-body');
var locaElement = document.querySelector('.box-location .key-press__box-body');
var whichElement = document.querySelector('.box-which .key-press__box-body');
var codeElement = document.querySelector('.box-code .key-press__box-body');
var circleElement = document.querySelector('.key-press__circle');


document.addEventListener('keydown',function(e){
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.key-press').style.display = 'block';
    keyElement.innerText = e.key;
    locaElement.innerText = e.location;
    whichElement.innerText = e.which;
    codeElement.innerText = e.code;
    circleElement.innerText = e.which;
})