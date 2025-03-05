/* 
function CavaloPotencia(CavPont) {
    this.potencia = CavPont;
    this.ligado = false;
}

const Mustang = new CavaloPotencia(487)
const Camaro = new CavaloPotencia(461)
const BugattiChiron = new CavaloPotencia(1500)

console.log(Mustang.potencia)

Mustang.cor = 'Azul Marinho'
Camaro.cor = 'Amarelo'
BugattiChiron.cor = 'Preto e Vermelho'

console.log(Mustang.cor)

Mustang.ligarDesligar = function() {
    if (this.ligado) {
        this.ligado = false
    } else {
        this.ligado = true
    }    
}

Mustang.ligarDesligar()
console.log(Mustang.ligado)
Mustang.ligarDesligar()
console.log(Mustang.ligado)

console.log(Mustang) 
*/