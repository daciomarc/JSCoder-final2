let menu = [
    [
        { nombre: 'Hamburguesa simple', precio: 600 },
        { nombre: 'Hamburguesa Completa', precio: 1000 },
        { nombre: 'Hamburguesa Doble Completa', precio: 1500 },
    ],
    [
        { nombre: 'Milanesa simple', precio: 800 },
        { nombre: 'Milanesa Completa', precio: 1050 },
        { nombre: 'Milanesa Napolitana', precio: 1600 },

    ],
    [
        { nombre: 'Medallon de lentejas', precio: 400, },
        { nombre: 'Medallon de quinoa', precio: 700, },
        { nombre: 'Ensalada caesar', precio: 1000, },

    ]

]


do {
    opcion = Number(prompt('Bienvenido, elija el numero de la opcion deseada \n 1 - Hamburguesas \n 2 - Milanesas \n 3 - Menu Vegetariano \n 4 - Salir'))
    if (opcion === 1) {
        let mensaje = comida(opcion)
        let elegir = 0

        if (elegir === 1 || elegir === 2 || elegir === 3) {
            mensaje1(elegir, mensaje)
            break
        } else {
            mensaje1(elegir, mensaje)
            break
        }
    } else if (opcion === 2) {
        let mensaje = comida(opcion)
        let elegir = 0
        if (elegir === 1 || elegir === 2 || elegir === 3) {
            mensaje1(elegir, mensaje)
            break
        } else {
            mensaje1(elegir, mensaje)
            break
        }
    } else if (opcion === 3) {
        let mensaje = comida(opcion)
        let elegir = 0
        if (elegir === 1 || elegir === 2 || elegir === 3) {
            mensaje1(elegir, mensaje)
            break
        } else {
            mensaje1(elegir, mensaje)
            break
        }

    } else if (opcion === 4) {
        alert('El programa se cerrará')
        break
    } else {
        alert('Opcion invalida, por favor ingresa una opcion correcta')
    }
} while (true)




/* Funciones */

function comida(x) {

    let mensaje = 0
    for (let i = 0; i < menu[x - 1].length; i++) {
        mensaje = mensaje + ((i + 1)     + '- ' + menu[x - 1][i].nombre + ' $' + menu[x - 1][i].precio + ' \n')
    }

    return mensaje

}


function mensaje1(elegir, mensaje) {
    do {

        let elegir = Number(prompt(mensaje))
        if (elegir === 1 || elegir === 2 || elegir === 3) {
            alert('Muchas gracias por su compra, que lo disfrute')
            break

        } else {
            alert('Opcion invalida, por favor ingrese una opcion correcta')
        }

    } while (elegir != 1 && elegir != 2 && elegir != 3)



}

// test???