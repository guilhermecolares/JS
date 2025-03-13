const produtos = [
    { nome: "Arroz", preco: 20, categoria: "Alimentos" },
    { nome: "Feijão", preco: 12, categoria: "Alimentos" },
    { nome: "Celular", preco: 1200, categoria: "Eletrônicos" },
    { nome: "Notebook", preco: 3500, categoria: "Eletrônicos" },
    { nome: "TV", preco: 2000, categoria: "Eletrônicos" },
    { nome: "Sabão", preco: 5, categoria: "Limpeza" },
    { nome: "Detergente", preco: 3, categoria: "Limpeza" }
];

function listarEletronicos(produtos) {
    const produtosEletronicos = produtos.filter(produto => produto.categoria === "Eletrônicos");
    console.log(`Produtos Eletrônico: ${produtosEletronicos.map(produto => produto.nome).join(', ')}`);
}

function listarProdutos(produtos) {
    console.log(`Lista de Nomes: ${produtos.map(produto => produto.nome).join(', ')}`);
}

function calcularPrecoTotal(produtos) {
    const preços = produtos.map(produto => produto.preco);
    const somarPreços = preços.reduce((total, preço) => total + preço, 0);
    console.log(`Preço total dos produtos: ${somarPreços.toFixed(2)}`);
}

function ordenarProdutos(produtos) {
    const produtosOrdenados = produtos.sort((maiorPreço, menorPreço) => maiorPreço.preco - menorPreço.preco);
    console.log(`Produtos Ordenados: ${produtosOrdenados.map(produto => produto.nome)}`);
}

function listaDeProdutos(produtos) {
    console.log(`Produtos: ${produtos.map(produto => produto.nome).join(', ')}`);
}

listarEletronicos(produtos);

listarProdutos(produtos);

calcularPrecoTotal(produtos);

ordenarProdutos(produtos);

listaDeProdutos(produtos);