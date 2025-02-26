let carro = {
    modelo: 'Corolla',
    marca: 'Toyota',
    ano: 2022,
    verificar() {
        return new Date().getFullYear() - this.ano;
    }
}
console.log(carro.verificar());