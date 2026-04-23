const prompt = require('prompt-sync')()

const a = Number(prompt('Digite o seu primeiro número: '))
const b = Number(prompt('Digite o seu segundo número: '))

function subtrair(a,b){
    return  a - b
}

console.log('A sua subtração é : ', subtrair(a,b))