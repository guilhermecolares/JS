function ContaBancaria() {
    this.títular = 'Guilherme'
    this.saldo = 0

    this.Depositar = function(valor) {
        if (this.saldo < 0) {
            console.log('Não é possível depositar um valor negativo')
        } else {
            return this.saldo += valor
        }
    }

    this.Sacar = function(valor) {
        if (this.saldo < valor) {
            console.log('Saldo insuficiente')
        } else {
            return this.saldo -= valor
        }
    }

    this.verSaldo = function() {
        return console.log(this.saldo)
    }
}

let minhaConta = new ContaBancaria()

minhaConta.Depositar(100)
minhaConta.verSaldo()

minhaConta.Sacar(30)
minhaConta.verSaldo()

minhaConta.Sacar(100)