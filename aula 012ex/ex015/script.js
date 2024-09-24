function carregar(){
    var msg = document.querySelector('div#mensagem')
    var img = document.querySelector('img#imagem')
    
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 6 && hora < 12){
        //Bom dia
        img.src = "fotos/manha.jpg"
        document.body.style.background = '#bf7f19'
    } else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = "fotos/tarde.jpg"
        document.body.style.background = '#c9460e'
    } else{
        //Boa noite
        img.src = "fotos/noite.jpg"
        document.body.style.background = '#8c5ad1'
    }
}