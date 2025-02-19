function filtrarMaioresDeIdade(pessoas) {
    return pessoas.filter(pessoa => pessoa.idade >= 18)
}

const pessoas = [
    { nome: 'Guilherme', idade: 19 },
    { nome: 'Pedro', idade: 17 },
    { nome: 'Manuella', idade: 18},
    { nome: 'Ricardo', idade: 16},
    { nome: 'Laura', idade: 18},
]

console.log(filtrarMaioresDeIdade(pessoas))