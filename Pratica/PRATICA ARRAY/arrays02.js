function menorNumero(n) {
    n.sort((a, b) => b - a)
    return n[n.length - 1]
}

console.log(menorNumero([3, 5, 2, 8, 1]));
console.log(menorNumero([12, 4, 10, 0, 9]));