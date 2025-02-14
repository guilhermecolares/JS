function contar() {
    var numero = Number(document.getElementById('inicio').value)
    var final = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var resultado = document.getElementById('res')

    resultado.innerHTML = '<p>Contando:</p>'

    if (isNaN(numero) || isNaN(final) || isNaN(passo)) {
        window.alert('PREENCHA OS DADOS CORRETAMENTE!')
    } else if (numero <= final){ // CONTAGEM CRESCENTE
        for (var n1 = numero; n1 <= final; n1 += passo) {
            resultado.innerHTML += `${n1}👉`
        }
    } else { // CONTAGEM DESCRESCENTE
        for (var n1 = numero; n1 >= final; n1 -= passo) {
            resultado.innerHTML += `${n1}👉`
        }
    }
    resultado.innerHTML += '🏁'
}