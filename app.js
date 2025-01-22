/* estoy capturando e head de html para poder trabajarlo en html
let titulo = document.querySelector('h1');
// llamada para definir el titulo al juego
titulo.innerHTML = 'Juego del numero secreto';


//Estoy editando el subtexto trayendolo desde html, es super importante colocar la variable entre comillas y al hacer el inner llamar a la let
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10'

console.log('Hola Mundo');

function saludoConNombre() {
    let nombre = prompt('Ingresa tu nombre');
    console.log(`Hola, ${nombre}!`)
}
saludoConNombre("Fran")

function doble(numero) {
    return numero * 2;
}
let resultadoDoble = doble(2);
console.log(resultadoDoble);

function promedio(a, b, c) {
return a + b + c / 3;
}
let promedioCalculado = promedio(4, 8, 9);
console.log(promedioCalculado);

function encontrarMayor(a,b) {
return a > b ? a:b;
}
let numeroMayor = encontrar mayor(15, 5)
console.log(numeroMayor);

1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

let listaNumerosSorteados = [];
let numeroMaximo = 10; // Asegúrate de que numeroMaximo esté definido antes de su uso
let numeroSecreto;
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto < numeroUsuario) {
            asignarTextoElemento('p', 'Es menor');
        } else {
            asignarTextoElemento('p', 'Es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    listaNumerosSorteados = []; // Reiniciar la lista de números sorteados
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
/*
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* 10)+1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {

    }
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado;
    }
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        //el usuario no acertó:
    } else {
        if(numeroSecreto<numeroUsuario){
            asignarTextoElemento('p', 'Es menor');
        } else{
            asignarTextoElemento('p', 'Es mayor');
        }
        intentos++;
        limpiarCaja();
    }       
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value= '';
 }
 
 function condicionesIniciales(){
     asignarTextoElemento('h1', 'Juego del numero secreto');
     asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`); 
     numeroSecreto = generarNumeroSecreto();
     intentos=1;
     document.getElementById('reiniciar').setAttribute('disabled', 'disabled'); // Fix: Disable the 'reiniciar' button initially
 }



function reiniciarJuego(){ 
    limpiarCaja(); //limpiar la caja
    condicionesIniciales(); //mensaje de inicio del 1 a 10, reiniciar la cantidad de intentos y generar el numero aleatorio
    document.querySelector('#reiniciar').setAttribute('disabled','true'); //Desabilitar boton de nuevo juego

}


condicionesIniciales();
*/
