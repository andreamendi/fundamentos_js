//(variable global) 
// var nombre = 'Andrea' Alcance global window.nombre

// function imprimirNombreMayus(){
//     nombre = nombre.toUpperCase()
//     console.log(nombre);
// }

// imprimirNombreMayus();


//------------------
//(variable local, su scope es solo en la función

var nombre = 'Andrea' 

function imprimirNombreMayus(n){
    n = n.toUpperCase()
    console.log(n);
}

imprimirNombreMayus(nombre);