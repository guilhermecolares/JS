function adicionar() {
    let informação = document.getElementById('add').value.trim();
    let campoLista = document.getElementsByTagName('ul')[0];

    if (informação === '') { //CAMPO EM BRANCO
        window.alert('Digite algo antes de adicionar!');
        return;
    }

    let lista = document.createElement('li'); //LISTA

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'check';
    lista.appendChild(checkbox);

    let texto = document.createElement('span');
    texto.textContent = informação;
    lista.appendChild(texto);

    let butãoEditar = document.createElement('button'); //EDITAR
    butãoEditar.id = 'editar';
    butãoEditar.onclick = function() {
        let novoTexto = prompt('Editar:', texto.textContent);
        if (novoTexto !== null && novoTexto.trim() !== '') {
            texto.textContent = novoTexto;
        }
    }
    
    let imgEditar = document.createElement('img'); //IMG DO EDITAR
    imgEditar.src = 'imgeditar.png';
    imgEditar.alt = 'Editar';
    imgEditar.id = 'imgEditar';
    butãoEditar.appendChild(imgEditar);

    let butãoDeletar = document.createElement('button');
    butãoDeletar.textContent = 'X'
    butãoDeletar.id = 'deletar';
    butãoDeletar.onclick = function() {
        campoLista.removeChild(lista);
    }

    campoLista.appendChild(lista);
    lista.appendChild(butãoEditar);
    lista.appendChild(butãoDeletar);

    document.getElementById('add').value = '';
}