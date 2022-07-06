// Navegando pelos elementos
// parentNode parentElement

const body = document.querySelector('body')

console.log(body.parentNode)
console.log(body.parentElement)

// Navegando pelos elementos
// childNode children

const el = document.querySelector('body')

console.log(el.childNodes)
console.log(el.children)

// firstChild firstElementChild

console.log(el.firstChild)
console.log(el.firstElementChild)

// lastChild lastElementChild

console.log(el.lastChild)
console.log(el.lastElementChild)

// Navegando pelos elementos
// nextSibling nextElementSibling

const ele = document.querySelector('header')

console.log(ele.nextSibling)
console.log(ele.nextElementSibling)

// previousSibling previousElementSibling

console.log(ele.previousSibling)
console.log(ele.previousElementSibling)