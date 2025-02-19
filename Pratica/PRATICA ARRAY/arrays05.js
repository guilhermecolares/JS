function filtrarPalavrasLongas(p) {
    return p.filter(car => car.length > 4)
}

console.log(filtrarPalavrasLongas(['cachorro', 'gato', 'papagaio', 'peixe']));