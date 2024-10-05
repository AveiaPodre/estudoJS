var botao = document.getElementById('botao')
var num = document.getElementById('number')
var res = document.getElementById('res')

botao.addEventListener('click', function(){
    res.innerHTML = parImpar(num.value)
})
document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        res.innerHTML = parImpar(num.value)
    }
})

function parImpar(value){
    if(isNaN(value) || value === ""){
        return "Por favor, digite um número válido..."
    }

    if(value % 2 == 0){
        return "O número é par"
    }
    else{
        return "O número é ímpar"
    }
}
