class Persona {
    constructor (nombre, apellido, estatura){
        this.nombre = nombre
        this.apellido = apellido
        this.estatura = estatura
    }

    saludar () {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    tamano () {
        return this.estatura > 1.61
    }
}

class Desarrolladora extends Persona {
    constructor (nombre,apellido, estatura) {
        super(nombre,apellido,estatura)
    }
    saludar () {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolladora`)
    }
}



// var andrea = new Persona('Andrea','Mendi',1.65)
// var delfi = new Persona('Delfina','Pignatiello',1.60)
// var atzin = new Persona('Atzin','Aquino',1.61)
