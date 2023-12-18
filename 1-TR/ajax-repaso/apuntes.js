//////////////////////////////////////////////
//                 ARRAYS                   //
//////////////////////////////////////////////

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// result = fruits.length
// Devuelve el tamaño del array  =>  4

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// result = fruits.toString()
// Devuelve el array como string
// result == "Banana, Orange, Apple, Mango"

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// result = fruits.join(" - ")
// Devuelve el array como string especificando el separador
// result == "Banana - Orange - Apple - Mango"

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// result = fruits.pop()
// Elimina el ultimo elemento de la lista y lo devuelve
// result == "Mango"

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// result = fruits.push("Kiwi")
// Añade un nuevo elemento al final array, devuelve el nuevo tamaño del array
// fruits == ["Banana","Orange","Apple","Mango","Kiwi"]
// result == 5

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// result = fruits.shift()
// Elimina el primer elemento de la lista y lo devuelve. Mueve todos los elementos una posicion atras
// result == "Banana"

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// result == fruits.unshift("Lemon")
// Añade un nuevo elemento al principio del array, devuelve el nuevo tamaño del array
// fruits == ["Lemon","Banana", "Orange", "Apple", "Mango"];
// result == 5

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myDog = ["Tobi"]
// const myFamily= myGirls.concat(myBoys,myDog,"Artem");
// Concatena los arrays en uno nuevo, se le pueden pasar tantos arrays como se quiera como parametro y también strings
// myFamily== ["Cecilie","Lone","Emil","Tobias","Linus","Tobi","Artem"]

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// result = fruits.splice(2, 1, "Lemon", "Kiwi");
// El primer parámetro indica dónde se van a añadir los elementos
// El segundo parámetro indica cuantos elementos se van a eliminar
// El resto de parámetros son los elementos a añadir
// Devuelve un array con los elementos eliminados
// Si no se pasan elementos se puede usar para borrar elementos
// result == "Apple"

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// Devuelve un cacho del array como otro array
// citrus == ["Orange", "Lemon", "Apple", "Mango"]
// Se puede limitar el rango, excluye el último
// const citrus = fruits.slice(1,3);
// citrus == ["Orange", "Lemon"]

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits == ["Apple","Banana","Mango","Orange"]
// fruits.reverse();
// fruits == ["Orange","Mango","Banana","Apple"]


//////////////////////////////////////////////
//                  SETS                    //
//////////////////////////////////////////////

// CREACION DE SETS
// const letters = new Set(["a","b","c"]);
// const letters = new Set();

// AÑADIR VALORES AL SET
// const letters = new Set();
// letters.add("a")
// letters.add("b")
// letters.add("c")
// letters == ["a","b","c"]
// Solo guarda 1 igual; si añadimos dos "a", sólo se guarda la primera

// RECORRER EL SET
// letters.forEach(function(value){
//      console.log(value)
// })
// --- LOG ---
//      a
//      b
//      c

// for ( letter of letters.values() ){
//      console.log(value)
// })
// --- LOG ---
//      a
//      b
//      c


//////////////////////////////////////////////
//                  MAPS                    //
//////////////////////////////////////////////

// CREACION DE MAPS
// const fruits = new Map([["apples", 500], ["bananas", 300], ["oranges", 200]]);
// const fruits = new Map();

// AÑADIR VALORES AL MAP
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);
// fuits == [["apples", 500], ["bananas", 300], ["oranges", 200]]
// Set se puede usar para añadir nuevos elementos o para editar los valores de un elemento ya existente

// ACCEDER A VALORES DEL MAP
// apples = fruits.get("apples");
// apples == 500

// AVERIGUAR LA CANTIDAD DE VALORES DEL MAP
// size = fruits.size;
// size == 3

// BORRAR ELEMENTOS DEL MAP
// fruits.delete("apples")
// fuits == [["bananas", 300], ["oranges", 200]]

// COMPROBAR EXISTENCIA DE UN ELEMENTO
// hasApple = fruits.has("apples")
// hasApple == true

// RECORRER MAP
// fruits.forEach (function(value, key) {
//     console.log( key, value );
// })
// --- LOG ---
//      apples 500
//      bananas 300
//      oranges 200

// for (const x of fruits.entries()) {
//   console.log(x);
// }
// --- LOG ---
//      apples, 500
//      bananas, 300
//      oranges, 200


//////////////////////////////////////////////
//                 STRINGS                  //
//////////////////////////////////////////////

// VARIABLE DE EJEMPLO
// texto = "abc abc"

// MUESTRA LONGITUD DEL STRING
// length = texto.length;
// length == 7

// DEVUELVE UN CACHO DEL STRING DESDE UNA POSICION INICIAL HASTA POSICION FINAL
// slice = texto.slice(3, 5);
// slice == " a"

// DEVUELVE UN CACHO DEL STRING DESDE UNA POSICION INICIAL HASTA POSICION FINAL
// substr = texto.substr(3, 5);u
// substr == " a"

// REMPLAZA TEXTO
// replacement = texto.replace("abc", "cba");
// replacement == "cba cba"

// replacement = texto.replaceAll("abc", "cba");
// replacement == "cba cba"

//Pone el texto en mayusculas
// upper = texto.toUpperCase();
// upper == "ABC ABC"

//Pone el texto en minusculas
// texto = "ABC ABC"
// lower = texto.toLowerCase();
// lower == "abc abc"

//Quita espacios en blanco
// texto = "  ABC ABC  "
// trim = texto.trim();
// trim == "ABC ABC"

//Quita espacios en blanco de alante
// texto = "  ABC ABC  "
// trim = texto.trimStart();
// trim == "ABC ABC  "

//Quita espacios en blanco de atras
// texto = "  ABC ABC  "
// trim = texto.trimEnd();
// trim == "  ABC ABC"

//Si hay menos caracteres del numero indicado, añade el segundo parametro al principio hasta llegar a ese numero
// texto = "ABC"
// pad = texto.padStart(5, "-");
// pad == "--ABC"

//Si hay menos caracteres del numero indicado, añade el segundo parametro al final hasta llegar a ese numero
// texto = "ABC"
// pad = texto.padEnd(5, "-");
// pad == "ABC--"

//Extrae un caracter del string en la posicion indicada
// character = texto.charAt(1); //Si no hay nada devuelve una cadena vacia
// character == "a"
// console.log(texto[1]);  //Si no hay nada devuelve "undefined"
// character == "a"

//Extrae el ascii un caracter del string en la posicion indicada
// ascii = texto.charCodeAt(1);
// ascii == 97

//Divide el texto por el caracter indicado y lo guarda en un array
// texto = "abc,abc"
// split = texto.split(",");
// split == ["abc","abc"]

//Dice la primera posicion de lo que buscas a partir de la posición que se pase
// index = texto.indexOf("c", 0);
// index == 2
// index = texto.indexOf("c", 4);
// index == 6

//Cuenta las coincidencias en el texto
// console.log(texto.match(/a/g)); // Devuelve un array
// match == ["a","a"]

//Devuelve true o false
// start = texto.startsWith("a",0); // Si empieza por un string a partir del indice de caracter que se le indique
// true
// start = texto.startsWith("a",6); // Si empieza por un string a partir del indice de caracter que se le indique
// false
// includes = texto.includes("abc",0); // Si contiene un string a partir del indice de caracter que se le indique
// true
// includes = texto.includes("abc",7); // Si contiene un string a partir del indice de caracter que se le indique
// false

//Interpolacion
// phrase = `El texto es: ${texto}`;
// phrase == "El texto es: abc abc"