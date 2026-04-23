const prompt = require("prompt-sync")();

const l = Number(prompt('Digite o valor do lado do quadrado: '))

function calcularPerimetroQuadrado(l){
    return l * 4
}

console.log('O perimetro do quadrado é : ',calcularPerimetroQuadrado(l))