const livro = {
    título: 'O Senhor dos Aneis',
    autor: 'J. R. R. Tolkien',
    ano: 1954,
    gênero: 'Fantasia',
}

livro.discrição = `O livro ${livro.título} foi escrito por ${livro.autor} e publicado em ${livro.ano}. O gênero é de ${livro.gênero}`

livro.atualizarAno = (ano) => {
    livro.ano = ano
    livro.atualizarDescricao()
}

livro.atualizarDescricao = () => {
    livro.discrição = `O livro ${livro.título} foi escrito por ${livro.autor} e publicado em ${livro.ano}. O gênero é de ${livro.gênero}`
}

livro.atualizarAno(2021)

console.log(`O livro foi criado em ${livro.ano}`)
console.log(livro.discrição)