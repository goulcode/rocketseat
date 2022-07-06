// Manipulando conteúdo
// text content

//const elementH1 = document.querySelector('h1')

//elementH1.textContent = "Olá devs!"
//console.log(elementH1.textContent)

// ----------------------------------------------------------------

// Manipulando conteúdo
// innerText

//const elementH1 = document.querySelector('h1')

//elementH1.innerText = "Olá devs!"

// ----------------------------------------------------------------

// Manipulando conteúdo
// innerHTML

const elementH1 = document.querySelector('h1')

elementH1.innerHTML = "Olá devs<small>!!!</small>"

// ----------------------------------------------------------------

// Manipulando conteúdo
// value

const elementInput = document.querySelector('input')

elementInput.value = "outro valor"

// ----------------------------------------------------------------

// Manipulando elementos
// Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

//header.removeAttribute('id')
//header.removeAttribute('class')

