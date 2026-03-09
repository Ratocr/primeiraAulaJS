<<<<<<< HEAD
produtos = ["mouse","teclado","monitor"];
if (produtos.includes('monitor')){
    const i = produtos.indexOf('monitor')
    produtos.splice(i,1,'monitor gamer')
=======
let produtos = ["mouse","teclado","monitor "]
if (produtos.includes('monitor')){
    const i = produtos.indexOf('monitor')
    produtos.splice(i,1,"monitor gamer")
} else{
    console.log('Já tem monitor gamer')
>>>>>>> cd332544ed1ad4fee333320ba6fa5e3816785a5b
}

console.log(produtos)