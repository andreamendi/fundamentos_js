var andrea= {
    nombre: 'Andrea',
    apellido: 'Mendi',
    edad: 20
}
//es mejor poner hasta arriba las variables, para que sean visibles
function esMayorDeEdad(persona) {
    var mensaje
    if(persona.edad > 18){
        mensaje = 'Es mayor de edad'
    } else {
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}

esMayorDeEdad(andrea)


//Let, es usable solo en el bloque de código donde se está usando
//var, es más usable
//const, no se puede re asignar

//Es mejor usar let, para que las variables se usen solo ahí.