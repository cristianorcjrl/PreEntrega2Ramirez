// // // Definición de la clase Producto
// // class Producto {
// //   constructor(nombre, precios) {
// //       this.nombre = nombre;
// //       this.precios = precios;
// //   }
// // }

// // // Array de productos
// // const productos = [
// //   new Producto('Megamare', { '3ml': 15, '5ml': 25, '10ml': 50 }),
// //   new Producto('Acqua di Gio', { '3ml': 12, '5ml': 20, '10ml': 40 }),
// //   new Producto('Cedrat Boise', { '3ml': 16, '5ml': 27, '10ml': 54 }),
// //   new Producto('Eros', { '3ml': 13, '5ml': 22, '10ml': 45 })
// // ];

// // // Variables globales
// // let salir = false;
// // let sumaProductos = 0;
// // let carrito = []; // Array para almacenar productos seleccionados

// // // Menús
// // const menuPrincipal = `Seleccione una opción\n
// // 1. Agregar un producto\n
// // 2. Realizar pago\n
// // 3. Salir\n`;

// // const menuProductos = `Seleccione un producto\n
// // 1. Megamare\n
// // 2. Acqua di Gio\n
// // 3. Cedrat Boise\n
// // 4. Eros\n
// // Digite un número válido para seleccionar un producto`;

// // const menuCantidad = `Seleccione una cantidad\n
// // 1. 3 ml\n
// // 2. 5 ml\n
// // 3. 10 ml\n
// // Digite un número válido para seleccionar una cantidad`;

// // // Función para aplicar descuento
// // const descuento = (total, percentage) => total - (total * (percentage / 100));

// // // Función para agregar producto al carrito
// // function agregarProducto(productoIndex, cantidad) {
// //   const productoSeleccionado = productos[productoIndex];
// //   const cantidadSeleccionada = cantidad === 1 ? '3ml' : cantidad === 2 ? '5ml' : '10ml';
// //   const precio = productoSeleccionado.precios[cantidadSeleccionada];
// //   carrito.push({ producto: productoSeleccionado.nombre, cantidad: cantidadSeleccionada, precio });
// //   sumaProductos += precio;
// // }

// // // Bucle principal
// // do {
// //   let seleccionPrincipal = parseInt(prompt(menuPrincipal));

// //   switch (seleccionPrincipal) {
// //       case 1:
// //           let seleccionProducto;
// //           do {
// //               seleccionProducto = parseInt(prompt(menuProductos)) - 1;
// //               if (seleccionProducto >= 0 && seleccionProducto < productos.length) {
// //                   let seleccionCantidad;
// //                   do {
// //                       seleccionCantidad = parseInt(prompt(menuCantidad));
// //                       if ([1, 2, 3].includes(seleccionCantidad)) {
// //                           agregarProducto(seleccionProducto, seleccionCantidad);
// //                           alert(`Producto de ${seleccionCantidad === 1 ? '3 ml' : seleccionCantidad === 2 ? '5 ml' : '10 ml'} agregado`);
// //                       } else {
// //                           alert("Opción no válida. Por favor, seleccione una cantidad válida.");
// //                       }
// //                   } while (![1, 2, 3].includes(seleccionCantidad));
// //               } else {
// //                   alert("Opción no válida. Por favor, seleccione un número de producto válido.");
// //               }
// //           } while (seleccionProducto < 0 || seleccionProducto >= productos.length);
// //           break;

// //       case 2:
// //           if (sumaProductos > 0) {
// //               let seleccionCompra;
// //               do {
// //                   seleccionCompra = prompt(`Total: ${sumaProductos}\n 1. Comprar\n 2. Ingresar cupón\n Digite un número válido para continuar`);
// //                   if (seleccionCompra == 1) {
// //                       alert("Gracias por su compra");
// //                       salir = true;
// //                   } else if (seleccionCompra == 2) {
// //                       let cupon = prompt("Ingrese su cupón");
// //                       if (cupon) {
// //                           sumaProductos = descuento(sumaProductos, 20);
// //                           alert("Descuento realizado");
// //                       }
// //                   } else {
// //                       alert("Opción no válida. Por favor, seleccione una opción válida.");
// //                   }
// //               } while (seleccionCompra != 1 && seleccionCompra != 2);
// //           } else {
// //               alert("No ha seleccionado ningún producto. Por favor, agregue productos antes de realizar el pago.");
// //           }
// //           break;

// //       case 3:
// //           salir = true;
// //           break;

// //       default:
// //           alert("Opción no válida. Por favor, seleccione un número del menú principal.");
// //           break;
// //   }
// // } while (!salir);


// // Definición de la clase Producto
// // class Producto {
// //     constructor(nombre, precios) {
// //         this.nombre = nombre;
// //         this.precios = precios;
// //     }

// //     // Método para obtener el precio según la cantidad seleccionada
// //     obtenerPrecio(cantidad) {
// //         return this.precios[cantidad];
// //     }
// // }

// // // Array de productos
// // const productos = [
// //     new Producto('Megamare', { '3ml': 15, '5ml': 25, '10ml': 50 }),
// //     new Producto('Acqua di Gio', { '3ml': 12, '5ml': 20, '10ml': 40 }),
// //     new Producto('Cedrat Boise', { '3ml': 16, '5ml': 27, '10ml': 54 }),
// //     new Producto('Eros', { '3ml': 13, '5ml': 22, '10ml': 45 })
// // ];

// // // Variables globales
// // let salir = false;
// // let sumaProductos = 0;
// // let carrito = [];

// // // Menús
// // const menuPrincipal = `Seleccione una opción\n
// // 1. Agregar un producto\n
// // 2. Realizar pago\n
// // 3. Salir\n`;

// // const menuProductos = productos.map((producto, index) => `${index + 1}. ${producto.nombre}`).join('\n');

// // const menuCantidad = `Seleccione una cantidad\n
// // 1. 3 ml\n
// // 2. 5 ml\n
// // 3. 10 ml\n
// // Digite un número válido para seleccionar una cantidad`;

// // // Función para aplicar descuento
// // const aplicarDescuento = (total, porcentaje) => Math.round(total - (total * (porcentaje / 100)));

// // // Función para agregar producto al carrito
// // function agregarProducto(productoIndex, cantidad) {
// //     const productoSeleccionado = productos[productoIndex];
// //     const cantidadSeleccionada = cantidad === 1 ? '3ml' : cantidad === 2 ? '5ml' : '10ml';
// //     const precio = productoSeleccionado.obtenerPrecio(cantidadSeleccionada);

// //     carrito.push({ producto: productoSeleccionado.nombre, cantidad: cantidadSeleccionada, precio });
// //     sumaProductos += precio;
// // }

// // // Función para calcular el total del carrito
// // const calcularTotal = () => carrito.reduce((total, item) => total + item.precio, 0);

// // // Función para verificar si el carrito está vacío
// // const carritoVacio = () => carrito.length === 0;

// // // Bucle principal
// // do {
// //     let seleccionPrincipal = parseInt(prompt(menuPrincipal));

// //     switch (seleccionPrincipal) {
// //         case 1:
// //             let seleccionProducto;
// //             do {
// //                 seleccionProducto = parseInt(prompt(`Seleccione un producto\n${menuProductos}`)) - 1;
// //                 if (productos[seleccionProducto]) {
// //                     let seleccionCantidad;
// //                     do {
// //                         seleccionCantidad = parseInt(prompt(menuCantidad));
// //                         if ([1, 2, 3].includes(seleccionCantidad)) {
// //                             agregarProducto(seleccionProducto, seleccionCantidad);
// //                             alert(`Producto de ${seleccionCantidad === 1 ? '3 ml' : seleccionCantidad === 2 ? '5 ml' : '10 ml'} agregado`);
// //                         } else {
// //                             alert("Opción no válida. Por favor, seleccione una cantidad válida.");
// //                         }
// //                     } while (![1, 2, 3].includes(seleccionCantidad));
// //                 } else {
// //                     alert("Opción no válida. Por favor, seleccione un número de producto válido.");
// //                 }
// //             } while (!productos[seleccionProducto]);
// //             break;

// //         case 2:
// //             if (!carritoVacio()) {
// //                 let seleccionCompra;
// //                 do {
// //                     seleccionCompra = prompt(`Total: ${calcularTotal()}\n 1. Comprar\n 2. Ingresar cupón\n Digite un número válido para continuar`);
// //                     if (seleccionCompra == 1) {
// //                         alert("Gracias por su compra");
// //                         salir = true;
// //                     } else if (seleccionCompra == 2) {
// //                         let cupon = prompt("Ingrese su cupón");
// //                         if (cupon) {
// //                             sumaProductos = aplicarDescuento(calcularTotal(), 20);
// //                             alert(`Descuento aplicado. Nuevo total: ${sumaProductos}`);
// //                         }
// //                     } else {
// //                         alert("Opción no válida. Por favor, seleccione una opción válida.");
// //                     }
// //                 } while (seleccionCompra != 1 && seleccionCompra != 2);
// //             } else {
// //                 alert("No ha seleccionado ningún producto. Por favor, agregue productos antes de realizar el pago.");
// //             }
// //             break;

// //         case 3:
// //             salir = true;
// //             break;

// //         default:
// //             alert("Opción no válida. Por favor, seleccione un número del menú principal.");
// //             break;
// //     }
// // } while (!salir);


// // Objeto  Clase Constructor
// class Producto {
//     constructor(nombre, precios) {
//         this.nombre = nombre;
//         this.precios = precios;
//     }

//     // Precio según cantidad
//     obtenerPrecio(cantidad) {
//         return this.precios[cantidad];
//     }
// }

// // Array, Productos
// const productos = [
//     new Producto('Megamare', { '3ml': 15, '5ml': 25, '10ml': 50 }),
//     new Producto('Acqua di Gio', { '3ml': 12, '5ml': 20, '10ml': 40 }),
//     new Producto('Cedrat Boise', { '3ml': 16, '5ml': 27, '10ml': 54 }),
//     new Producto('Eros', { '3ml': 13, '5ml': 22, '10ml': 45 })
// ];

// // Variables
// let salir = false;
// let sumaProductos = 0;
// let carrito = [];

// // Menús
// const menuPrincipal = `Seleccione una opción\n1. Agregar un producto\n2. Realizar pago\n3. Salir\n`;
// const menuProductos = productos.map((producto, index) => `${index + 1}. ${producto.nombre}`).join('\n');
// const menuCantidad = `Seleccione una cantidad\n1. 3 ml\n2. 5 ml\n3. 10 ml\nDigite un número válido para seleccionar una cantidad`;

// // Función, Descuento
// const aplicarDescuento = (total, porcentaje) => Math.round(total - (total * (porcentaje / 100)));

// // Función Agregar al carrito
// function agregarProducto(productoIndex, cantidad) {
//     const productoSeleccionado = productos[productoIndex];
//     const cantidadSeleccionada = cantidad === 1 ? '3ml' : cantidad === 2 ? '5ml' : '10ml';
//     const precio = productoSeleccionado.obtenerPrecio(cantidadSeleccionada);

//     carrito.push({ producto: productoSeleccionado.nombre, cantidad: cantidadSeleccionada, precio });
//     sumaProductos += precio;
// }

// // Función Total carrito
// const calcularTotal = () => carrito.reduce((total, item) => total + item.precio, 0);

// // Función Verificar si el carrito está vacío
// const carritoVacio = () => carrito.length === 0;

// // Función Fecha actual
// const obtenerFechaActual = () => {
//     const fecha = new Date();
//     return fecha.toLocaleDateString();
// }

// // Ciclo, bucle principal
// do {
//     let seleccionPrincipal = parseInt(prompt(menuPrincipal));

//     switch (seleccionPrincipal) {
//         case 1:
//             let seleccionProducto;
//             do {
//                 seleccionProducto = parseInt(prompt(`Seleccione un producto\n${menuProductos}`)) - 1;
//                 if (productos[seleccionProducto]) {
//                     let seleccionCantidad;
//                     do {
//                         seleccionCantidad = parseInt(prompt(menuCantidad));
//                         if ([1, 2, 3].includes(seleccionCantidad)) {
//                             agregarProducto(seleccionProducto, seleccionCantidad);
//                             alert(`Producto de ${seleccionCantidad === 1 ? '3 ml' : seleccionCantidad === 2 ? '5 ml' : '10 ml'} agregado`);
//                         } else {
//                             alert("Cantidad no válida. Intente de nuevo.");
//                         }
//                     } while (![1, 2, 3].includes(seleccionCantidad));
//                 } else {
//                     alert("Producto no válido. Intente de nuevo.");
//                 }
//             } while (!productos[seleccionProducto]);
//             break;

//         case 2:
//             if (!carritoVacio()) {
//                 let seleccionCompra;
//                 do {
//                     seleccionCompra = prompt(`Total: ${calcularTotal()}\n1. Comprar\n2. Ingresar cupón\nSeleccione una opción`);
//                     if (seleccionCompra == 1) {
//                         alert(`Gracias por su compra realizada el ${obtenerFechaActual()}`);
//                         salir = true;
//                     } else if (seleccionCompra == 2) {
//                         let cupon = prompt("Ingrese su cupón");
//                         if (cupon) {
//                             sumaProductos = aplicarDescuento(calcularTotal(), 20);
//                             alert(`Descuento aplicado. Nuevo total: ${sumaProductos}`);
//                         }
//                     } else {
//                         alert("Opción no válida. Intente de nuevo.");
//                     }
//                 } while (seleccionCompra != 1 && seleccionCompra != 2);
//             } else {
//                 alert("Carrito vacío. Agregue productos primero.");
//             }
//             break;

//         case 3:
//             salir = true;
//             break;

//         default:
//             alert("Opción no válida. Intente de nuevo.");
//             break;
//     }
// } while (!salir);

// Clase Producto (objeto)
// class Producto {
//     constructor(nombre, precios) {
//         this.nombre = nombre;
//         this.precios = precios;
//     }
//         obtenerPrecio(cantidad) {
//         return this.precios[cantidad];
//     }
// }

// // Array de productos
// const productos = [
//     new Producto('Megamare', { '3ml': 10, '5ml': 15, '10ml': 22 }),
//     new Producto('Acqua di Gio', { '3ml': 9, '5ml': 13, '10ml': 20 }),
//     new Producto('Cedrat Boise', { '3ml': 11, '5ml': 16, '10ml': 23 }),
//     new Producto('Eros', { '3ml': 8, '5ml': 16, '10ml': 22 })
// ];

// // Variables
// let salir = false;
// let sumaProductos = 0;
// let carrito = [];

// // Variables Menús
// const menuPrincipal = `Seleccione una opción\n
// 1. Agregar un producto\n
// 2. Realizar pago\n
// 3. Salir\n`;

// // Menú de productos
// const menuProductos = productos.map((producto, index) => `${index + 1}. ${producto.nombre}`).join('\n');

// //Menú selección de cantidad
// const menuCantidad = `Seleccione una cantidad\n
// 1. 3 ml\n
// 2. 5 ml\n
// 3. 10 ml\n
// Digite un número válido para seleccionar una cantidad`;

// // Función, Aplica un descuento al total
// const aplicarDescuento = (total, porcentaje) => Math.round(total - (total * (porcentaje / 100)));

// // Función, Agrega un producto al carrito
// function agregarProducto(productoIndex, cantidad) {
//     const productoSeleccionado = productos[productoIndex];
//     let cantidadSeleccionada;
// // Condicional
//     if (cantidad === 1) {
//         cantidadSeleccionada = '3ml';
//     } else if (cantidad === 2) {
//         cantidadSeleccionada = '5ml';
//     } else {
//         cantidadSeleccionada = '10ml';
//     }

//     const precio = productoSeleccionado.obtenerPrecio(cantidadSeleccionada);

//     carrito.push({ producto: productoSeleccionado.nombre, cantidad: cantidadSeleccionada, precio });
//     sumaProductos += precio;
// }

// // Función, Calcula el total del carrito
// const calcularTotal = () => carrito.reduce((total, item) => total + item.precio, 0);

// // Función, Comprueba si el carrito está vacío
// const carritoVacio = () => carrito.length === 0;

// // Función, Obtiene la fecha actual de Ecuador formateada, aprendido en MDN
// function obtenerFechaActual() {
//     const fecha = new Date();
//     return fecha.toLocaleDateString('es-EC', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit'
//     });
// }

// // Ciclo, Bucle principal
// do {
//     let seleccionPrincipal = parseInt(prompt(menuPrincipal));

//     switch (seleccionPrincipal) {
//         case 1:
//             let seleccionProducto;
//             do {
//                 seleccionProducto = parseInt(prompt(`Seleccione un producto\n${menuProductos}`)) - 1;
//                 if (productos[seleccionProducto]) {
//                     let seleccionCantidad;
//                     do {
//                         seleccionCantidad = parseInt(prompt(menuCantidad));
//                         if ([1, 2, 3].includes(seleccionCantidad)) {
//                             agregarProducto(seleccionProducto, seleccionCantidad);
//                             //  Operador ternario para reemplazar el if else aprendido en el libro Eloquent JavaScript//
//                             alert(`Producto de ${seleccionCantidad === 1 ? '3 ml' : seleccionCantidad === 2 ? '5 ml' : '10 ml'} agregado`);
//                         } else {
//                             alert("Opción no válida. Por favor, seleccione una cantidad válida.");
//                         }
//                     } while (![1, 2, 3].includes(seleccionCantidad));
//                 } else {
//                     alert("Opción no válida. Por favor, seleccione un número de producto válido.");
//                 }
//             } while (!productos[seleccionProducto]);
//             break;

//         case 2:
//             if (!carritoVacio()) {
//                 let seleccionCompra;
//                 do {
//                     seleccionCompra = prompt(`Total: ${calcularTotal()}\n1. Comprar\n2. Ingresar cupón\nDigite un número válido para continuar`);
//                     if (seleccionCompra == 1) {
//                         const fechaCompra = obtenerFechaActual();
//                         alert(`Gracias por su compra. Fecha: ${fechaCompra}`);
//                         salir = true;
//                     } else if (seleccionCompra == 2) {
//                         let cupon = prompt("Ingrese su cupón");
//                         if (cupon) {
//                             sumaProductos = aplicarDescuento(calcularTotal(), 20);
//                             alert(`Descuento aplicado. Nuevo total: ${sumaProductos}`);
//                         }
//                     } else {
//                         alert("Opción no válida. Por favor, seleccione una opción válida.");
//                     }
//                 } while (seleccionCompra != 1 && seleccionCompra != 2);
//             } else {
//                 alert("No ha seleccionado ningún producto. Por favor, agregue productos antes de realizar el pago.");
//             }
//             break;

//         case 3:
//             salir = true;
//             break;

//         default:
//             alert("Opción no válida. Por favor, seleccione un número del menú principal.");
//             break;
//     }
// } while (!salir);

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
