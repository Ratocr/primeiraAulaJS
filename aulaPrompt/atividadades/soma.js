const prompt = require('prompt-sync')()

const a = Number(prompt('Digite o primeiro numero: '))
const b = Number(prompt('Digite o segundo numero: '))
function soma(a,b){
    
    return a + b

}
console.log('A soma dos seus números é : ',soma(a,b))