const prompt = require('prompt-sync')()


class Produtos{
    constructor(nome,preco,quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    exibirProduto(){
        console.log(`${this.nome} - R$ ${this.preco} | Estoque ${this.quantidade}}`)
    }

    vender(){
        if(this.quantidade > 0 ){
            this.quantidade --
            console.log(`Unidade(s) de ${this.nome} foi vendido `)
        } else {
            console.log(`${this,nome} está sem estoque`)
        }
      }
    
      repor(qtdReposicao){
        if(quantidade > 0){
            this.quantidade += qtdReposicao
            console.log(`${this.quantidade}  de ${this.nome} adicionadas ao estoque`)
        }else{
            console.log('Quantidade inválida')
        }
      }
}

class Bebida extends Produtos {
    constructor(nome,preco,quantidade,tamanho){
        super(nome,preco,quantidade)
        this.tamanho = tamanho
    }
    exibirProduto(){
        console.log(`${this.nome} | R$ ${this.preco} | Tamnho - ${this.tamanho} | Estoque ${this.quantidade}}`)
    }
}

class Comida extends Produtos{
    constructor(nome,preco,quantidade,tipo){
        super(nome,preco,quantidade)
        this,tipo = tipo
    }
     exibirProduto(){
        console.log(`${this.nome} | R$ ${this.preco} | Tipo- ${this.tipo} | Estoque ${this.quantidade}}`)
    }

}

class Pedido { 
    constructor(cliente){
        this.cliente = cliente
        this.item = []
    }
    adicionarItem(produto){
        if(produto.quantidade > 0){
            this.item.push(produto)
        }else{
            console.log(`${this.nome}  esta sem estoque`)
        }
            
    }

    verPedido(){
        console.log(`${this.item} `)

        if(this.item.length === 0){
            console.log(`Pedido sem produto`)
        }

        this.item.forEach((item, index) => {console.log(`${index + 1}, ${item.nome}, R$ ${this.preco}`)})
    }
}