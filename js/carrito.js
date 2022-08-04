'use strict';

//CLASSES
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }

    mostrarProducto() {
        console.log("Nombre: " + this.nombre + "\nPrecio: " + this.precio)
    }
}

//ARRAY DEFINITION
const pedidos = []


// VARIABLES DEFINITION
let producto1 = new Producto("Hamburguesa", 400)      //Producto 1
let producto2 = new Producto("Pizza Muzzarella", 600)  //Producto 2
let total = 0
let choice = 0

//FUNCTION DEFINITION
function productSelection() {
    choice = prompt("Ingrese los productos que desea adquirir" );
    do {
        // SWITCH
        switch (choice) {
            case "1":
                alert("Eligio 1");
                pedidos.push(producto1)
                break;

            case "2":
                alert("Eligio 2");
                pedidos.push(producto2)
                break;
            default:
                alert("Elegio un producto no valido")
                break;
        }
        choice = prompt("Ingrese los productos que desea adquirir");
        console.log(choice);

        //Si el parseo no resulta un número se interrumpe el bucle.
    } while (parseInt(choice));
}

function totalCalculation() {
    for (const pedido of pedidos) {
        total = total + pedido.precio
    }
}

function showCalculation() {
    console.log("El total a abonar por los productos seleccionados es: " + total + " pesos")
}


// PROGRAM
console.log("Los productos disponibles son: " + producto1.mostrarProducto() + producto2.mostrarProducto())
productSelection()
console.log(pedidos)
totalCalculation()
showCalculation()