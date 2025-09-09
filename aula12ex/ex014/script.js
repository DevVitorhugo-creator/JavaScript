function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 18

        msg.innerHTML = `Agora são ${hora} horas.`
        
        if (hora >= 0 && hora < 12) {
            //bom dia
            img.src = 'manha.png'
            document.body.style.background = 'linear-gradient(to top, rgb(151, 176, 214), rgb(7, 63, 136), rgb(3, 19, 61)) no-repeat'
        } else if (hora >=12 && hora < 18) {
            //boa tarde
            img.src = 'tarde.png'
            document.body.style.background = 'linear-gradient(to top, rgba(72, 93, 124, 1), rgba(6, 42, 90, 1), rgba(2, 11, 34, 1)'
        } else if (hora >= 18 && hora <= 24) {
            //boa noite
            img.src = 'noite.png'
            document.body.style.background = 'linear-gradient(to top, rgba(43, 50, 59, 1), rgba(3, 13, 27, 1), rgba(1, 6, 19, 1)'
        } else {
            msg.innerHTML = '[ERRO] Horário inválido!'
        }
}
