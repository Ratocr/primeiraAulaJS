const prompt = require('prompt-sync')()

const n = Number(prompt('Digete o número: ')) 
function dobro(n){
    return (n*2)
}
console.log('O dobro no número é : ', dobro(n) )