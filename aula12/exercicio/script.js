function carregar(){
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = '../imagens/manha.png'
        msg2.innerHTML = 'Bom dia'
        document.body.style.background = '#fdd18c'
    }else if(hora >= 12  && hora < 18){
        //BOA TARDE
        img.src = '../imagens/tarde.png'
        msg2.innerHTML = 'Boa tarde'
        document.body.style.background = '#9374ac'
    }else{
        //BOA NOITE
        img.src = '../imagens/noite.png'
        msg2.innerHTML = 'Boa noite'
        document.body.style.background = '#04145a'
    }

}