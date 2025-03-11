function meuCarro() {
    console.log(`Mustang`)
}

function executarComDelay(funcao, delay) {
    return function() {
        setTimeout(funcao, delay)
    }
}

const MeuCarroDelay = executarComDelay(meuCarro, 2000)

MeuCarroDelay()
