function cadenaCaract() {
    let texto = document.getElementById("texto").value;
    console.log(texto.length);
    //Posicion inicial hasta posicion final
    console.log(texto.slice(3,7));
    //Posicion incial y longitud
    console.log(texto.substr(3,7));
    //Remplaza texto
    console.log(texto.replace("abc","cba"));
    console.log(texto.replaceAll("abc","cba"));
    //Pone el texto en mayusculas
    console.log(texto.toUpperCase());
    //Pone el texto en minusculas
    console.log(texto.toLowerCase());
    //Quita espacios en blanco
    console.log(texto.trim());
    //Quita espacios en blanco de alante
    console.log(texto.trimStart());
    //Quita espacios en blanco de atras
    console.log(texto.trimEnd());
    //Si hay menos caracteres del numero indicado, añade el segundo parametro al principio hasta llegar a ese numero
    console.log(texto.padStart(5,"-"));
    //Si hay menos caracteres del numero indicado, añade el segundo parametro al final hasta llegar a ese numero
    console.log(texto.padEnd(5,"-"));
    //Extrae un caracter del string en la posicion indicada
    console.log(texto.charAt(1)); //Si no hay nada devuelve una cadena vacia
    console.log(texto[1]);  //Si no hay nada devuelve "undefined"
    //Extrae el ascii un caracter del string en la posicion indicada
    console.log(texto.charCodeAt(1));
    //Divide el texto por el caracter indicado y lo guarda en un array
    console.log(texto.split(","));
    //Dice la posicion de lo que buscas
    console.log(texto.indexOf("c",0));
    //Cuenta las coincidencias en el texto
    console.log(texto.match(/a/g));
    console.log(texto.matchAll("a"));
    //Devuelve true o false
    console.log(texto.startsWith("a"));
    console.log(texto.includes("a"));
    //Interpolacion
    console.log(`El texto es: ${texto}`);
}