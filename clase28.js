const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts =  { crossDomain: true }

//solo se ejecuta si el request es exitóso
// $.get(LUKE_URL, opts, function (luke){
//     console.log(`hola yo soy ${luke.name}`)
// })


const onPeopleResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)
}

$.get(LUKE_URL, opts, onPeopleResponse)
