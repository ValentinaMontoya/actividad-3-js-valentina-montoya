console.log('funciones')

console.warn('Escribiendo una función tradicional')

function saludar(){
    console.log('Hola Mundo')
}

saludar()
saludar()

console.log(saludar)

console.warn('Escribiendo una función tradicional en un const')

const saludar1 = function (){
    console.log('Hola Mundo desde otra función')
}
saludar1()

console.warn('Escribiendo una función de flecha')

const saludar2 = () =>{
    console.log('Saludando desde una función flecha')
}

saludar2()

console.warn('Escribiendo una función de flacha con parámetros')

const saludar3 = (nombre) => {
    console.log(`Hola: ${nombre}`)
}
saludar3('Kim TaeHyung')
saludar3('Kim SeokJin')

console.warn('Escribiendo una función de flecha con retorno')

const saludar4 = (nombre) => {
    return `Hola ${nombre}`
}
let saludando = saludar4('Kim TaeHyung')
console.log(saludando)

console.warn('Escribiendo una función de flecha con retorno abreviada')

const saludar5 = (nombre) => {
    return `Hola ${nombre}`
}
let saludando2 = saludar5('Jeon Jungkook')
console.log(saludando)

console.warn('Función con Math.random')

/* function rand() {
    return Math.random()
}  */

const rand = () => Math.random()

console.log(rand())


