let num = [7,2,9,4]
num.push(7)
console.log(num)

console.log(`Tamanho : ${num.length}`)
num.sort()
console.log(num)
num.pop()
console.log(num)

for(let pos in num){
    console.log(num[pos])
}

//console.log(num.indexOf(9))