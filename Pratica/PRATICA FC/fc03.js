let ListaDeFilmes = [];

function Filme(título, diretor, lançamento, gênero) {
    this.título = título;
    this.diretor = diretor;
    this.lançamento = Number(lançamento);
    this.gênero = gênero;
    this.assistido = false;
}

let filme1 = new Filme('O Senhor dos Aneis', 'Peter Jackson', 2001, 'Fantasia');
let filme2 = new Filme('Harry Potter', 'Chris Columbus', 2001, 'Fantasia');
let filme3 = new Filme('O Hobbit', 'Peter Jackson', 2012, 'Fantasia');
let filme4 = new Filme('Vingadores', 'Joss Whedon', 2012, 'Ação');
let filme5 = new Filme('Homem de Ferro', 'Jon Favreau', 2008, 'Ação');
let filme6 = new Filme('O Rei Leão', 'Roger Allers', 1994, 'Animação');

function adicionarFilme(Filme) {
    ListaDeFilmes.push(Filme);
}

[filme1, filme2, filme3, filme4, filme5, filme6].forEach(adicionarFilme);

Filme.prototype.descrever = function () {
    return `O filme ${this.título}, dirigido por ${this.diretor}, foi lançado em ${this.lançamento} e pertence ao gênero ${this.gênero}. ${this.assistido ? 'Já foi assistido' : 'Ainda não foi assistido'}.`;
}

function listarFilmes() {
    return ListaDeFilmes.map(filme => filme.descrever());
}

Filme.prototype.atualizarAno = function (lançamento) {
    this.lançamento	= Number(lançamento);
}

function marcarComoAssistido(tituloFilme) {
    let Filme = ListaDeFilmes.find(filme => filme.título === tituloFilme)
    if (Filme) {
        Filme.assistido = true;
    } else {
        console.log('Filme não encontrado');
    }
}

function removerFilme(tituloFilme) {
    let procurarFilme = ListaDeFilmes.findIndex(Filme => Filme.título === tituloFilme);
    if (procurarFilme >= 0) {
        ListaDeFilmes.splice(procurarFilme, 1);
    } else {
        console.log('Filme não encontrado');
    }
}

console.log(listarFilmes());

filme1.atualizarAno(1993);
console.log(listarFilmes());

marcarComoAssistido('O Senhor dos Aneis');
console.log(listarFilmes());

removerFilme('O Hobbit');
console.log(listarFilmes());