const chaveAPI = 'efc8763a0d379375246dbdc318b18fb6'
const cidade = 'Taboão da Serra'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)}&appid=${chaveAPI}&units=metric&lang=pt_br`

fetch(url)
    .then(dados => dados.json())
    .then(dados => {
        console.log(`Cidade: ${dados.name}`)
        console.log(`Temperatura: ${dados.main.temp}°C`);
        console.log(`O clima atual: ${dados.weather[0].description}`);
    })
    .catch(erro => console.log('Erro ao carregar os dados', erro));