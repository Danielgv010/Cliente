const TABLEDIV = document.getElementById("table-div")
const INPUTNAME = document.getElementById("name")
const INPUTAGE = document.getElementById("age")
let promptCity = ""
let person_list = []
let table_exist = false

onload = function(){
    while(promptCity==""){
        promptCity = window.prompt("Ciudad: ");
    }
}

function Person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
    this.createRow = function(){
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdAge = document.createElement("td");
        let tdCity = document.createElement("td");

        tdName.innerHTML = this.name;
        tdAge.innerHTML = this.age;
        tdCity.innerHTML = this.city;
        
        tr.appendChild(tdName)
        tr.appendChild(tdAge)
        tr.appendChild(tdCity)

        return tr
    }
}

function showTable(){
    const HTTPREQUEST = new XMLHttpRequest();

    HTTPREQUEST.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
            data = JSON.parse(this.responseText)
            createTable(data);
        } else {
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`); // Imprime el error por consola
        }
    }

    HTTPREQUEST.open("GET","/Projects/ajax-repaso/2/check.py",true);
    HTTPREQUEST.send();
}

function createTable(data_list){
    person_list = [];
    if (table_exist){
        document.getElementById("table").remove()
    }

    for (let data of data_list){
        person = new Person(data[0],data[1],data[2]);
        person_list.push(person);
    }

    table = document.createElement("table");
    table.setAttribute("border", 1);
    table.setAttribute("id", "table");
    for (let person of person_list){
        table.appendChild(person.createRow())
    }

    TABLEDIV.appendChild(table)
    table_exist = true
}

function checkForm(){
    promptCity = ""
    let ok = true
    if (INPUTNAME.value == null || INPUTNAME.value == ""){
        INPUTNAME.style.background = "red"
        ok = false
    }
    if (INPUTAGE.value == null || INPUTAGE.value == ""){
        INPUTAGE.style.background = "red"
        ok = false
    }

    return ok
}

function processData(){
    const HTTPREQUEST = new XMLHttpRequest();
    HTTPREQUEST.onreadystatechange =function(){
        if (this.readyState == 4 && this.status == 200){
            showTable()
        }else{
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`); // Imprime el error por consola
        }
    }
    HTTPREQUEST.open("GET",`/Projects/ajax-repaso/2/add.py?name=${INPUTNAME.value}&age=${INPUTAGE.value}&city=${promptCity}`,true)
    HTTPREQUEST.send()
}