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

const professor1 =  new Professor('Igor', 65, 'T.I')
console.log(professor1)
professor1.ensinando()

const aluno1 =  new Aluno('Fulano',62,'T.I')
console.log(aluno1)
aluno1.estudar()