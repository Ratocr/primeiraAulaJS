// class Pessoa{
//     constructor(nome,idade){
//         this.nome = nome
//         this.idade = idade
//     }

//     apresentar(){
//         console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}  anos`)
//     }
// }

// let pessoa1 =  new Pessoa('Hugo',18)
// pessoa1.apresentar()

class Produto{
    constructor(nome,validade,quantidade){
        this.nome = nome
        this.validade = validade
        this.quantidade = quantidade
    }
    apresentar(){
        console.log(`
            Produto: ${this.nome} 
            Validade: ${this.validade}
            Quantidade ${this.quantidade}`)
    }
}

let produto1 =  new Produto ('Farinha de Trigo','10/08/2026',1)
let produto2 =  new Produto ('Café em grãos','15/12/2026',15)
let produto3 =  new Produto ('Filtro Café','Inderteminado',500)

produto1.apresentar()
produto2.apresentar()
produto3.apresentar()