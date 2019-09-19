class Persona {
    constructor (nombre, apellido, estatura){
        this.nombre = nombre
        this.apellido = apellido
        this.estatura = estatura
    }

    saludar (fn) {
        var {nombre, apellido} = this

        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido, false)
        }
    }

    tamano () {
        return this.estatura > 1.61
    }
}
  
class Desarrolladora extends Persona {
    constructor (nombre,apellido, estatura) {
        super(nombre,apellido,estatura)
    }
    saludar (fn) {
        // var nombre = this.nombre
        // var apellido = this.apellido
        var {nombre, apellido} = this
        
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrolladora`)
        if (fn) {
            fn(nombre ,apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`¡Buen día ${nombre} ${apellido}!`)
    if (esDev){
        console.log(`¡Ey, mira!, no sabía que eras desarrollador/a`)
    }
}

var andrea = new Persona('Andrea','Mendi',1.65)
var delfi = new Persona('Delfina','Pignatiello',1.60)
var atzin = new Desarrolladora('Atzin','Aquino',1.61)

andrea.saludar()
delfi.saludar(responderSaludo)
atzin.saludar(responderSaludo)