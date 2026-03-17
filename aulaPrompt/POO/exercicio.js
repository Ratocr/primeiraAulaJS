const prompt = require('prompt-sync')()



class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}  anos`)
    }
}

const nomeInformado = prompt('Digite o seu nome: ');
const idadeInformada = prompt('Digite sua idade: ');

let pessoa1 =  new Pessoa (nomeInformado, idadeInformada)

pessoa1.apresentar()





