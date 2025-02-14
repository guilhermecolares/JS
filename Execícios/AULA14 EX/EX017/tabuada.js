function gerar() {
    var num1 = Number(document.getElementById('num1').value)
    var stabuada = document.getElementById('restabuada')

    stabuada.innerHTML = ''

    if (isNaN(num1)) {
        window.alert('PREENCHA O CAMPO CORRETAMENTE!')
    } else {
        for (var m1 = 1; m1 <= 10; m1++) {
            var option = document.createElement('option');
            option.value = `valor${m1}`;
            option.textContent = `${num1} x ${m1} = ${num1 * m1}`;
            stabuada.appendChild(option);
        }
    }
}