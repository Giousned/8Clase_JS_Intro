// FUNCIONES
// Las funciones son bloques de código reutilizable.
// Como las variables, lo primero que hacemos es declararlas,
// para almacenarlas en la memoria. Luego podemos ejecutarlas

// function exampleFunction() {
//     console.log('Hello, world!');
// }

// exampleFunction();

// A nuestras funciones les podemos pasar argumentos. Se trata de
// variables que utilizaremos dentro de la propia función

// const helloWorld = 'Hello, world!';

// function exampleFunction(printStatement) {
//     console.log(printStatement);
// }

// exampleFunction(helloWorld);


// const addTwoNumbers = (firstNumber,secondNumber) => {
//     const result = firstNumber + secondNumber;
//     return result;
// };

// console.log(addTwoNumbers(2,5));

// const printAWord = word => {
//     console.log(word);
//     };

// printAWord('hello');

// const printAWord = word => console.log(word);

// printAWord('hello');


// EJERCICIOS

// 1. Escribe una función que imprima la suma de dos números
// proporcionados como parámetros

const addTwoNumbers = (firstNumber,secondNumber) => {
    const result = firstNumber + secondNumber;
    console.log(result);
}

addTwoNumbers(5,2);

const addTwoNumbers2 = (firstNumber,secondNumber) => console.log(firstNumber+secondNumber);

addTwoNumbers2(5,2);

// 2. Escribe una función que imprima un número entero aleatorio, de 1
// hasta el rango proporcionado

const numberRandom = numero => {
    const result = Math.floor(Math.random() * numero + 1);
    console.log(result);
}

numberRandom(5);

// ---

// Las funciones pueden utilizar la keyword return, que:
// 1. Les asigna un valor de retorno
// 2. Interrumpe la ejecución del código

// function addTwoNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// const addResult = addTwoNumbers(1, 3);

// console.log(addResult);

// EJERCICIO

// 1. Retomando la función que genera números aleatorios, haz que retorne
// el resultado, no que lo imprima en consola

const numberRandom2 = numero => {
    const result = Math.floor(Math.random() * numero + 1);
    return result;
}
console.log(numberRandom2(20));

const numberRandom3 = numero => result = Math.floor(Math.random() * numero + 1);
console.log(numberRandom3(2));

// IMPORTANTE
// 1. Debemos tratar de que nuestras funciones solo cumplan un cometido
// 2. Debemos tratar de escribir funciones puras (siempre devuelven el mismo
// resultado con los mismos parámetros)
// 3. Debemos evitar los efectos secundarios en nuestras funciones
// 4. Debemos tener mucho cuidado con el nombre de nuestras funciones

// Podemos utilizar funciones sin nombre. Las llamaremos funciones anónimas.

// const exampleFunction = function () {
//     console.log('Anonymous function!');
// }
 
// exampleFunction();

// Existe una sintaxis especial desde EC6: las arrow functions

// const exampleFunction = () => {
//     console.log('Anonymous function!');
// }
 
// exampleFunction();

// EJERCICIOS

// 1. Escribe una arrow function que imprima en la consola el parámetro
// que le proporciones

const imprimir = parametro => console.log(parametro);
imprimir('Hello');

// 2. Escribe una arrow function que sume dos números proporcionados

const suma = (num1,num2) => operacion = num1+num2;                          // CORRECTA
console.log(suma(10,100));

const suma2 = (num1,num2) => console.log(operacion = num1+num2);            // PORQUE ESTA IMPRIME EN CONSOLA
suma2(100,100);

// 3. Escribe una arrow function que imprima en la consola la multiplicación
// de dos números proporcionados

const multiplicacion = (num1,num2) => operacion = num1*num2;                // PORQUE ESTA SOLO DEVUELVE NO IMPRIME EN CONSOLA
console.log(multiplicacion(10,800));

const multiplicacion2 = (num1,num2) => console.log(operacion = num1*num2);          // CORRECTA
multiplicacion2(5,100);

// 4. Escribe una arrow function que reste dos números proporcionados

const resta = (num1,num2) => operacion = num1-num2;                         // CORRECTA
console.log(resta(10,100));

const resta2 = (num1,num2) => console.log(operacion = num1-num2);           // PORQUE ESTA IMPRIME EN CONSOLA
resta2(1000,50);

// 5. Escribe una arrow function que multiplique dos números proporcionados

const multiplicacion3 = (num1,num2) => operacion = num1*num2;                        // CORRECTA
console.log(multiplicacion3(5,400));

const multiplicacion4 = (num1,num2) => console.log(operacion = num1*num2);          // PORQUE ESTA IMPRIME EN CONSOLA
multiplicacion4(25,8100);

// 6. Escribe una arrow function que divida dos números proporcionados

const division = (num1,num2) => operacion = num1/num2;                          // CORRECTA
console.log(division(25,1.5));

const division2 = (num1,num2) => console.log(operacion = num1/num2);          // PORQUE ESTA IMPRIME EN CONSOLA
division2(578,32);

// 7. Escribe una arrow function que reciba dos números y una operación,
// ejecute la operación e imprima el resultado en pantalla

const operacionNumerosYSigno = (num1,num2,signo) => {

    if (signo === '+') console.log(operacion = suma(num1,num2));
    if (signo === '-') console.log(operacion = resta(num1,num2));
    if (signo === '*') console.log(operacion = multiplicacion(num1,num2));              // CORRECTA
    if (signo === '/') console.log(operacion = division(num1,num2));
    
}

operacionNumerosYSigno(578,32,'+');
operacionNumerosYSigno(578,32,'-');
operacionNumerosYSigno(578,32,'*');
operacionNumerosYSigno(578,32,'/');