var andrea = {
    nombre: 'Andrea',
    apellido: 'Mendi',
    edad: 20,
    peso: 73
}

console.log(`Al inicio del año ${andrea.nombre} pesa ${andrea.peso}`)

// function aumentaDePeso(persona){
//     return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANNO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO;



//() la condición, el incremento
for (var i = 1; i <= DIAS_DEL_ANNO; i++) {
    //Código que se repita cada vez
    var random = Math.random()

    if (random < 0.25){
        aumentarDePeso(andrea)
    } else if (random < 0.5) {
        bajarDePeso(andrea)
    }
}



console.log(`Al fin del año ${andrea.nombre} pesa ${andrea.peso.toFixed(2)}`)
