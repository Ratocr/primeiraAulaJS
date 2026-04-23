const prompt = require('prompt-sync')()

const n1 = Number(prompt("Digite sua primeira nota: "))
const n2 = Number(prompt("Digite sua segunda nota: "))

function media(n1,n2,media){
    return (n1 + n2) / media
}

console.log('Sua média é : ', media(n1,n2,2))