/*
    Wrapper Functions - String
const str1 = String('Guilherme');
const str2 = new String('Guilherme Colares');
console.log(`string1 = ${str1} | string2 = ${str2}`);

console.log(`string1 dividida: ${str1.split('')} | string2 dividida: ${str2.split('')}`);

const string2Convert = str2.valueOf();
console.log(typeof string2Convert);
*/


/*
    Wrapper Functions - Number
let num1 = Number('7');
let num2 = new Number('12');

console.log(`num1 = ${num1} | num2 = ${num2}`);

console.log(`num1 com 2 casas decimais: ${num1.toFixed(2)}
num2 com 2 casas decimais: ${num2.toFixed(2)}
num1 com 3 casas decimais: ${num1.toFixed(3)}
num2 com 3 casas decimais: ${num2.toFixed(3)}`);
console.log(typeof num1)
console.log(typeof num2);
*/


const bool1 = Boolean(0);
const bool2 = new Boolean('');

console.log(`bool1 = ${bool1} | bool2 = ${bool2}`);

console.log(`bool1 convertido para string: ${bool1.toString()} 
bool2 convertido para string: ${bool2.toString()}`);