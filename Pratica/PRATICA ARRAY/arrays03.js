function filtrarPares(n) {
    return n.filter(n => n%2 == 0)
}

console.log(filtrarPares([1, 2, 3, 4, 5, 6]));
console.log(filtrarPares([7, 8, 10, 13, 17]));