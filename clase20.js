var andrea = {
    nombre: 'Andrea',
    apellido: 'Mendi',
    estatura: 1.66,
    cantidadDeLibros: 28
}

var ake = {
    nombre: 'Aketzali',
    apellido: 'Gutiérrez',
    estatura: 1.62,
    cantidadDeLibros: 40
}

var almu = {
    nombre: 'Almudena',
    apellido: 'Chávez',
    estatura: 1.50,
    cantidadDeLibros: 10
}

var atzin = {
    nombre: 'Atzin',
    apellido: 'Aquino',
    estatura: 1.60,
    cantidadDeLibros: 29
}

var eileen = {
    nombre: 'Eileen',
    apellido: 'McFly',
    estatura: 1.68,
    cantidadDeLibros: 17
}

var domi = {
    nombre: 'Dominic',
    apellido: 'Padovan',
    estatura: 1.52,
    cantidadDeLibros: 22
}

var personas = [andrea, ake, almu, atzin, eileen, domi]

// var acum = 0
// for (var i = 0; i < personas.length; i++){
//     acum += personas[i].cantidadDeLibros
// }
// console.log(`en total todos tienen ${acum} de libros`)

const reducer = (acum, persona) => acum + persona.cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`en total todos tienen ${totalDeLibros} de libros`)