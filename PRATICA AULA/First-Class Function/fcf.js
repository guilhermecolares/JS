// atribuição de funções a variáveis

/*
const cavalo = function cavalor() {
    console.log('cavalo')
}

cavalo()
*/


// passar função como um argumento

/*
function meuCarro() {
    return 'Meu carro é um '
}

function apresentarCarro(funcaoDeChamarOCarro, nomeDoCarro) {
    console.log(funcaoDeChamarOCarro() + nomeDoCarro)
}

apresentarCarro(meuCarro, 'Ferrari')
*/


// retornar funções

function criarFuncao() {
    return function() {
        console.log('função criada')
        return function() {
            console.log('segunda função criada')
        }
    }
}

const func = criarFuncao()
func()

criarFuncao()()()