'use strict';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////CLASSES////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Producto {
    constructor(id, nombre, precio, foto) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.foto = foto
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
const productos = []                                                                //Array de Productos válidos
let dniEncontrado = []

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////VARIABLES DEFINITION///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

clientes.push((new Cliente(                                                           //Cliente 1 de la BD
    "Martin",
    "Beltramo",
    "26959770",
    "mail@gmail.com")))

clientes.push((new Cliente(                                                           //Cliente 2 de la BD
    "Valeria",
    "Kratochvill",
    "31009628",
    "mail@hotmail.com")))

let total = 0
let choice = 0


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////FUNCTIONS DEFINITION///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function cargaProductos() {
    productos.push(new Producto(1, 'Dji Mavic 3', 3000, './img/DjiMavic3.jpg'));
    productos.push(new Producto(2, 'Dji Air 2S', 2850, './img/DjiAir2S.jpg'));
    productos.push(new Producto(3, 'Dji Mavic Air 2', 2700, './img/djidrone.jpg'));
    productos.push(new Producto(4, 'Dji Mini 3 Pro', 3200, './img/djidrone.jpg'));
    productos.push(new Producto(5, 'Dji Mini 2', 1500, './img/djidrone.jpg'));
    productos.push(new Producto(6, 'Dji Mini SE', 1800, './img/djidrone.jpg'));
    productos.push(new Producto(7, 'Dji FPV', 6000, './img/djidrone.jpg'));
    productos.push(new Producto(8, 'Dji Digital FPV System', 4300, './img/djidrone.jpg'));
    productos.push(new Producto(9, 'Dji Phantom 4 Pro V2.0', 1960, './img/djidrone.jpg'));
    productos.push(new Producto(10, 'Dji Phantom 4 Pro', 3960, './img/djidrone.jpg'));
    productos.push(new Producto(11, 'Dji Inspire 2', 2600, './img/djidrone.jpg'));
    productos.push(new Producto(12, 'Dji Zenmuse X7', 7000, './img/djidrone.jpg'));
}


function productSelection(Producto) {                                                           //Funcion de Seleccion de productos
    choice = prompt("Ingrese los productos que desea adquirir");
    do {
        switch (choice) {                                                               //Switch de seleccion de
            case "1":                                                                   //productos disponibles
                pedidos.push(Producto[1])
                break;
            case "2":
                pedidos.push(Producto[2])
                break;
            case "3":
                pedidos.push(Producto[3])
                break;
            case "4":
                pedidos.push(Producto[4])
                break;
            case "5":
                pedidos.push(Producto[5])
                break;
            case "6":
                pedidos.push(Producto[6])
                break;
            case "7":
                pedidos.push(Producto[7])
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

function cargaCards() {                                                              //CARGO LOS PRODUCTOS DISPONIBLES EN EL HTML

    let cards = document.getElementById("cards")

    for (const producto of productos) {
        let carta = document.createElement("div")
        carta.className = "card col-sm-3"
        carta.innerHTML = `
        <img src=${producto.foto} class="card-img-top" alt=${producto.id}/>
        <div className="card-body">
            <h5 className="card-title">${producto.nombre}</h5>
            <p className="card-text">US$ ${producto.precio}</p>
            <button id="comprarBoton-${producto.id}" class="btn btn-success botonComprar">Comprar</button>
        </div>
        `
        cards.append(carta)

    }
}
function cargaPedidos(){
    //////////////////////////////////////// DEFINO Y CARGO LA TABLA DE PEDIDOS EN EL HTML ///////////////////
    let pedidosTabla = document.createElement("table")
    pedidosTabla.className = ("table table-dark table-striped")

    let tablaBody = document.createElement("tbody")

    for (const pedido of pedidos) {

        tablaBody.innerHTML += `
    <tr> 
        <td>${pedido.nombre} </td>
        <td>${pedido.precio} </td>
    </tr>    
    `
    }
    pedidosTabla.append(tablaBody)
    let pedidosEnTabla = document.getElementById("pedido")
    pedidosEnTabla.append(pedidosTabla)
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////PROGRAM EXECUTION //////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

cargaProductos()

cargaCards()

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

productSelection(productos)                                                          //Valido productos ingresados
console.table(pedidos)                                                              //Muestro Ingresos
totalCalculation()                                                                  //Calculo totales
pedidos.forEach(ticket => console.log(("Los productos que ud compro son: " + (ticket.nombre))))
showCalculation()

cargaPedidos()

let botonDos=document.getElementById(`comprarBoton-${producto.id}`)
botonDos.onclick= () =>{alert("Hola Boton Dos")}

// productSelection(productos[botonDos.id])

