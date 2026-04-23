const prompt = require("prompt-sync")();

const idade =Number(prompt('Qual o ano do seu nascimento? '))
const ano = Number(prompt('Digite o ano que estamos: '))

function calcularIdade(idade,ano){
    return ano - idade
}

console.log('Sua idade é: ', calcularIdade(idade,ano),'ano')
teste