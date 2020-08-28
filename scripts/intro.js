// variables tipo String
let nombre = "Nelly";
const email = "hola@mail.com";

// variables tipo numericos
let edad = 34;

// variables tipo Boolean
let licencia = true 
let casada = false

// variables tipo Array
let peliculas = ["chucky", "ace ventura", "la espada en la piedra", "superman"]

// variables tipo objeto
let auto = {color: "morado", tipo: "sedan", transmision: "manual"}


let mensaje = "Hola, yo soy Nelly"
// variables tipo funciones (arrow function)
const saludar = (mesg) => {
    console.log(mesg) 
}


console.log("mi nombre es: "+ nombre)
console.log("mi correo es: "+ email)
console.log("mi edad es: "+ edad)
console.log("tengo licencia: "+licencia)
console.log("estoy casada: "+casada)
console.log("mi pelicula favorita es: "+ peliculas[0])
console.log("mi auto es de color: "+auto["color"])
saludar(peliculas)






