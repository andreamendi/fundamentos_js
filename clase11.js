var andrea = { 
    nombre: 'Andrea',
    edad: 20
}

var emma = { 
    nombre: 'Emma',
    edad: 1
}

const MAYORIA_DE_EDAD= 18;

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}


function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}