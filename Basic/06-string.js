// strings

let myName = 'Enrique'
let greeting = 'Hola, ' + myName + '!'
console.log(greeting)
console.log(typeof(greeting))

// longitud

console.log(greeting.length)


// acceso a caracteres

console.log(greeting[0])
console.log(greeting[3])
console.log(greeting[14])

// otros métodos

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf('Hola'))
console.log(greeting.indexOf('Enrique'))
console.log(greeting.indexOf('puertas'))
console.log(greeting.includes('Hola'))
console.log(greeting.slice(5, 11))
console.log(greeting.replace('Enrique', 'Puertas'))


// template literals, va con acentos invertidos

let message = `Ahora sí
puedo poner más de una línea`
console.log(message)

let email = 'puertasman@gmail.com'
console.log(`Hola, ${myName}, tu email es ${email}`)

