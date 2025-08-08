//mi solución Ejercicio 1
let altura1 = parseInt(prompt('ingresa tu altura en metros:'));
let peso1 = parseInt(prompt('Ingresa tu peso en kilogramos:'));

function calculoMasaCorporal() {
    let imc = peso1 / (altura1 * altura1);
    alert (`Su indice de masa corporal es ${imc}%`);
}

//como se debió solucionar Ejercicio 1

function calcularMasaCorporal(altura, peso) {
  let imc = peso / (altura * altura);
  return imc;
}
// Ahora, los datos se obtienen fuera de la función
let altura = parseFloat(prompt('Ingresa tu altura en metros:'));
let peso = parseFloat(prompt('Ingresa tu peso en kilogramos:'));
// Se llama a la función, pasándole los datos como argumentos
let resultadoIMC = calcularMasaCorporal(altura, peso);
// Se muestra el resultado
alert(`Su índice de masa corporal es ${resultadoIMC}`);

//Mi solución Ejercicio 2

function calculoFactorial(numero) {
    let resultado = 1;
    for ( let i = 1; i<=numero;i++) {
        resultado = resultado * i;
    }  
    return resultado;
}

//Mi solución Ejercicio 3

function convertidorDivisas(cantidadCop) {
    let valorUsd = 0.00025;
    let calculoDivisas = cantidadCop * valorUsd;
    return calculoDivisas
}