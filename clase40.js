//clauser recuerda el estado de las cosas cuando fue invocada

function crearSaludo(finalDeFrase){
    return function (nombre){
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('wey')
const saludoColombiano = crearSaludo('parcero')

saludoArgentino('Sacha')
saludoMexicano('Mendi')
saludoColombiano('Freddy')