var rand = Math.ceil(Math.random()*10);
var turns = 0;
var guess;

document.getElementById('button').addEventListener('click', guess);

function guess() {
    guess = document.getElementById('textbox').value;
}