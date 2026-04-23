const prompt = require("prompt-sync")();

const c = Number(prompt('Digite os graus celsius: '))
function converterCelsiusParaFahrenheit(c){
    return c * 1.8 + 32
}

console.log(`Seus graus convetidos é de ${converterCelsiusParaFahrenheit(c)}°F `)