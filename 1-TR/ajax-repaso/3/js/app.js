let email = "";
let list = false
const COURSEINPUT = document.getElementById("course");
const GRADEINPUT = document.getElementById("grade");
const SUBMITBUTTON = document.getElementById("submitButton");
const SHOWLISTBUTTON = document.getElementById("showListButton");
const DATADIV = document.getElementById("dataDiv");
const SELECT = document.getElementById("select")
const STUDENTLIST = []

function Alumno(email, name, courses){
    this.email = email;
    this.name = name;
    this.courses = courses;
    this.createList = function(){ // Genera la lista con los datos asociados al email
        if (list){
            document.getElementById("list").remove();
        }
        ul1 = document.createElement("ul");
        ul1li1 = document.createElement("li");
        ul1li1.innerHTML = this.email;
        ul1.setAttribute("id","list")
        ul1.appendChild(ul1li1);
        
        ul2 = document.createElement("ul");
        ul2li1 = document.createElement("li");
        ul2li1.innerHTML = this.name;
        ul2.appendChild(ul2li1);

        ul3 = document.createElement("ul");
        for ( let course of this.courses ){ // Crea la lista de los cursos
            ul3li1 = document.createElement("li");
            ul3li1.innerHTML = course[0]+": "+course[1];
            ul3.appendChild(ul3li1);
        }

        ul2.appendChild(ul3);
        ul1.appendChild(ul2);
        DATADIV.appendChild(ul1);
        list = true;
    }
}

SUBMITBUTTON.addEventListener("mouseenter",()=>{ // Cambia de color el fondo del boton al pasar el raton por encima
    SUBMITBUTTON.style.backgroundColor = "red";
})

SUBMITBUTTON.addEventListener("mouseleave",()=>{ // Cambia de color el fondo del boton al quitar el raton de encima
    SUBMITBUTTON.style.backgroundColor = "initial";
})

SUBMITBUTTON.addEventListener("click",()=>{ // Permite añadir un curso a un alumno existente al hacer click
    if (checkForm){
        insertData()
    }
})

SHOWLISTBUTTON.addEventListener("click",()=>{ // Crea la lista al clicar en el boton
    recoverData()
    setTimeout(() => {  drawList(); }, 1000);
})

onload = function(){ // Muestra un alert nada más cargar la página y comprueba que se introduzca una @
    while ( email == "" ){
        email = prompt("Correo Electrónico");
        if (!email.includes("@")){
            email = "";
            alert("El email debe contener una @");
        }
    }
    createSelect()
}

function checkForm(){ // Comprueba que los valores del formulario sean correctos
    let ok = true;
    let course = COURSEINPUT.value.toLowerCase();
    let grade = parseInt(GRADEINPUT.value);
    
    if (course == "" || course < "a" || course > "z"){ // Comprueba que sean letras y que no vaya vacío
        COURSEINPUT.style.backgroundColor = "red";
        alert("El campo tiene que estar rellenado sólo con letras");
        ok = false;
    }
    
    if (typeof grade != "number"){ // Comprueba que sean numeros y que no vaya vacío
        GRADEINPUT.style.backgroundColor = "red";
        alert(`La nota no puede ser ${typeof grade}`);
        ok = false;
    }

    return ok;
}

function recoverData(){ // Crea objetos Alumno con los datos provenientes de la BDD
    //Crear el objeto para conectar al servidor
    const HTTPREQUEST = new XMLHttpRequest();
    //Resolver la respuesta
    // ------Registrar la funcion que trata la respuesta del servidor------
    HTTPREQUEST.onreadystatechange = function () { // Se ejecuta cuando se completa la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) { // Si la respuesta es correcta imprime por consola la respuesta en formato json
            console.log(this.responseText);
            response = JSON.parse(this.responseText)
            STUDENTLIST.push(new Alumno(email,response[0][0],response[1]))
        } else { //La petición tiene un error, imprime el error por consola
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`);
        }
    }
    //Hacer la llamada al servidor
    // ------Peticion al servidor------
    HTTPREQUEST.open("GET", "/Projects/ajax-repaso/3/app.py?id="+SELECT.options[SELECT.selectedIndex].id, true); // Construir la peticion
    HTTPREQUEST.send(); // Ejecutar la peticion
}

function drawList(){ // Crea la lista con los cursos
    for ( let student of STUDENTLIST ){
        student.createList()
    }
}

function createSelect(){
    //Crear el objeto para conectar al servidor
    const HTTPREQUEST = new XMLHttpRequest();
    //Resolver la respuesta
    // ------Registrar la funcion que trata la respuesta del servidor------
    HTTPREQUEST.onreadystatechange = function () { // Se ejecuta cuando se completa la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) { // Si la respuesta es correcta imprime por consola la respuesta en formato json
            console.log(this.responseText);
            response = JSON.parse(this.responseText) // Traduce la respuesta del json a un formato que entienda js
            for ( value of response ){ // Crea los option del select, asignandolos el id del estudiante
                option = document.createElement("option");
                option.innerHTML = value[1];
                option.setAttribute("id",value[0]);
                SELECT.appendChild(option);
            }
        } else { //La petición tiene un error, imprime el error por consola
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`);
        }
    }
    //Hacer la llamada al servidor
    // ------Peticion al servidor------
    HTTPREQUEST.open("GET", "/Projects/ajax-repaso/3/app2.py?", true); // Construir la peticion
    HTTPREQUEST.send(); // Ejecutar la peticion
}

function insertData(){ // Inserta los valores del formulario en la BDD
    //Crear el objeto para conectar al servidor
    const HTTPREQUEST = new XMLHttpRequest();
    //Resolver la respuesta
    // ------Registrar la funcion que trata la respuesta del servidor------
    HTTPREQUEST.onreadystatechange = function () { // Se ejecuta cuando se completa la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) { // Si la respuesta es correcta imprime por consola la respuesta en formato json
            console.log(this.responseText);
        } else { //La petición tiene un error, imprime el error por consola
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`);
        }
    }
    //Hacer la llamada al servidor
    // ------Peticion al servidor------
    HTTPREQUEST.open("GET", `/Projects/ajax-repaso/3/app3.py?id=${SELECT.options[SELECT.selectedIndex].id}&course=${COURSEINPUT.value}&grade=${GRADEINPUT.value}`, true); // Construir la peticion
    HTTPREQUEST.send(); // Ejecutar la peticion
}