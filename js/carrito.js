'use strict';

// Variables definition
const percent = 0.1
let price1 = 3500 //Servicio 1
let price2 = 5000 //Servicio 2
let price3 = 5000 //Servicio 3
let contador1 = 0
let contador2 = 0
let contador3 = 0
let total = 0


alert ("Los productos disponibles para adquirir son los siguientes: " +"\nServicio 1 " +"$" + price1 +
"\nServicio 2 " +"$"+ price2 +
"\nServicio 3 " +"$"+ price3
)

let choice = prompt("Ingrese el servicio que quiere adquirir")

do{

    switch(choice){
        case "1":
            alert("Eligio 1");
            contador1 = contador1 + 1
            console.log (contador1)
            break;

        case "2":
            alert("Eligio 2");
            contador2 = contador2 + 1
            console.log (contador2)
            break;
        case "3":
            alert("Eligio 3");
            contador3 = contador3 + 1
            console.log (contador3)
            break;

    }
    choice = prompt("Ingrese el servicio que quiere adquirir");
    console.log(choice);

    //Si el parseo no resulta un número se interrumpe el bucle.
}while(parseInt(choice));

calcularTotal()

function calcularTotal() {
    total = (price1*contador1) + (price2*contador2) + (price3*contador3)
    if (total > 10000) {
        alert(" Se aplica un descuento por que el total es mayor a $10000")
        total = total - (total * percent)
        alert("El Total a cobrar es: " + total)
    }
    else
    {
        alert ("El Total a cobrar es: " +total + " No hay descuentos por no superar los $10000")
    }
console.log(total)
}