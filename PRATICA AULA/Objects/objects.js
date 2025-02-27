/*
let perfilCarro = {
    verificar: () => {
        const anoAtual = new Date().getFullYear();
        const ano = 2022;
        return {
            anoAtual: anoAtual,
            marca: 'Chevrolet',
            Modelo: 'Camaro',
            ano: ano,
            idade: anoAtual - ano
        };
    }
};

console.log (perfilCarro.verificar())
*/

var anoAtual = new Date().getFullYear()

const Time = {
    Nome: 'Palmeiras',
    AnoCriação: 1914,
    Idade: () => {
        return anoAtual - Time.AnoCriação
    },
    IdadeAtual: () => `A Idade atual do palmeiras é ${Time.Idade()} Anos`
}

console.log(Time.IdadeAtual())



Time.nome2 = 'Arsenal'
Time.AnoCriação2 = 1902
Time.Idade2 = () => { return anoAtual - Time.AnoCriação2 }
Time.IdadeAtual2 = () => `A Idade atual do Arsenal é ${Time.Idade2()} Anos`

console.log(Time['IdadeAtual2']())

Time['Nome3'] = 'Real Madrid'
Time['AnoCriação3'] = 1902
Time['Idade3'] = () => { return anoAtual - Time['AnoCriação3'] }
Time['IdadeAtual3'] = () => `a Idade atual do Real Madrid é ${Time['Idade3']()} Anos`

console.log(Time['IdadeAtual3']())