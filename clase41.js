const andrea = {
    nombre: 'Andrea',
    apellido: 'mendi',
    edad: 20
}
// const cumple = persona => persona.edad++

const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})