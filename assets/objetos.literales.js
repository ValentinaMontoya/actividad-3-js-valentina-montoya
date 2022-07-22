console.log('objetos literales')

console.warn('Creando un objeto literal')

const personajes = {
    nombre: 'Tony Skark',
    codeName: 'Ironman',
    estaVivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.7,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu California',
    },
    'ultima-pelicula': 'End Game'
}

console.warn('Accediendo al objeto y sus propiedades')

console.log(personajes)
console.log(`nombre: ${personajes.nombre}`)
console.log(`apodo: ${personajes['codeName']}`)
console.log(`edad: ${personajes.edad}`)
console.log(`latitud: ${personajes.coords.lag}`)

let x = 'está vivo'
console.log(`estaVivo: ${personajes[x]}`)
console.log(`última película: ${personajes['ultima-pelicula']}`)

console.warn('Borrando una propiedad del objeto')

delete personajes.edad
console.log({ personajes })

console.warn('Creando una nueva propiedad del objeto')
personajes.casado = false
console.log({ personajes })

console.log(`Cantidad de trajes: ${personajes.trajes}`)
console.log(`Tercer traje: ${personajes.trajes[personajes.trajes.length -1]}`)
