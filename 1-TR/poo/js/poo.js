function Persona(nombre,apellidos,edad,nacionalidad){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
    this.dimeLaEdad = function(){
        return `Mi edad es ${this.edad}`
    }
}
const persona = new Persona("Federico","Garcia Lorca", 55, "Española")

persona.verDatos = function(){
    return `${this.nombre} ${this.apellidos}`
}

function verPersona(){
    //persona.datosCompletos = persona.datosCompletos.toString();
    document.getElementById("salida").innerHTML = persona.verDatos();//JSON.stringify(persona)//Object.values(persona)
}

function verEdad(){
    document.getElementById("salida").innerHTML = persona.dimeLaEdad()
}
/*
const persona = {
    nombre: "Federico",
    apellidos: "García Lorca",
    edad: 55,
    nacionalidad: "española",
    datosCompletos: function (){
        return `${this.nombre} - ${this.apellidos} - ${this.edad}`;
    }
}

persona.dimeLaEdad = function(){
    return `Mi edad es ${this.edad}`;
}
function verEdad(){
    document.getElementById("salida").innerHTML = persona.dimeLaEdad();
}

console.log(persona.nombre);

persona.apodo = "El Fede"

console.log(persona.nombre);

persona.datosCompletos();


const persona1 = {}
persona1.nombre = "Jose";
persona1.apellidos = "García";


const persona2 = new Object();
persona2.nombre = "Jose";
persona2.apellidos = "García";


for (let atributo in persona){
    console.log(persona[atributo])
}

console.log("--")

delete persona.apodo;

for (let atributo in persona){
    console.log(persona[atributo])
}

const myObj = {
    name: "John",
    age: 30,
    cars: [
        {name:"Ford",models:["Fiesta","Focus","Mustang"]},
        {name:"BMW",models:["320","X3","X5"]},
        {name:"Fiat",models:["500","Panda"]}
    ]
}

for ( let modelo of myObj.cars[0].models ){
    console.log(modelo)
}
*/