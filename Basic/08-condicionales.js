// if - else - elseif

let age = 44

if (age == 44){
    console.log("la edad es 44")
}


// else

if (age == 44){
    console.log("la edad es 44")
}
else{
    console.log("la edad no es 44")
}

// if elseif

if (age == 44){
    console.log("la edad es 44")
}
else if (age < 37){
    console.log("no es mayor de edad")
}
else{
    console.log("es mayor de edad y no tiene 44")
}

// operador ternario

const message = age == 37 ? "La edad es 37" : "La edad no es 37"

console.log(message)

// switch

let day = 0
let dayName

switch (day){
    case 0:
        dayName = "lunes"
        break
    case 1:
        dayName = "lunes"
        break
    case 2:
        dayName = "lunes"
        break
    case 3:
        dayName = "lunes"
        break
    case 4:
        dayName = "jueves"
        break
    case 5:
        dayName = "viernes"
        break
    case 6:
        dayName = "sábado"
        break
    case 7:
        dayName = "domingo"
        break
}

console.log(dayName)