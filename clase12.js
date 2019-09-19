var andrea = { 
    nombre: 'Andrea',
    edad: 20
}

var emma = { 
    nombre: 'Emma',
    edad: 1
}

const MAYORIA_DE_EDAD= 18;

// const esMayorDeEdad = function (persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD //desestructuralizada


function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona){
    if (!esMayorDeEdad(persona)){
        console.log('Acceso DENEGADO')
    } 
}



const esMenorDeEdad = persona => !esMayorDeEdad(persona)

function esMenor(persona){
    if (esMenorDeEdad(persona)){
        console.log('Acceso Permitido')
    } 
}