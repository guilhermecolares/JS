// Chamar this diretamente no escopo global, ele retorna o objeto global

// o 'this' no devtools retorna o objeto global, que é o window
// no node, o 'this' retorna o objeto global, que é o global

/*
console.log(this.document === document); // true

// Em navegadores, o objeto window é também o objeto global:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
*/

/*
// This no contexto de uma função

// Quando não estiver no modo estrito, o valor padrão de this é o objeto global.
function thisNaoEstrito() {console.log(this)}

// Em modo estrito, o valor de this permanece o mesmo, a menos que o valor seja undefined ou null.
function thisEstrito() {'use strict'; console.log(this)}

thisNaoEstrito(); // window
thisEstrito(); // undefined
*/

/*
// Como metodo de um objeto

const o = {
    prop: 100,
    f: function() {
        return this.prop;
    }
}

console.log(o.f()); // 100
*/

// this em arrow functions

// Nas arrow functions, o valor de this é determinado pela forma como a função é chamada.
// Arrow functions capturam o valor de this do contexto circundante, então o valor de this permanece o mesmo ao longo da vida da função e é sempre igual ao valor de this no contexto em que a função foi criada.

// CONTEXTO DE CRIAÇÃO: GLOBAL
const arrowFunctionThis = () => { console.log(this) };

// CONTEXTO DE CRIAÇÃO: OBJETO // ERRADO
const arrowFunctionThisObj = {
    prop: 100,
    arrowF: () => { console.log(this) }
}

// CONTEXTO DE CRIAÇÃO: OBJETO // CERTO
const obj1 = {
    exemplo1: function() {
        const f = (() => this)
        console.log()
    }
}