function MudarCorDeFundo() {
    var horas = 17;
    var cor;

    if (horas >= 6 && horas < 12) {
        cor = '#37EDDD';
    } else if (horas >= 12 && horas < 16) {
        cor = '#CFCF00';
    } else if (horas >= 16 && horas < 19) {
        cor = '#CF8C1F';
    } else if (horas >= 19 && horas < 23) {
        cor = '#101218'
    }

    document.body.style.backgroundColor = cor;
}

function MudarImg() {
    var horas = 17;

    var imgManha = document.getElementById('manha');
    var imgMeioDia = document.getElementById('meiodia');
    var imgFimTarde = document.getElementById('fimtarde');
    var imgNoite = document.getElementById('noite');

    imgManha.classList.remove('mostrar');
    imgMeioDia.classList.remove('mostrar');
    imgFimTarde.classList.remove('mostrar');
    imgNoite.classList.remove('mostrar');

    if (horas >= 6 && horas < 12) {
        imgManha.classList.add('mostrar')
    } else if (horas >= 12 && horas < 16) {
        imgMeioDia.classList.add('mostrar')
    } else if (horas >= 16 && horas < 18) {
        imgFimTarde.classList.add('mostrar')
    } else {
        imgNoite.classList.add('mostrar')
    }

    var horario = document.getElementById('horario');

    horario.innerHTML = `Agora são ${horas} Horas.`
}

MudarCorDeFundo();
MudarImg();

setInterval(function() {
    MudarCorDeFundo();
    MudarImg();
}, 60000);