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


var andrea = new Persona('Andrea','Mendi',1.65)
var delfi = new Persona('Delfina','Pignatiello',1.60)
var atzin = new Persona('Atzin','Aquino',1.61)
