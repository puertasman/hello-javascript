/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 3 + 2
let resta = 5 -1
let mult = 3 * 2
let div = 9 / 3

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let numero = 5
numero += 2
numero -= 1
numero *= 3
numero /= 2
numero **= 3
numero %= 3

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(3 > 1)
console.log(19 < 20)
console.log(9 == 9)
console.log(8 != 10)
console.log(3 <= 7)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(3 < 1)
console.log(19 > 20)
console.log(9 != 9)
console.log(8 == 10)
console.log(3 >= 7)

// 5. Utiliza el operador lógico and
console.log(true && false)
console.log(true && true)

// 6. Utiliza el operador lógico or
console.log(true || false)
console.log(false || false)

// 7. Combina ambos operadores lógicos
console.log(3 > 1 || 4 == 4 && 3 < 19)
// 8. Añade alguna negación
console.log(!true)

// 9. Utiliza el operador ternario
let ternario = 3
console.log(ternario>2?3:1)

// 10. Combina operadores aritméticos, de comparáción y lógicas
3 > 7 || (2 >= 1+1 && true) 