function maiorNumero(p) {
    p.sort((a, b) => a - b)
    return p[p.length - 1]
}

console.log(maiorNumero([2, 8, 1, 6, 3, 7]))