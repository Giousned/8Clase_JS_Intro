// EN JS TRABAJAMOS CON DIFERENTES TIPOS DE DATOS
// Cada tipo de dato tiene sus propias características y funcionalidades

// ---
// BOOLEAN
// Sus valores son true o false

const trueBool = true;
const falseBool = false;

// Podemos convertir otros datos y expresiones en booleanos por medio de
// comparaciones lógicas o casteando su tipo (se tomará su valor)

// Boolean('');
// Boolean('something');

// Boolean(0);
// Boolean(-192);

// Boolean(undefined);
// Boolean(null);

// console.log(Boolean(''));        pinta false
// console.log(Boolean('something'));        pinta true
// console.log(Boolean(0));        pinta false
// console.log(Boolean(-192));        pinta true
// console.log(Boolean(undefined));        pinta false
// console.log(Boolean(null));        pinta false


// El operador && devuelve true si ambas partes de la comparación
// son true. false en cualquier otro caso

// console.log(true && false);        pinta false
// console.log(false && false);        pinta false
// console.log(false && true);        pinta false
// console.log(true && true);        pinta true

// El operador || devuelve true si cualquier partes de la comparación
// son true. false en cualquier otro caso

// console.log(true || false);        pinta true
// console.log(false || false);        pinta false
// console.log(false || true);        pinta true
// console.log(true || true);        pinta true

// El resto de operadores lógicos también devuelven true o false

// console.log(1 == '1');        pinta true
// console.log(1 === '1');        pinta false           IGUALDAD DE TIPO DE DATOS Y DE VALOR

// console.log(1 != '1');        pinta false            DIFERENCIA  
// console.log(1 !== '1');        pinta true

// console.log(1 > 2);        pinta false
// console.log(1 >= 2);        pinta false

// console.log(1 < 2);        pinta true
// console.log(1 <= 2);        pinta true

// Podemos encadenar comparaciones. Los paréntesis nos ayudan
// a determinar el orden de ejecución


//                                                     0            true
// console.log((127 > 90) && ('asd' === null) || ([].length == 'SOMETHING'.toLowerCase()));
//                 true    &&     false          ||           FALSE
// true || false
// true
