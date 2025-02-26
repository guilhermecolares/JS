/*

// Function Tradicional
let variavel

function soma() {
    let num1 = 2, num2 = 3, soma = num1 + num2;
    return soma
}

variavel = soma()

console.log(variavel)

*/
//-----------------------------------------------
/*

// Function Anônima

let funcao = function() {
    return 'Olá Mundo!'
}

console.log(funcao())

*/
//-------------------------------------------------
/*

// Arrow Function

let funcao = () => 'Olá Mundo!'

let soma = (a, b) => { 
    return a + b
}

console.log(funcao())
console.log(soma(2, 8))

*/
//-----------------------------------------------
/*

// Function imediata / IIFE

const funcaoIIFE = (function() {
    return 'Olá Mundo!'
})

console.log(funcaoIIFE())

*/
//-----------------------------------------------
/*

// Function com parâmetros
function soma(num1, num2) {
    const soma = num1 + num2
    return soma
}

console.log(soma(14, 13))

*/

/*

// Function Anônima com parâmetros
let soma = function(num1, num2) {
    const soma = num1 + num2
    return soma
}

console.log(soma(14, 27))

*/

/*

// Arrow Function com parâmetros
const soma = (num1, num2, num3) => {
    const soma = num1 + num2 + num3
    return soma
}

console.log(soma(14, 13, 12))

const resultadoSoma = soma(14, 13, 12)

console.log(resultadoSoma)

console.log(resultadoSoma * 2)

//Arrow Function reduzida
const Arrowsoma = () => num1 + num2

console.log(Arrowsoma(44, 13))

*/

