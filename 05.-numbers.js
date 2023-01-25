// NUMBERS
// Son números, útiles para hacer operaciones matemáticas

// const positiveExample = 8291;
// console.log(positiveExample);

// const negativeExample = -8291;
// console.log(negativeExample);

// const floatExample = 82.91;
// console.log(floatExample);

// Podemos combinarlos con operadores aritméticos y comparadores lógicos
// ¿Necesitamos ejemplos?

// Podemos convertir otros tipos de datos en numbers

// const booleanExampleTrue = true;
// const booleanExampleFalse = false;

// const stringExampleOne = '123';
// const stringExampleTwo = '';

// console.log(Number(booleanExampleTrue));         pinta 1
// console.log(Number(booleanExampleFalse));         pinta 0
// console.log(Number(stringExampleOne));         pinta 123 como numero
// console.log(Number(stringExampleTwo));         pinta 0 porque era falsy

// Tenemos un tipo especial de número: NaN

// const stringExampleThree = 'Something';

// console.log(Number(stringExampleThree));         pinta NaN   no se puede convertir una palabra o string en numero
// console.log(typeof Number(stringExampleThree));         pinta number

// Y también tenemos el objeto Math, que nos permite realizar
// operaciones avanzadas e incluye funcionalidades relacionadas
// con las matemáticas

// EJERCICIOS CON MÉTODOS Y MATH

const leaveThisUncommented = 156.34589;

// 1. Cambia el tipo de leaveThisUncommented a string

const str = leaveThisUncommented.toString();
console.log(str);

// 2. Redondea leaveThisUncommented a dos decimales

const redondeo = leaveThisUncommented.toFixed(2);
console.log(redondeo);

// 3. Determina si leaveThisUncommented es un número entero

const entero = Number.isInteger(leaveThisUncommented);
console.log(entero);

// function esEntero(numero){
//     if (numero % 1 == 0) {
//         alert ("Es un numero entero");
//     } else {
//         alert ("Es un numero decimal");
//     }
// }

// function esEntero(numero){
//     if (numero - Math.floor(numero) == 0) {
//         alert ("Es un numero entero");
//     } else {
//         alert ("Es un numero decimal");
//     }
// }


// 4. Determina si leaveThisUncommented es NaN

const noNumero = Number.isNaN(leaveThisUncommented);
console.log(noNumero);

// 5. Castea leaveThisUncommented a número entero

const casteo = parseInt(leaveThisUncommented);
console.log(casteo);

const casteo2 = Number.parseInt(leaveThisUncommented);
console.log(casteo2);

// 6. Imprime el número PI

console.log(Math.PI);

// 7. Redondea leaveThisUncommented al número entero superior más cercano

const redondeoUp = Math.ceil(leaveThisUncommented); 
console.log(redondeoUp);

// 8. Redondea leaveThisUncommented al número entero inferior más cercano

const redondeoDown = Math.floor(leaveThisUncommented);
console.log(redondeoDown);

const redondeoDown2 = Math.round(leaveThisUncommented);             // este redondea, y ya depende del siguiente numero de la coma si es hacia arriba o abajo, los otros lo fuerzan a arriba o abajo
console.log(redondeoDown2);

// 9. Genera un número entero aleatorio del 1 al 3

const random = Math.floor((Math.random() * 3) + 1);
console.log(random);

const random2 = Math.ceil(Math.random() * 3);               // así nos ahorramos el sumar +1, porque ceil redondea hacia arriba siempre pero así te puede dar 0 alguna vez porque el 0 si está incluido en el 
console.log(random2);                                       // Math.random(), va de 0 incluido a 1 excluido.
