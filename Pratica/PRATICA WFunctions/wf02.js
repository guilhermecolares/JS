function saudação() {
    console.log('Bem vindo')
}

function delay(func, ms) {
    return function() {
        setTimeout(func, ms)
    }
}

const delaySaudacao = delay(saudação, 2000)
delaySaudacao() 