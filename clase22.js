function Persona(nombre, apellido, estatura){
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
}
//Las funciones del prototipo, deben de ir juntas
Persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.tamano = () => this.estatura > 1.61


//Aquí así no corre el código bien, con las arrow function. Se arregla en la clase 23

var andrea = new Persona('Andrea','Mendi',1.65)
andrea.saludar()
andrea.tamano()

var delfi = new Persona('Delfina','Pignatiello',1.60)
var atzin = new Persona('Atzin','Aquino',1.61)
