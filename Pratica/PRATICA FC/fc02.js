let biblioteca = [];

function Livro(título, autor, ano, lido) {
    this.título = título;
    this.autor = autor;
    this.ano = Number(ano);
    this.lido = false;
}

function adicionarLivro(Livro) {
    biblioteca.push(Livro)
}

Livro.prototype.descrever = function() {
    return `O livro ${this.título}, escrito por ${this['autor']}, foi publicado em ${this.ano}, ${
        this.lido ? 'Já foi lido' : 'Ainda não foi lido'}.`
}

Livro.prototype.marcarComoLido = function() {
    this.lido = true;
}

Livro.prototype.atualizarAno = function(ano) {
    this.ano = Number(ano);
}

let livro1 = new Livro('O Senhor dos Aneis', 'J. R. R. Tolkien', 1954, false);

let livro2 = new Livro('Harry Potter', 'J. K. Rowling', 1997, false);

livro2.atualizarAno(1998);

let livro3 = new Livro('O Hobbit', 'J. R. R. Tolkien', 1937, false);

adicionarLivro(livro1);
adicionarLivro(livro2);
adicionarLivro(livro3);

function listarLivros() {
    return biblioteca.map(livro => livro.descrever());
}

function marcarLivroComoLido(título) {
    let livro = biblioteca.find(livro => livro.título === título);
    if (livro) {
        livro.marcarComoLido();
    } else {
        console.log('Livro não encontrado');
    }
}

function removerLivro(título) {
    let procurar = biblioteca.findIndex(livro => livro.título === título);
    if (procurar >= 0) {    
        biblioteca.splice(procurar, 1);
    } else {    
        console.log('Livro não encontrado');
    }
}

console.log(listarLivros());

marcarLivroComoLido('Harry Potter');
console.log(listarLivros());

removerLivro('O Hobbit');
console.log(listarLivros());