const alunos = [
    { nome: "Ana", idade: 17, nota: 8.5 },
    { nome: "Carlos", idade: 19, nota: 6.0 },
    { nome: "Beatriz", idade: 18, nota: 7.8 },
    { nome: "Diego", idade: 16, nota: 5.5 },
    { nome: "Eduarda", idade: 20, nota: 9.2 }
];

function alunosAprovados(alunos) {
    console.log(alunos.filter(aluno => aluno.nota >= 7))
}

function ordenarPorNota(alunos) {
    console.log(alunos.sort((notaMaior, notaMenor) => notaMaior.nota - notaMenor.nota))
}

function calcularMedia(alunos) {
    const notas = alunos.map(aluno => aluno.nota)
    const somar = notas.reduce((total, nota) => total + nota, 0)
    console.log(somar / notas.length)
}

function maiorNota(alunos) {
    const notas = alunos.map(aluno => aluno.nota)
    const alunoMaiorNota = alunos.find(aluno => aluno.nota === Math.max(...notas))
    console.log(alunoMaiorNota)
}

function vefMaiorDeIdade(alunos) {
    const alunosMaiorDeIdade = alunos.every(aluno => aluno.idade >= 18)
    console.log(alunosMaiorDeIdade)
}

alunosAprovados(alunos)

ordenarPorNota(alunos)

calcularMedia(alunos)

maiorNota(alunos)

vefMaiorDeIdade(alunos)