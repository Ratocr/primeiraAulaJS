const prompt = require("prompt-sync")();

const valorDoProduto = Number(prompt('Indique o valor do produto: '))
const valorPago = Number(prompt('Indique o valor do pago: '))

function calcularDesconto(valorDoProduto,valorPago){
    return valorPago - valorDoProduto
}

console.log('O troco será é de R$ ', calcularDesconto(valorDoProduto,valorPago))