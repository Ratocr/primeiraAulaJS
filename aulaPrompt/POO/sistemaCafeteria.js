class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }


    exibirProduto() {                           //alt 124
        console.log(`${this.nome} - R$ ${this.preco} | Estoque ${this.quantidade}`)
    }

    vender() {
        if (this.quantidade > 0) {
            this.quantidade --
            console.log(`Unidade de ${this.nome} foi vendida`)
        } else {
            console.log(`${this.nome} está sem estoque`)
        }
    }

    repor(quantidade) {
        if (quantidade> 0) {
            this.quantidade += quantidade
            console.log(`${this.quantidade}  ${this.nome} adicionadas ao estoque`)
        } else {
            console.log('Quantidade inválida')
        }
    }

}


class Bebida extends Produto {
    constructor(nome, preco, quantidade, tamanho) {
        super(nome, preco, quantidade)
        this.tamanho = tamanho
    }
    exibirProduto() {                           //alt 124
        console.log(`${this.nome} - R$ ${this.preco}  
        Tamanho - ${this.tamanho} | Estoque ${this.quantidade}`)
    }

}

class Comida extends Produto {
    constructor(nome, preco, quantidade, tipo) {
        super(nome, preco, quantidade)
        this.tipo = tipo
    }

    exibirProduto() {                           //alt 124
        console.log(`${this.nome} - R$ ${this.preco} 
       ${this.tipo} | Estoque ${this.quantidade} `)
    }
}

class Pedido {
    constructor(cliente) {
        this.cliente = cliente
        this.itens = []
    }

    adicionarItem(produto) {
        if (produto.quantidade > 0) {
            this.itens.push (produto)
            console.log(`${produto.nome} foi adicionado ao pedido, ainda tem em estoque ${produto.quantidade}`)
        } else {
            console.log(`${produto.nome} está sem estoque`)
        }
    }

    verPedidos() {
        console.log(`${this.itens}`)

        if (this.itens.length === 0) {
            console.log('Pedido sem produtos')
        }
        // for each quer dizer PARA CADA 
        this.itens.forEach((item, index) => {
            console.log(`${index + 1} - ${item.nome} R$ ${item.preco}`)
        })
    }

    calcularTotal() {
        let total = 0

        this.itens.forEach(item => { total += item.preco});

        return total
    }

     removerUltimoItem(){
       if (this.itens.length > 0){
        const removerItem = this.itens.pop()
        console.log(`O item ${removerItem.nome} foi removido `)
        } else{
            console.log('Sem item no pedido')
        } 
     }

     contarItens(){
         return console.log(this.itens.length) 
               
    }

    
    fecharPedido(){
        this.verPedidos()

        console.log(`Total a pagar R$ ${this.calcularTotal().toFixed(2)}`)
    }
}


class Cafeteria{
    constructor(nome){
        this.nome = nome
        this.cardapio = []
    }
    
    adicionarProduto(produto){
        this.cardapio.push(produto)

        console.log(`${produto.nome} foi adicionado ao pedido`)
        
    }
    
    listarCardapio(){
        
        console.log(`\n ---- CARDAPIO DA CAFETERIA ${this.nome} ---`)
        if (this.cardapio.length === 0 ){
            console.log(`Nenhum produto no cardápio`)

            return
        }
        
        for (let i = 0; i < this.cardapio.length ; i ++ ){
            let produto = this.cardapio[i]

            console.log((i + 1) + '.' + produto.nome + ' - R$ ' + produto.preco + ' Estoque: ' + produto.quantidade )
        }
    }

    buscarProduto(nome){
        return this.cardapio.find(produto => produto.nome === nome)
    }

     mostrarDisponiveis(){
        console.log(`---- PRODUTOS DISPONIVEIS ----`)

    
        this.cardapio.forEach((produto) => {
            if (produto.quantidade > 0){
                console.log(`${produto.nome} R$ ${produto.preco}`)
            }
        })

     }
}

// Criar cafeteria
const cafeteria = new Cafeteria('Cafezão')

// Criando bebidas
const cafeExpresso = new Bebida('Cafezinho',5,2,`pequeno`)
const cappuccino = new Bebida('Cappuccino',10, 1,'Grande')


// Criando comidas
const paoQue = new Comida('Pão de queijo', 10,5,'Salgado')
const croissant = new Comida('Croissant', 25,2,'Salgado')
const torta = new Comida('Torta de morango', 15,2,'Doce')

cafeteria.adicionarProduto(cafeExpresso)
cafeteria.adicionarProduto(cappuccino)
cafeteria.adicionarProduto(paoQue)
cafeteria.adicionarProduto(croissant)
cafeteria.adicionarProduto(torta)

cafeteria.listarCardapio()

console.log('-----Teste Vendas AVU-----')

cafeExpresso.vender()
cappuccino.vender()
paoQue.vender()
paoQue.vender()
paoQue.vender()
paoQue.vender()
paoQue.vender()
paoQue.vender()

console.log('-----REPONDO PÃO DE QUEIJO-----')
paoQue.repor(10)

paoQue.exibirProduto()


console.log('-----CRIANDO PEDIDO-----')
const pedido1 =  new Pedido('Hugo')

pedido1.adicionarItem(paoQue)
pedido1.adicionarItem(cafeExpresso)

cafeteria.mostrarDisponiveis()

pedido1.contarItens()

pedido1.fecharPedido()


// Listar cardapio novamente
cafeteria.listarCardapio()

const produtoEncotrado = cafeteria.buscarProduto('Cappuccino') // true ou false 

if (produtoEncotrado) {
    console.log('Produto foi encontrado')
} else {
    console.log('O produto não foi encontrado')
}



pedido1.removerUltimoItem()





