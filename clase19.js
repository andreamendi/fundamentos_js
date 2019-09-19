var andrea = {
    nombre: 'Andrea',
    apellido: 'Mendi',
    estatura: 1.66
}

var ake = {
    nombre: 'Aketzali',
    apellido: 'Gutiérrez',
    estatura: 1.62
}

var almu = {
    nombre: 'Almudena',
    apellido: 'Chávez',
    estatura: 1.50
}

var atzin = {
    nombre: 'Atzin',
    apellido: 'Aquino',
    estatura: 1.60
}

var eileen = {
    nombre: 'Eileen',
    apellido: 'McFly',
    estatura: 1.68
}

var domi = {
    nombre: 'Dominic',
    apellido: 'Padovan',
    estatura: 1.52
}

var personas = [andrea, ake, almu, atzin, eileen, domi]
console.log(personas)

//persona.estatura =  persona.estatura * 100 -> edita el original
//los (), hacen que ya no sea necesario poner el return

const pasarEstaturaACms = persona => ({
    ...persona,
    estatura: persona.estatura * 100
})

//map, nos devuelve un nuevo array 
var personasCms = personas.map(pasarEstaturaACms)
console.log(personasCms)

