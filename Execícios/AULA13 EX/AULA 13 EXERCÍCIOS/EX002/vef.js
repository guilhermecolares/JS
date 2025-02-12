function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = Number(document.getElementById('nascimento1').value)
    var res = document.getElementById('res')
    if (fAno == 0 || fAno > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var vsex = document.getElementsByName('radsex')
        var idade = ano - fAno
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (vsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'criança homem.jpg')
            }
            else if (idade < 21) {
                //Adolescente
                img.setAttribute('src', 'adolescente homem.jpg')
            }
            else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto homem.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'idoso homem.jpg')
            }
        } else if (vsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'criança mulher.jpg')
            }
            else if (idade < 21) {
                //Adolescente
                img.setAttribute('src', 'adolescente mulher.jpg')
            }
            else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto mulher.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'idoso mulher.jpg')
            }
        }
        res.innerHTML = `${genero} de ${idade} anos. <br> `
        res.appendChild(img)
    }

}