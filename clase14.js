var andrea = {
    nombre: 'Andrea',
    apellido: 'Mendi',
    edad: 20,
    peso: 73
}

console.log(`Al inicio del año ${andrea.nombre} pesa ${andrea.peso}`)

const PESO = 0.3;
const DIAS_DEL_ANNO = 365;

const aumentarDePeso = persona => persona.peso += PESO;
const bajarDePeso = persona => persona.peso -= PESO;
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = andrea.peso - 3
var dias = 0;

//Hasta que ya no sea lo que dice la condición, lo seguira haciendo.
while (andrea.peso > META) {
    
    if (comeMucho()) {
        aumentarDePeso(andrea)
    }
    if (realizaDeporte()) {
        bajarDePeso(andrea)
    }
    dias += 1
}



console.log(`Pasaron ${dias} para que ${andrea.nombre} adelgazo a  ${META}`)
