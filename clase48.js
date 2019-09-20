const andrea = {
    nombre: 'Andrea',
    apellido: 'Mendi'
}

const atzin = {
    nombre: 'Atzin',
    apellido: 'Aquino'
}

function saludar(saludo = 'Hola'){ //es default
    console.log(`${saludo}, soy ${this.nombre}`)
}

//camibia el contexto (this) 

const saludarAndrea = saludar.bind(andrea)//devuelve una nueva función atando el parametro que le pasamos al this de esa función
const saludarAtzin = saludar.bind(atzin)


setTimeout(saludar.bind(andrea, 'Hola che'), 1000) //nueva función con andrea como contexto

//Es como el bind, pero se autollama y es muy rápida
saludar.call(andrea, 'Hola che')


saludar.apply(andrea, ['hola che'])