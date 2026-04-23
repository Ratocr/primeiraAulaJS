const prompt = require("prompt-sync")();

const n1 = Number(prompt('Digite o seu número: '))

function ehPar(n1){
    if (n1%2 == 0){
        console.log('É par')
    } else{
        console.log('É impar')
    }
}

console.log(ehPar(n1))
