function trataDato(a,b){
    let dato = Number(document.getElementById("dato").value);
    //typeof dato
    let suma = a+b;

    document.getElementById("salida").innerHTML = dato + 2;
    console.log(suma);
    //Si no le asigno nada a una variable, la detecta como objeto on el typeof
    //let x = null
    return suma;
}

let x = trataDato;

console.log(x);

console.log(x(1,4));

let y = trataDato(1,5);

console.log(y);

document.getElementById("a").addEventListener("mouseover", ()=>{
    alert("ok..")
})