/*
function thisBind() {
    console.log(this)
}

const obj = {exemplo: 'teste'}

thisBind = thisBind.bind(obj)
thisBind()
*/

/*

// - EXEMPLO BIND

function camaro() {
    console.log(this)
}


let carro = {
    marca: 'Chevrolet',
    cor: 'Amarelo',
    ano: 2021,
    modelo: 'Camaro',
}

camaro = camaro.bind(carro)
camaro()

console.log(carro.ano, carro.modelo)
*/



// - EXEMPLO CALL

const time1 = {
    nome1: 'Palmeiras',
    mostrarTime: function() {
        console.log(this)
    }
}

time1.mostrarTime()

const time2 = {
    nome2: 'Arsenal'
}

const time3 = {
    nome3: 'Real Madrid'
}

time1.mostrarTime.call([time2, time3])

/*
const time1 = {
    nome1: 'Palmeiras',
    mostrarTime: function() {
        console.log(this)
    }
}

time1.mostrarTime()

const time2 = {
    nome2: 'Arsenal'
}

const time3 = {
    nome3: 'Real Madrid'
}

time1.mostrarTime.apply(time2, time3)
*/