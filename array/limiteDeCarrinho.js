let carrinho = ["camisa","calca",'tenis']
const limite = 3
if (limite > carrinho.length){
    carrinho.push('boné')
} else {
    carrinho.pop()
    carrinho.push('boné')
}

console.log(carrinho)