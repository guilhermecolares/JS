let dadosJSON = `
[{
    "time": "Palmeiras",
    "cidade": "Sao Paulo",
    "estadio": {
        "nome": "Allianz Parque",
        "bairro": "Barra Funda",
        "capacidade": 43000,
        "publico_recorde": {
            "ano": 2023,
            "quantidade": 41457,
            "campeonato": "Brasileirão",
            "jogo": "Palmeiras x Corinthians"
        }
    },
    "fundacao": "1913"
},
{
    "time": "Flamengo",
    "cidade": "Rio de Janeiro",
    "estadio": "Maracana",
    "fundacao": "1903"
}]
`;

const objJSON = JSON.parse(dadosJSON);

console.log(objJSON[0].time, objJSON[0].cidade, objJSON[0].estadio.nome);
console.log(objJSON[1].time, objJSON[1].cidade, objJSON[1].estadio);