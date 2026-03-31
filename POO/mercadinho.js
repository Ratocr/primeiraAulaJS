class Produto{
    constructor(nome,preco,quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
}

class Carrinho{
     constructor(){
        this.itens = []
     }

     adicionarProdutos(produto){
        this.itens.push()
         console.log(`${qd}x ${produto.nome} adicionado ao carrinho`);
     }

     listarProdutosNoCarrinho() {
        console.log("\n--- ITENS NO SEU CARRINHO ---");
        this.itens.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nome} | Qtd: ${item.quantidade} | R$ ${item.preco}`);
})
     }
     


 class Mercado{
    constructor(nome){
        this.nome = nome
        this.estoque = []
    }
 }





































//  class Produto {
//     constructor(nome, preco, quantidade) {
//         this.nome = nome;
//         this.preco = preco;
//         this.quantidade = quantidade;
//     }
// }

// class Carrinho {
//     constructor() {
//         this.itens = [];
//     }
   
//      adicionarProduto(produto, qd) {
//         if (qd <= produto.quantidade) {
//           produto.quantidade -= qd;
//           this.itens.push();

//             console.log(`${qd}x ${produto.nome} adicionado ao carrinho`);
//         } else {
//             console.log(`Estoque insuficiente de ${produto.nome}`);
//         }
//     }
    
//     removerUltimoItem() {
//         if (this.itens.length > 0) {
//             const removido = this.itens.pop();
//             console.log(`Removido do carrinho: ${removido.nome}`);
//         } else {
//             console.log("O carrinho já está vazio.");
//         }
//     }

//     contarItens() {
//         return this.itens.length
//     }

//     calcularTotal() {
//         let total = 0;
//         this.itens.forEach(item => {
//             total += item.preco * item.quantidade;
//         });
//         return total;
//     }

//    
//         });
//     }
// }


// class Mercado {
//     constructor(nome) {
//         this.nome = nome;
//         this.estoque = [];
//     }

//     adicionarAoEstoque(produto) {
//         this.estoque.push(produto);
//     }

//         mostrarDisponiveis() {
//         console.log(`\n--- PRODUTOS DISPONÍVEIS NO ${this.nome.toUpperCase()} ---`);
//         this.estoque.forEach(produto => {
//             if (produto.quantidade > 0) {
//                 console.log(`${produto.nome} - R$ ${produto.preco} (Estoque: ${produto.quantidade})`);
//             }
//         });
//     }
// }


// const meuMercado = new Mercado("Mercadinho");

// const arroz = new Produto('Arroz',15,10)
// const feijao = new Produto('Feijao',15,10)

// meuMercado.adicionarAoEstoque(arroz)
// meuMercado.adicionarAoEstoque(feijao)


// meuMercado.mostrarDisponiveis()