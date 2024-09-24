var botao = document.getElementById('botao')
botao.addEventListener('click', tabuada)
document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        tabuada()
    }
})

function tabuada(){
    let num = document.getElementById('num').value
    let res = document.getElementById('res')
    res.innerHTML = ""
    
    if(num == "" || isNaN(num)){
        res.innerHTML = "Por favor, insira um número válido"
        return
    }

    num = Number(num)

    let tab = document.createElement('select')
    tab.setAttribute('id', 'tab')
    tab.setAttribute('size', 10)
    res.appendChild(tab)

    for(let i = 1; i <= 100; i++){
        let item = document.createElement('option')
        item.innerHTML = `${num} x ${i} = ${num*i}`
        tab.appendChild(item)
    }

}