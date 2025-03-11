const Notas = {
    "Matematica": 3,
    "Portugues": 8,
    "Geografia": 6,
}

function calcularMedia(notas = Notas) {
    let soma = 0;
    for (let nota in notas) {
        soma += notas[nota];
    }
    return soma / Object.keys(notas).length;
}

function Aprovar(media) {
    return calcularMedia() >= 7 ? "Aprovado" : "Reprovado";
}

function Tempo(funcao) {
    return function() {
        console.time('Tempo de execução');
        const result = funcao();
        console.timeEnd('Tempo de execução');
        return result;
    }
}

const VerificarAprovacao = Tempo(Aprovar);

console.log(VerificarAprovacao());