var botao = document.getElementById('botao')
botao.addEventListener('click', contar)
document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        contar()
    }
})

function contar(){
    let init = document.getElementById('init').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let res = document.getElementById('res')

    if(init === '' || fim === '' || passo === '' || isNaN(init) || isNaN(fim) || isNaN(passo)){
        res.innerHTML = "Um ou mais dados inválidos, revise e tente novamente!"
        return
    }

    init = Number(init)
    fim = Number(fim)
    passo = Number(passo)

    if(passo <= 0){
        res.innerHTML = "Passo inválido, deve ser maior que zero!"
        return
    }

    res.innerHTML = 'Contando: <br>'

    if(init < fim){
        for(let i = init; i <= fim; i += passo){
            res.innerHTML += `${i} \u{1F449}`
        }
    }
    else if(init > fim){
        for(let i = init; i >= fim; i -= passo){
            res.innerHTML += `${i} \u{1F449}`
        }
    }
    else{
        res.innerHTML += init
    }
    res.innerHTML += `\u{1F3C1}`
}