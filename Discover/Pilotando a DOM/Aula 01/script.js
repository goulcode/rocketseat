// getElementById()

const elementId = document.getElementById('blog-title')
console.log(elementId)

// getElementsByClassName()

const elementClass = document.getElementsByClassName('one')
console.log(elementClass)

// querySelector()

const elementQuery = document.querySelector('[src]')
console.log(elementQuery)

// querySelectorAll() -> Consegue fazer um Nodelist

const elementQueryAll = document.querySelectorAll('one')
console.log(elementQueryAll)

elementQueryAll.forEach(el => console.log(el))