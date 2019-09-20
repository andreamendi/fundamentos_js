const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts =  { crossDomain: true }


const onPeopleResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)
}


function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}
//el asincronismo no sabemos en que orden nos va a llegar.
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)