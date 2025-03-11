function somaComVerificacao(num1, num2) {
    const vefArgs = (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return 'Informe apenas números';
        } else {
            return a + b;
        }
    }
    console.log(vefArgs(num1, num2));
}

somaComVerificacao(2, 3);
somaComVerificacao(2, '3');