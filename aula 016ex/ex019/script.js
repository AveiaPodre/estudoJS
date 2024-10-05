var lista = []
var button = document.getElementById('button')
var res = document.getElementById('res')
var final = document.getElementById('final')

button.addEventListener('click', function(){
    let num = document.getElementById('num')
    if(num.value.length == 0){
        res.innerHTML = "Insira um número válido..."
    }
    else{
        add(num)
    }
})

final.addEventListener('click', analisar)

function add(num){
    value = num.value
    if(lista.indexOf(value) != -1){
        res.innerHTML = "Número já existente na lista..."
    }
    else{
        lista.push(value)

        let tabela = document.getElementById('tabela')
        let item = document.createElement('option')
        item.innerHTML = `Valor ${value} adicionado`

        tabela.appendChild(item)
        res.innerHTML = ""
    }
}

function analisar(){
    if(lista.length == 0){
        res.innerHTML = "Lista vazia"
    }
    else{
        lista.sort((a, b) => a - b)
        let len = lista.length
        let sum = 0

        for(let i = 0; i < len; i++){
            sum += Number(lista[i])
        }

        res.innerHTML = `<p>Analisando...<p>`

        setTimeout(() => {
            res.innerHTML = `
            <p>Ao todo, temos ${len} números.<p>
            <p>O maior valor informado foi ${lista[len-1]}.<p>
            <p>O menor valor informado foi ${lista[0]}.<p>
            <p>Somando todos os valores, temos ${sum}.<p>
            <p>A média dos valores digitados é ${sum/len}.<p>
        `
        }, 2000)
    }
}