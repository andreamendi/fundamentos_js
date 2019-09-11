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


function imprimirNombreMayus({ nombre }){
    console.log(nombre.toUpperCase());
}

imprimirNombreMayus(andrea);
imprimirNombreMayus(delfi);
imprimirNombreMayus({nombre: 'Almudena'});
