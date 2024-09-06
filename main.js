
// Clase Producto (objeto)
class Producto {
    constructor(nombre, precios) {
        this.nombre = nombre;
        this.precios = precios;
    }

    obtenerPrecio(cantidad) {
        return this.precios[cantidad];
    }
}

// Array de productos
const productos = [
    new Producto('Megamare', { '3ml': 10, '5ml': 15, '10ml': 22 }),
    new Producto('Acqua di Gio', { '3ml': 9, '5ml': 13, '10ml': 20 }),
    new Producto('Cedrat Boise', { '3ml': 11, '5ml': 16, '10ml': 23 }),
    new Producto('Eros', { '3ml': 8, '5ml': 16, '10ml': 22 })
];

// Variables
let salir = false;
let sumaProductos = 0;
let carrito = [];

// Variables Menús
const menuPrincipal = `Seleccione una opción\n
1. Agregar un producto\n
2. Realizar pago\n
3. Salir\n`;

// Menú de productos
const menuProductos = productos.map((producto, index) => `${index + 1}. ${producto.nombre}`).join('\n');

// Menú selección de cantidad
const menuCantidad = `Seleccione una cantidad\n
1. 3 ml\n
2. 5 ml\n
3. 10 ml\n
Digite un número válido para seleccionar una cantidad`;

// Función, Aplica un descuento al total
const aplicarDescuento = (total, porcentaje) => Math.round(total - (total * (porcentaje / 100)));

// Función, Agrega un producto al carrito
function agregarProducto(productoIndex, cantidad) {
    const productoSeleccionado = productos[productoIndex];
    let cantidadSeleccionada;

    if (cantidad === 1) {
        cantidadSeleccionada = '3ml';
    } else if (cantidad === 2) {
        cantidadSeleccionada = '5ml';
    } else {
        cantidadSeleccionada = '10ml';
    }

    const precio = productoSeleccionado.obtenerPrecio(cantidadSeleccionada);

    carrito.push({ producto: productoSeleccionado.nombre, cantidad: cantidadSeleccionada, precio });
    sumaProductos += precio;
}

// Función, Calcula el total del carrito
const calcularTotal = () => carrito.reduce((total, item) => total + item.precio, 0);

// Función, Comprueba si el carrito está vacío
const carritoVacio = () => carrito.length === 0;

// Función, Obtiene la fecha actual de Ecuador formateada, aprendido en MDN
function obtenerFechaActual() {
    const fecha = new Date();
    return fecha.toLocaleDateString('es-EC', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Ciclo, Bucle principal
do {
    let seleccionPrincipal = parseInt(prompt(menuPrincipal));

    switch (seleccionPrincipal) {
        case 1:
            let seleccionProducto;
            do {
                seleccionProducto = parseInt(prompt(`Seleccione un producto\n${menuProductos}`)) - 1;
                if (productos[seleccionProducto]) {
                    let seleccionCantidad;
                    do {
                        seleccionCantidad = parseInt(prompt(menuCantidad));
                        if ([1, 2, 3].includes(seleccionCantidad)) {
                            agregarProducto(seleccionProducto, seleccionCantidad);
                            alert(`Producto de ${seleccionCantidad === 1 ? '3 ml' : seleccionCantidad === 2 ? '5 ml' : '10 ml'} agregado`);
                        } else {
                            alert("Opción no válida. Por favor, seleccione una cantidad válida.");
                        }
                    } while (![1, 2, 3].includes(seleccionCantidad));
                } else {
                    alert("Opción no válida. Por favor, seleccione un número de producto válido.");
                }
            } while (!productos[seleccionProducto]);
            break;

        case 2:
            if (!carritoVacio()) {
                let seleccionCompra;
                do {
                    seleccionCompra = prompt(`Total: ${calcularTotal()}\n1. Comprar\n2. Ingresar cupón\nDigite un número válido para continuar`);
                    if (seleccionCompra == 1) {
                        const fechaCompra = obtenerFechaActual();
                        const totalCompra = calcularTotal();
                        let detallesCompra = carrito.map(item => `${item.producto} (${item.cantidad}): $${item.precio}`).join('\n');
                        alert(`Gracias por su compra.\nFecha: ${fechaCompra}\nTotal: $${totalCompra}\n\nProductos:\n${detallesCompra}`);
                        salir = true;
                    } else if (seleccionCompra == 2) {
                        let cupon = prompt("Ingrese su cupón");
                        if (cupon) {
                            sumaProductos = aplicarDescuento(calcularTotal(), 20);
                            alert(`Descuento aplicado. Nuevo total: ${sumaProductos}`);
                        }
                    } else {
                        alert("Opción no válida. Por favor, seleccione una opción válida.");
                    }
                } while (seleccionCompra != 1 && seleccionCompra != 2);
            } else {
                alert("No ha seleccionado ningún producto. Por favor, agregue productos antes de realizar el pago.");
            }
            break;

        case 3:
            salir = true;
            break;

        default:
            alert("Opción no válida. Por favor, seleccione un número del menú principal.");
            break;
    }
} while (!salir);
