// Exemplo de escopo local

// código aqui NÃO PODE usar nomeCarro
// console.log(nomeCarro)

/* function carros() {
    var nomeCarro = "Fusca";

    console.log(nomeCarro)
    // código aqui PODE usar nomeCarro
}

carros()
*/

// Exemplo de escopo global

/*
var nomeCarro = "Maserati";

// código aqui PODE usar nomeCarro
console.log(nomeCarro)

function carros() {
    // código aqui PODE usar nomeCarro
    console.log(nomeCarro)
}

carros()
*/

// Escopo de função e escopo de bloco.

for (let i = 0; i < 10; i++)
    console.log(i)


for (var j = 0; j < 10; j++)
    console.log(j)