let numeros = []

let res = document.getElementById('res');

function adicionar() {
    let valor = Number(document.getElementById('num1').value);
    let lista = document.getElementById('cdn');

    if (isNaN(valor) || valor <= 0 || valor > 100) {
        alert('PREENCHA O CAMPO CORRETAMENTE!');
        return; 
    }


    if (numeros.includes(valor)) {
        alert('O valor ja foi adicionado!');
        return;
    }

    numeros.push(valor);

    let item = document.createElement('option');
    item.textContent = `valor ${valor} adicionado`;
    item.id = 'item';
    lista.appendChild(item);

    document.getElementById('num1').value = '';
    document.getElementById('num1').focus();

    res.style.display = 'none';
    }
    
    document.getElementById('num1').onkeydown = function(enviar) {
        if (enviar.key === 'Enter') {
            enviar.preventDefault();  
            adicionar();  
        }
    };

function finalizar() {
    let caracteres = numeros.length;
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);
    let soma = numeros.reduce((a, b) => a + b, 0)
    let media = soma / caracteres;

    res.style.display = 'block';
    res.innerHTML = `
    <p>Ao todo, temos ${caracteres} números cadastrados</p>
    <p>O maior valor informado foi ${maior}</p>
    <p>O menor valor informado foi ${menor}</p>
    <p>Somando todos os valores, temos ${soma}</p>
    <p>A média dos valores digitados é ${media}</p>
    `
}