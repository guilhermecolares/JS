function Carro(marca, modelo, ano, cor) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.cor = cor
}

Carro.prototype.descrever = function() {
    return `Este é o meu ${this.marca} ${this.modelo}, Fabricado em ${this.ano}, na cor ${this.cor}` 
}

Carro.prototype.atualizarCor = function(cor) {
    this.cor = cor
}

let meuCarro = new Carro('Toyota', 'Corolla', 2020, 'Preto')

console.log(meuCarro.descrever())

meuCarro.atualizarCor('Azul')

console.log(meuCarro.descrever())