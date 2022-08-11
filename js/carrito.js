'use strict';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////CLASSES////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }

    mostrarProducto() {
        console.log("Nombre: " + this.nombre + "\nPrecio: " + this.precio)
    }
}

class Cliente {
    constructor(nombre, apellido, dni, mail) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.mail = mail
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////ARRAY DEFINITION///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const pedidos = []                                                                  //Array para los pedidos
const clientes = []                                                                 //Array de Clientes ingresados
let dniEncontrado = []

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////VARIABLES DEFINITION///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let producto1 = new Producto("Hamburguesa", 400)                        //Producto 1
let producto2 = new Producto("Pizza Muzzarella", 600)                   //Producto 2

clientes.push((new Cliente(                                                           //Cliente 1 de la BD
    "Martin",
    "Beltramo",
    "26959775",
    "martin_beltramo@hotmail.com")))

clientes.push((new Cliente(                                                           //Cliente 2 de la BD
    "Valeria",
    "Kratochvill",
    "31009620",
    "valerianataliak@gmail.com")))

let total = 0
let choice = 0


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////FUNCTIONS DEFINITION///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function productSelection() {                                                           //Funcion de Seleccion de productos
    choice = prompt("Ingrese los productos que desea adquirir");
    do {

        switch (choice) {                                                               //Switch de seleccion de
            case "1":                                                                   //productos disponibles
                pedidos.push(producto1)
                break;

            case "2":
                pedidos.push(producto2)
                break;
            default:
                alert("Eligio un producto no valido")
                break;
        }
        choice = prompt("Ingrese los productos que desea adquirir");
        console.log(choice);

    } while (parseInt(choice));                                                     //Si el parseo no resulta un número se interrumpe el bucle
}                                                                                   //y se toma como fin de seleccion de productos

function totalCalculation() {                                                       //Funcion para cálculo total de compras
    for (const pedido of pedidos) {
        total = total + pedido.precio
    }
}

function showCalculation() {                                                        //Funcion de muestreo total
    console.log("El total a abonar por los productos seleccionados es: " + total + " pesos")
}

function buscarCliente(cliente) {                                                   //Funcion de búsqueda de cliente ingresado


    return clientes.find((cli) => cli.dni == cliente);                              //devuelve un objeto Cliente o undefined si no está en el array
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////PROGRAM EXECUTION //////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.table(clientes)                                                              //Muestro por Consola el Array de Clientes

let clienteIngresado = parseInt(prompt("Ingrese su DNI para ingresar a la base de Clientes: ")) // Pido un DNI para buscar si ya está ingresado al sistema

console.log(clienteIngresado)                                                       //Muestro por Consola lo que ingresa el usuario para verificar
dniEncontrado = buscarCliente(clienteIngresado)                                     //Llamo la funcion de búsqueda con el DNI Ingresado
console.log(dniEncontrado)                                                          //Muestro por Consola lo que devuelve la funcion
if (dniEncontrado == undefined) {
    let ingreseDni = prompt(" Su DNI no esta ingresado en la base de datos, debe registrarse como cliente, Ingrese DNI: ")
    let ingreseNombre = prompt("Ingrese su nombre")
    let ingreseApellido = prompt("Ingrese Apellido")
    let ingreseMail = prompt("Ingrese su correo electronico")

    clientes.push((new Cliente(ingreseNombre, ingreseApellido, ingreseDni, ingreseMail)))

    console.table(clientes)                                                          //Muestro por Consola el Array de Clientes
} else {
    console.log("Bienvenido:" + dniEncontrado.nombre)
}

console.log("Los productos disponibles son: ")                                      //Muestro Productos disponibles
producto1.mostrarProducto()
producto2.mostrarProducto()

productSelection()                                                                  //Valido productos ingresados
console.table(pedidos)                                                              //Muestro Ingresos
totalCalculation()                                                                  //Calculo totales
pedidos.forEach(ticket => console.log(("Los productos que ud compro son: " + (ticket.nombre))))
showCalculation()