// Criando e adicionando elementos

// createElement

const div = document.createElement('div');
div.innerText = 'Olá devs!'

// ----------------------------------------------------------------

// append prepend
//const body = document.querySelector('body')

//body.append(div)
//body.prepend(div)

// ----------------------------------------------------------------

// insertBefore

const body = document.querySelector('body')
const header = document.querySelector('script')

body.insertBefore(div, header.nextElementSibling)