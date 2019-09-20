const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts =  { crossDomain: true }

function obtenerPersonaje(id){
    return new Promise ((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function (data){
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Ocurrió un error con el personaje ${id}`)
}


obtenerPersonaje(2)
    .then(function(personaje){ˆ
        console.log(`El personaje 2 y es ${personaje.name}`)
    })
    .catch(onError)


