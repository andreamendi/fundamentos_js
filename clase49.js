//punto y coma


//totalmente inecesarios
//las llaves, indican un bloque de código

alert('hola');
var nombre
var apellido = 'mendi'
const saludarAAndrea = function() {}


//si o si, es necesaria la ;
console.log('hola mi nombre en andrea')
;[1,2,3,4].forEach(n =>  console.log(n * 2))
//al empezar una lína con un arrya, antes debe de ir un punto y coma

console.log('hola mi nombre en A. Mendi');
`${nombre} es una desarrolladora`


// Así no corre
// function calcularDoble(numero) {
//     return 
//     { 
//         original: numero, dopble: numero * 2
//     }
// }



//el return, debe de estar en la misma línea.
function calcularDoble(numero) {
    return{ 
        original: numero, dopble: numero * 2
    }
}