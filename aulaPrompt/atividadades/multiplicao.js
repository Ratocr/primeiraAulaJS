const prompt = require('prompt-sync')()

const a = Number(prompt('Digite o número para ser multiplicado : '))
const b = Number(prompt('Digite o número para multiplicar : '))

function multiplicar(a,b){
    return a*b
}

console.log('Seu resultado é : ', multiplicar(a,b) )