function Persona(nombre, apellido, estatura){
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.tamano = function () {
    if (this.estatura > 1.61) {
        console.log('Soy una persona alta')
    } else {
        console.log('Soy una persona bajita')
    }
}

// * new * -> crear nuevos objetos desde un prototipo
// Seguida del prototipo, se crea un nuevo objeto
// Y a ese objeto se le asigna el prototipo
// Se ejecuta la función del prototio, y retorna 
// el objeto que se acaba de contruir

var andrea = new Persona('Andrea','Mendi',1.65)
andrea.saludar()
andrea.tamano()

var delfi = new Persona('Delfina','Pignatiello',1.60)
// delfi.saludar()
var atzin = new Persona('Atzin','Aquino',1.61)
// atzin.saludar()