const prompt = require('prompt-sync')()

const a = Number(prompt('Qual a altura do retangulo: '))
const b = Number(prompt('Qual a base do retangulo: '))

function areaRetangulo(a,b){
    return a*b
}

console.log('A área do retangulo é : ', areaRetangulo(a,b),'m²')