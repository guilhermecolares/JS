function MudarCorDeFundo() {
    var horas = new Date().getHours();
    var cor;

    if (horas >= 6 && horas < 12) {
        cor = '#37EDDD';
    } else if (horas >= 12 && horas < 16) {
        cor = '#F0DB3A';
    } else if (horas >= 16 && horas < 19) {
        cor = '#EDA937';
    } else if (horas >= 19 && horas < 23) {
        cor = '#101218'
    }

    document.body.style.backgroundColor = cor;
}

MudarCorDeFundo();

setInterval(MudarCorDeFundo, 60000);