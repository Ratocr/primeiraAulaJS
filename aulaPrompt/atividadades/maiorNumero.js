const prompt = require("prompt-sync")();

const a = Number(prompt('Digite o primeiro número: '))
const b = Number(prompt('Digite o segundo número: '))

function maiorNumero(a,b){
    if (a<b){
        return `${b} é maior`
    } else{
        return `${a} é maior`
    }
}

console.log(maiorNumero(a,b))