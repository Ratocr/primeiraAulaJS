const prompt = require('prompt-sync')()

class Pessoa {
    constructor(nome,idade){
        this.nome = nome,
        this.idade = idade
    }
    apresentar(){
        console.log(`Meu nome é ${nome} `)
    }
}

class Aluno extends Pessoa{
    constructor(nome,idade, curso){
        super(nome,idade)
        
        this.curso =  curso
    }
    estudar(){
        console.log(`${this.nome} está estudando`)
    }
}

class Professor extends Pessoa{
    constructor(nome,idade,disciplina){
        super(nome,idade)

        this.disciplina = disciplina
    }

    ensinando(){
        console.log(`${this.nome} está ensinando`)
    }
}

const profNome = prompt('Digite o nome do professor : ')
const profIdade = prompt('Digite a idade do professor: ')
const profIDiciplina = prompt('Digite a diciplina do professor: ')

const professor1 =  new Professor(profNome,profIdade,profIDiciplina)
console.log(professor1)
professor1.ensinando()
const alunofNome = prompt('Digite o nome do aluno : ')
const alunoIdade = prompt('Digite a idade do aluno : ')
const alunoDiciplina = prompt('Digite a diciplina do aluno: ')

const aluno1 =  new Aluno(alunofNome,alunoIdade,alunoDiciplina)
console.log(aluno1)
aluno1.estudar()