// Evento input
const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('return down')
}

input.onkeyup = function() {
    console.log('return up')
}

input.onkeypress = function() {
    console.log('return press')
}

// ----------------------------------------------------------------

// Eventos click

function print() {
    console.log('print')
}

const h1 = document.querySelector('h1');

//h1.addEventListener('click', print)

h1.onclick = print
