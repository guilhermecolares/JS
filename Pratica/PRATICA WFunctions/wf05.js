/*
console.time('Tempo de execução');
function saudação() {
    console.log('Bem vindo')
}
console.timeEnd('Tempo de execução');
*/
function logExecutionTime(func) {
    return function(...args) {
        console.time('Tempo de execução');
        const resultado = func(...args);
        console.timeEnd('Tempo de execução');
        return resultado;
    }
}

function somar(a, b) {
    return a + b;
}

const somarTempo = logExecutionTime(somar);

console.log(somarTempo(2, 3));