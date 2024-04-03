function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} Horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'Dia.webp'
        document.body.style.background = '#ae9056'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'Tarde.webp'
        document.body.style.background = '#ae2905'
    } else {
        //BOA NOITE
        img.src = 'Noite.webp'
        document.body.style.background = '#121a37'
    }
}
