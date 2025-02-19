function verificarPreço(produtos) {
    const verificar = produtos.filter(produto => produto.preco > 50)

    const mostrarProduto = verificar.map(produto => produto.nome)

    return mostrarProduto
}

const produtos = [
    { nome: 'Camiseta', preco: 29.90 },
    { nome: 'Tênis', preco: 199.90 },
    { nome: 'Relógio', preco: 89.90 },
    { nome: 'Boné', preco: 49.90 },
    { nome: 'Mochila', preco: 120.00 }
];


console.log(verificarPreço(produtos))