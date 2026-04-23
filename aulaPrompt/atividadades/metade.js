const prompt = require('prompt-sync')()

const n = Number(prompt('Digite um núnmero: '))
function metade(n){
    return n/2
}
console.log('A metade é : ', metade(n))