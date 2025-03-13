let dadosJSON = `
[
  {
    "titulo": "O Hobbit",
    "autor": "J.R.R. Tolkien",
    "ano": 1937,
    "genero": "Fantasia"
  },
  {
    "titulo": "1984",
    "autor": "George Orwell",
    "ano": 1949,
    "genero": "Distopia"
  },
  {
    "titulo": "O Senhor dos Anéis: A Sociedade do Anel",
    "autor": "J.R.R. Tolkien",
    "ano": 1954,
    "genero": "Fantasia"
  }
]
`

const livrosJSON = JSON.parse(dadosJSON);

function listarLivros() {
    livrosJSON.forEach(Livros => {
        console.log(`Título: ${Livros.titulo}, Autor: ${Livros.autor}, Ano: ${Livros.ano}`)
    }
    )
}

function listarLivrosPorGenero(genero) {
    const livrosEncontrados = livrosJSON.filter(livro => livro.genero === genero);
    if (livrosEncontrados.length > 0) {
        livrosEncontrados.forEach(livro => {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}`);
        });
    } else {
        console.log('Livro não encontrado');
    }
}

function numeroDeLivros() {
    if (livrosJSON.length > 0) {
        console.log(`tem ${livrosJSON.length} livros na atual lista`)
    } else {
        console.log('Nenhum livro cadastrado')
    }
}

function listarLivrosPorAutor(autor) {
    const livrosEncontrados = livrosJSON.filter(livro => livro.autor === autor);
    if (livrosEncontrados.length > 0) {
        console.log(`Autor: ${autor}`)
        livrosEncontrados.forEach(livro => {
            console.log(`
                Livro:
                Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}`);
        })
    } else {
        console.log('Autor não encontrado')
    }
}

listarLivros()

listarLivrosPorGenero('Fantasia')

numeroDeLivros()

listarLivrosPorAutor('J.R.R. Tolkien')