produtos = ["mouse","teclado","monitor"];
if (produtos.includes('monitor')){
    const i = produtos.indexOf('monitor')
    produtos.splice(i,1,'monitor gamer')
}

console.log(produtos)