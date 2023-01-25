// STRINGS
// Son cadenas de caracteres. Los definimos con comillas simples o dobles

// const example = 'Hello, world!';
// console.log(example);

// const secondExample = "Hello, world!"
// console.log(secondExample);

// También podemos utilizar los template literals, que nos permiten:
// 1. Introducir saltos de línea sin utilizar el escape \n
// 2. Introducir variables de JS dentro de la propia string

// const hello = 'Hello';
// const world = 'World';
// const fullString = hello + ' ' + world // A COMPLETAR POR LOS ESTUDIANTES
// const fullString = `${hello} ${world}` // A COMPLETAR POR LOS ESTUDIANTES
// console.log(fullString);

// Podemos concatenar strings con el operador +

// const hello = 'Hello';
// const world = 'World';
// const fullString = '' // A COMPLETAR POR LOS ESTUDIANTES
// console.log(fullString);

// Además, las strings tienen una propiedad length...

const leaveThisUncommented = '   This is an Example String. Use your methods here   ';

// console.log(leaveThisUncommented.length);

// ...que nos permite utilizarlas como arrays

// console.log(leaveThisUncommented[1]);
// console.log(leaveThisUncommented[6]);
// console.log(leaveThisUncommented[0]);
// console.log(leaveThisUncommented[leaveThisUncommented.length - 1]);

// Por último, podemos utilizar los métodos nativos de JavaScript



// EJERCICIOS CON MÉTODOS

// 1.- Imprime leaveThisUncommented todo en minúsculas

const lowerCase = leaveThisUncommented.toLowerCase();
console.log(lowerCase);

// 2.- Imprime leaveThisUncommented todo en mayúsculas

const upperCase = leaveThisUncommented.toUpperCase();
console.log(upperCase);

// 3.- Quita los espacios iniciales y finales de leaveThisUncommented

const sinEspacios = leaveThisUncommented.trim();
console.log(sinEspacios);

// 4.- Determina si leaveThisUncommented incluye la palabra 'stop'

const encontrar = leaveThisUncommented.includes('stop');
console.log(encontrar);

// 5.- Determina si leaveThisUncommented termina con la palabra 'here'

const termina = leaveThisUncommented.endsWith('here');
console.log(termina);

const termina2 = leaveThisUncommented.includes('here',-3);
console.log(termina2);

const termina3 = leaveThisUncommented.trim().includes('here');
console.log(termina3);

const termina4 = leaveThisUncommented.trim().endsWith('here');
console.log(termina4);

// 6.- Sustituye todas las "e" de leaveThisUncommented por "a"

const cambiar = leaveThisUncommented.replace('e','a');
console.log(cambiar);

const cambiar2 = leaveThisUncommented.toLowerCase().replace('e','a');
console.log(cambiar2);

const cambiar3 = leaveThisUncommented.replaceAll('e','a');
console.log(cambiar3);

const cambiar4 = leaveThisUncommented.toLowerCase().replaceAll('e','a');
console.log(cambiar4);

// 7.- Encuentra en qué posición de leaveThisUncommented se encuentra la palabra "Use"

const posicion = leaveThisUncommented.indexOf('Use');
console.log(posicion);

const posicion2 = leaveThisUncommented.search('Use');
console.log(posicion2);

// 8.- Divide leaveThisUncommented por el punto

const divide = leaveThisUncommented.split('.');
console.log(divide);

// 9.- Obtén el fragmento de leaveThisUncommented que va desde el índice 30 hasta el final

const fragmento = leaveThisUncommented.slice(30);
console.log(fragmento);

const fragmento2 = leaveThisUncommented.slice(30,leaveThisUncommented.length);
console.log(fragmento2);

// 10.- Obtén el fragmento de leaveThisUncommented que va desde el índice 30 hasta el 46

const fragmento3 = leaveThisUncommented.slice(30,46);
console.log(fragmento3);
