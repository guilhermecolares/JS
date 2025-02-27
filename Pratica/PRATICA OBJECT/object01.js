let Carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    cor: 'Preto',
}

Carro.dono = 'Joaquim'


Carro.descrever = `Este carro é um ${Carro['marca']} ${Carro['modelo']}, ano ${Carro['ano']}, cor ${Carro['cor']} e o dono é o ${Carro['dono']}`
console.log(Carro.descrever)

let TrocarCor = (Carro, cor) => {
    Carro.cor = cor
}

TrocarCor(Carro, 'Azul')

Carro.descrever = `Este carro é um ${Carro['marca']} ${Carro['modelo']}, ano ${Carro['ano']}, cor ${Carro['cor']} e o dono é o ${Carro['dono']}`

console.log(Carro.descrever)