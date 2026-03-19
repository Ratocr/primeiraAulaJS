const prompt = require('prompt-sync')()

// class Pessoa {
//     constructor(nome,idade){
//         this.nome = nome
//         this.idade =  idade
//     }
// }

// class Funcionario extends Pessoa{
//     constructor(nome,idade,salario){
//         super(nome,idade)
//         this.salario = salario
//     }
//     apresentar(){
//         console.log(`Oi meu nome é ${this.nome}, tenho ${this.idade} anos e ganho R$ ${this.salario},00`)
//     }
// }

// let pessoaNome = prompt('Escreva o seu nome: ')
// let pessoaIdade = prompt('Escreva sua idade: ')
// let pessoaSalario = prompt('Escreva o seu salario: ')

// const funcionario1 = new Funcionario (pessoaNome,pessoaIdade,pessoaSalario)
// funcionario1.apresentar()

 class Conta{
    constructor(titular,saldo){
        this.titular = titular
        this.saldo = saldo
    }
    depositar(valor){
    this.saldo += valor
    console.log(`Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`)
    }
    sacar(valor){
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente! Seu saldo atual é R$ ${this.saldo}`);
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`)

    }
  }
}

    let nomeTitular = prompt("Quem é o titular: ")
    const conta1 = new Conta(nomeTitular,2500)

    let valorDeposito = Number(prompt('Qual o valor para depositar? '));
    conta1.depositar(valorDeposito);

    let valorSaque = Number(prompt('Quanto você quer sacar?  '));
    conta1.sacar(valorSaque)

// 3 class Aluno{
//     constructor(nome, nota){
//         this.nome = nome
//         this.nota = nota
//     }
//     verificarSituacao(){
//         if(this.nota >= 7.0){
//             console.log('Aprovado')
//         }else{
//             console.log('Reprovado')
//         }
//     }
// }

// let nomeAluno = prompt('Digite o seu nome: ')
// let notaAluno = parseFloat(prompt('Digite a sua nota: '))

// const aluno1 = new Aluno(nomeAluno,notaAluno)
// aluno1.verificarSituacao()

// class Produto{
//     constructor(nome,preco,quantidade){
//         this.nome = nome
//         this.preco = preco
//         this.quantidade = quantidade
//     }
    
//     vender(qd){
//         this.quantidade -= qd
//         console.log(`Você tem ${this.quantidade} em seu estoque`)
//     }
//     repor(qd){
//         this.quantidade += qd
//         console.log(`Você adicionou ${this.quantidade} em seu estoque`)
//     }
// }

// let nomeProduto = prompt('Nome produto: ')
// let precoProduto = Number(prompt('Valor do produto é: '))
// let quantidadeProduto = Number(prompt('Quantidade do Produto: '))


// const produto1 = new Produto(nomeProduto,precoProduto,quantidadeProduto)
// let produtosVendidos = Number(prompt('Quanto vendeu ?'))
// produto1.vender(produtosVendidos)

// let adicionarEstoque = Number(prompt('Quanto adc ?'))
// produto1.repor(adicionarEstoque)