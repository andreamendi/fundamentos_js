// var andrea = {
//     nombre: 'Andrea',
//     apellido: 'Mendi',
//     edad: 20,
//     ingenira: true,
//     cocinera:false,
//     nadadora: true,
//     dj: false
// }

// function imprimirProfesion(persona) {
//     console.log(`${persona.nombre} es:`)
//     if (persona.ingenira === true) {
//         console.log('Es ingeniera');
//     } if (persona.cocinera === true) {
//         console.log('Es cocinera');
//     }  if (persona.nadadora === true) {
//         console.log('Es nadadora');
//     }  if (persona.dj === true) {
//         console.log('Es dj');
//     } else {
//         console.log('y ya.');
//     }
// } 

// imprimirProfesion(andrea);
var alan = { 
    nombre: 'Alan',
    edad: -3
}


function mayorDeEdad(persona){
    console.log(`${persona.nombre} tiene ${persona.edad} y `)
    if (persona.edad >= 18 && persona.edad <= 115){
        console.log('eres mayor de edad')
      
    } if(persona.edad < 18 && persona.edad >= 0){
        console.log('aun no eres mayor de edad')

    } 
    if (persona.edad <0){
        console.log('o no has nacido, o estás jugando')
    }
    if (persona.edad > 115){
        console.log('Eres una momia')
    } 
}

mayorDeEdad(alan);