let aluno = {
    nome: 'Guilherme',
    notas: {
    nota1: 10,
    nota2: 8,
    nota3: 9
    }
};

const media = () => {
    let soma = aluno.notas.nota1 + aluno.notas.nota2 + aluno.notas.nota3
    return soma / Object.keys(aluno.notas).length
}

let AtualizarNota = (nota1, nota2, nota3) =>{
    aluno.notas.nota1 = nota1
    aluno.notas.nota2 = nota2
    aluno.notas.nota3 = nota3
    return media()
}

let mediaAtualizada = AtualizarNota(5, 6, 7);

if (mediaAtualizada >= 7) {
    console.log('Aprovado')
} else if (mediaAtualizada >= 5) {
    console.log('Recuperção')
} else {
    console.log('Reprovado')
}

console.log(mediaAtualizada)