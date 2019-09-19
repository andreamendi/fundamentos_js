//Lo que se hereda son los métodos

function heredaDe(protoChild, protoParent){
    var fn = function () {}
    fn.prototype = protoParent.prototype
    protoChild.prototype = new fn
    protoChild.prototype.constructor = protoChild
}

function Persona(nombre, apellido, estatura){
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
}
//Las funciones del prototipo, deben de ir juntas
Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.tamano = function () { 
    return this.estatura > 1.61
}

function Desarrolladora(nombre,apellido,idioma,estatura) {
    this.name = nombre
    this.lastname = apellido
    this.idioma = idioma
    this.estatura = estatura
}

heredaDe(Desarrolladora, Persona)

Desarrolladora.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolladora`)
}


// var andrea = new Persona('Andrea','Mendi',1.65)
// var delfi = new Persona('Delfina','Pignatiello',1.60)
// var atzin = new Persona('Atzin','Aquino',1.61)
