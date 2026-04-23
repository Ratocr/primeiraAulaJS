const prompt = require('prompt-sync')()

const a =Number(prompt('Digite o número para ser dividido: '))
const b =Number(prompt('Digite o número para dividir: '))

function dividir(a,b){
    if (b> 0){
      console.log('O resultado é : ',  a/b)
    } else{
        console.log('Divisão por 0')
    }
}

console.log(dividir(a,b))