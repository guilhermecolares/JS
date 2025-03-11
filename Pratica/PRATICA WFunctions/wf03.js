function somaComVerificacao() {
    return function vefArgs(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return 'Informe apenas números';
        } else {
            return a + b;
        }
    }
}