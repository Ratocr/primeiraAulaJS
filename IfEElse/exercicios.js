// 1 -   function media(n1,n2){
//     return (n1 + n2) / 2
// }

// const n1 = 7
// const n2 = 8
// const notas = media(n1,n2)
// if (notas >= 7){
//     console.log("Você passou")
// } else {
//     console.log("Reprovado")
// }

// 2 - function calcularTroco(pago, compra){
//     return pago - compra
// }

// const pago = 200
// const compra = 100
// const troco = calcularTroco(pago,compra)
// if(troco >= 0){
//     console.log("compra Ok")
// } else {
//     console.log(`Falta pagar ${troco}`)
// }

// 3 - function precoComDesconto(preco,perc){
//     return  preco - (preco*perc/100)
// }
// const preco = 100
// const perc = 0
// const precofinal = 
//  if(perc > 0){
//     console.log(`O preço final é R$ ${precoComDesconto(preco,perc)}`)
//  } else {
//     console.log(`O preço sem desconto fica R$ ${preco}`)
//  }

//4 -  function totalComTaxa(valor, taxa){
//     return valor + ((valor * taxa) / 100 )
// }
// function valorPorPessoa(total, pessoas){
//     return total / pessoas
// }

// const valor = 250
// const taxa = 10
// const pessoas = 9
// const total = totalComTaxa(valor,taxa)

// if (pessoas > 0 && taxa >= 0){
//     console.log(valorPorPessoa(total,pessoas).toFixed(2))
// } else {
//     console.log("Dados Invalidos")
// }


function implica(p, q){
    return (!p) || q
}
const p = false
const q = true



if( implica (p,q)){
    console.log("P -> Q é verdadeiro")
} else {
    console.log("P -> Q é falso")
}