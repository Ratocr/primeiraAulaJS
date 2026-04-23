const prompt = require("prompt-sync")();

const preco = Number(prompt("Qual é o preço ? "));
const descontoPercent = Number(prompt("Qual o desconto ? "));
function calcularDesconto (preco, descontoPercent) {
  return preco - (preco * descontoPercent) / 100
}

console.log('O seu valor com desconto é : ', calcularDesconto(preco,descontoPercent))
