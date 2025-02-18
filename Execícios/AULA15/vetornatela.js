/*
let valores = ['Ferrari', 'Mercedes', 'Lamborghini']
let linha = ''

for(let chaves = 0; chaves<valores.length; chaves++) {
    linha += valores[chaves]
    if (chaves<valores.length - 1) {
        linha += ', ';
    }
}

console.log(`Carros atuais: ${linha}`)
*/ //FORMATO COM O "FOR" NORMAL

/* 
let valores = ['Ferrari', 'Mercedes', 'Lamborghini']
let linha = ''

for(let chaves in valores) {
    linha += valores[chaves]
    if (chaves<valores.length - 1) {
        linha += ', ';
    }
}

console.log(`Carros atuais: ${linha}`) // FORMATO "FOR" PARA ARRAY OU OBJETOS
console.log(`O índice atual do meu carro é ${valores.indexOf('Mercedes')}`)
*/


let valores = ['Açaí', 'Sorvete', 'Picolé']

for (let indice in valores) {
    console.log(valores[indice])
}


/*
let valores = ['Ferrari', 'Mercedes', 'Lamborghini']

for(let chaves = 0; chaves<valores.length; chaves++) {
    console.log(valores[chaves])
}
*/