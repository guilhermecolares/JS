function formatarNomes(pessoas) {
    return pessoas.map(nomes => `${nomes.nome} ${nomes.sobrenome}`.toUpperCase())
}

const pessoas = [
    { nome: 'Carlos', sobrenome: 'Silva' },
    { nome: 'Mariana', sobrenome: 'Souza' },
    { nome: 'Fernando', sobrenome: 'Oliveira' },
    { nome: 'Amanda', sobrenome: 'Costa' }
];

console.log(formatarNomes(pessoas))