var andrea = {
    nombre: 'Andrea',
    apellido: 'Mendi',
    edad: 20
}
var delfi = {
    nombre: 'Delfi',
    apellido: 'Pignatello',
    edad: 19
}


function imprimirNombreMayus(persona){
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase());
}

// imprimirNombreMayus(andrea);
// imprimirNombreMayus(delfi);


function imprimirNombreyEdad(human){
    var { nombre } = human
    var { edad } = human
    console.log(`${nombre} tiene ${edad} años`)
}

imprimirNombreyEdad(andrea)
imprimirNombreyEdad(delfi)


function cumpleanos(persona){
    return {
        ... persona, 
        edad: persona.edad +1,
        lugar: 'CDMX'
    }    
}