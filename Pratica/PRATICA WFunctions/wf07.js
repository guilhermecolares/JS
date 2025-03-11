const saudacao = (nome) => {
    console.log(`Olá, ${nome}!`);
}

function validarEntrada(func) {
    return function(nome) {
        if (typeof nome !== 'string' || nome.length === 0){
            console.log('Erro: Nome inválido');
            return;
        } else {
            func(nome);
        }
    }
}

const saudacaoValidada = validarEntrada(saudacao);

saudacaoValidada('Guilherme');
saudacaoValidada('');