const Multiplicar = (a, b) => { return a * b };

const vefArgs = (vef) => {
    return function(a, b) {
        if (a < 0 || b < 0) {
            return 'Informe apenas números positivos';
        } else {
            return (vef(a, b));
        }
    }
}

const resultado = vefArgs(Multiplicar);

console.log(resultado(2, 3));
console.log(resultado(2, -3));