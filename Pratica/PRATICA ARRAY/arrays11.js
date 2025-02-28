let listaDeCompra = ['Arroz', 'Feijão', 'Hamburger']

let adiocionarProduto = (produto) => {
    listaDeCompra.push(produto)
}

let removerProduto = (produto) => {
    let procurar = listaDeCompra.indexOf(produto)
    if (procurar > -1) {
        listaDeCompra.splice(procurar, 1)
    } else {
        console.log('Produto nao encontrado')
    }
}

adiocionarProduto('Leite')

removerProduto('Feijão')

console.log(listaDeCompra)