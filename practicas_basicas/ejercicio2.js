// ejercicio 1
let nombreUsuario = prompt('Ingresa tu nombre:');
console.log (`Hola, ${nombreUsuario}!`);

// ejercicio 2
let numero1 = parseInt(prompt('Ingresa el primer numero:'));
let numero2 = parseInt(prompt('Ingresa el segundo numero:'));
let suma = numero1 + numero2;

console.log(`La suma de ${numero1} y ${numero2} es ${suma}.`);

//ejercicio 3
let userNumber = Number(prompt('Ingrese el numero a revisar:'));

if (userNumber %2 === 0) {
    console.log('El numero ingresado es par');
} else {
    console.log('El numero ingresado es impar');
}

//ejercicio 4
for (let i=1; i<=10;i++) {
    console.log(`Numero: ${i}`);
}

//ejercicio 5
