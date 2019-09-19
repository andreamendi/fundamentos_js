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

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.estatura} mts`)
}