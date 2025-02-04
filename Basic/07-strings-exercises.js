/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/
let cadena1 = "primera cadena"
let cadena2 = "yo soy la segunda cadena"
// 1. Concatena dos cadenas de texto
console.log(cadena1 + cadena2)

// 2. Muestra la longitud de una cadena de texto
console.log(cadena1.length)

// 3. Muestra el primer y último carácter de un string
console.log(cadena1[0])
console.log(cadena1[cadena1.length-1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena1.toUpperCase())
console.log(cadena1.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let texto = `en varias
líneas sin
que pase
nada`
console.log(texto)

// 6. Interpola el valor de una variable en un string
let nombre = 'Enrique'
console.log(`Hola, ${nombre}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(texto.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(texto.includes("nada"))

// 9. Comprueba si dos strings son iguales
console.log(cadena1 == cadena2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena1.length == cadena2.length)