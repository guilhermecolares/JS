function filtrarMaioresQueDez(numeros) {
    return numeros.filter(num => num > 10)
}

console.log(filtrarMaioresQueDez([5, 12, 8, 20, 3, 15]));

console.log(filtrarMaioresQueDez([1, 2, 3, 4, 5]));
