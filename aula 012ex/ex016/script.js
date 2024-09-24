function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()

    var fano = document.querySelector('input#txtano')
    var ano_nasc = Number(fano.value)

    var res = document.querySelector('div#res')

    if(ano_nasc.length == 0 || ano_nasc > ano_atual){
        window.alert('Verifique os dados e tente novamente!')
        return
    }

    var fsex = document.getElementsByName('radsex')
    var idade = ano_atual - ano_nasc
    var sexo = ''

    var imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    imagem.setAttribute('class', 'imagem')

    if(fsex[0].checked){
        sexo = 'Homem'
        if(idade >= 0 && idade < 12){
            //Criança
            imagem.setAttribute('src', 'fotos/criançaM.jpg')
        } else if(idade < 21){
            //Jovem
            imagem.setAttribute('src', 'fotos/jovemM.jpg')
        } else if(idade < 59){
            //Adulto
            imagem.setAttribute('src', 'fotos/adultoM.jpg')
        } else{
            //Idoso
            imagem.setAttribute('src', 'fotos/idosoM.jpg')
        }
    } else{
        sexo = 'Mulher'
        if(idade >= 0 && idade < 12){
            //Criança
            imagem.setAttribute('src', 'fotos/criançaF.jpg')
        } else if(idade < 21){
            //Jovem
            imagem.setAttribute('src', 'fotos/jovemF.jpg')
        } else if(idade < 59){
            //Adulto
            imagem.setAttribute('src', 'fotos/adultoF.jpg')
        } else{
            //Idoso
            imagem.setAttribute('src', 'fotos/idosoF.jpg')
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
    res.appendChild(imagem)
    
}