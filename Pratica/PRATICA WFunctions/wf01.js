const dobro = (num) => {return num * 2};

function logWrapper(func) {
    return function(num) {
        console.log(`Antes: ${num}`);
        const resultado = func(num);
        console.log(`Depois: ${resultado}`);
        return resultado;
    }
}

const dobroWrapper = logWrapper(dobro);
dobroWrapper(5);