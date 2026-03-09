// 1-function aprovados (alunos,acerto){
//      return (acerto /alunos) * 100
// }

// const alunos = 25
// const acerto = 15
// const porcentagem = aprovados(alunos,acerto)

// if(porcentagem >= 70){
//     console.log (`${porcentagem}% foram aprovados`)
// }else {
//     console.log(`${porcentagem}% foram reprovados`)
// }


//2- function precoCompra(preco,pago){
//     return pago - preco
// }
//  const preco = 150 
//  const pago = 100
//  const precofinal = precoCompra(preco,pago)

//  if(precofinal >= 0 ){
//     console.log("Compra Ok")
//  }else {
//     console.log(`falta R$ ${Math.abs(precofinal)}`)
//  }

// 3- function precoComDesconto(preco,desc){
//     return preco - (preco * desc) /100
// }

// const preco = 0
// const desc = 15
// const descontoAplicado = precoComDesconto(preco,desc)

// if( descontoAplicado > 0){
//     console.log(`Preço final R${descontoAplicado}`)
// } else {
//     console.log('Preço Inválido')
// }

// 4 -function precoComTaxa(preco, taxa){
//     return preco + (preco * taxa)/100
// }
// function precoPorPessoa(valorFinal,pessoas){
//     return valorFinal / pessoas
// }

// const preco = 250
// const taxa = 13
// const pessoas = 10
// const valorFinal =  precoComTaxa(preco,taxa)

// if ( pessoas > 0 && taxa > 0){
//     console.log (`o valor por pessoa é R$ ${precoPorPessoa(valorFinal,pessoas)}`)
// }else{
//     console.log('Valor inválido ')
// }

// 5 - function parImpar(n){
//     return n % 2 
// }

// const n = 2
// const resultado = parImpar(n)

// if (resultado === 0){
//     console.log(`${n} é par`)
// } else {
//     console.log(`${n} é impar`)
// }

//6 - function filaCinema(n){
//    return n % 3 === 0 && n % 5 === 0 
// }
// const n = 10
// const divisível = filaCinema(n)
//  if ( divisível) {
//     console.log('Fila A')
//  } else {
//     console.log('Fila B')
//  }

// 8 - function idadePermitida (idade,min,max){
//     return idade > min && idade < max
// }

// const idade = 18
// const max  = 17
// const min = 10
// const permitido = idadePermitida(idade,min,max)
 
// if(permitido){
//     console.log("Permitido")
// } else {
//     console.log("Não permitido")
// }

// 9 - function desbloquer (senha,reconhecimentofacial,codigoExtra){
//     return senha && reconhecimentofacial && codigoExtra
// }

// const senha = true
// const reconhecimentofacial = true
// const codigoExtra =  true
// const aceesoAoCelular =  desbloquer (senha,reconhecimentofacial,codigoExtra)

// if (aceesoAoCelular){
//     console.log("Acesso Permitido")
// } else {
//     console.log("Acesso Negado")
// }

// 10 - function login(loginCorreto,loginDigitado,senhaCorreta,senhaDigitada){
//     return loginDigitado === loginCorreto && senhaDigitada === senhaCorreta
// }

// const loginCorreto = 'hugo123'
// const loginDigitado = 'hugo123'
// const senhaDigitada = 1234
// const senhaCorreta = 1234
// const autenticacao = login(loginCorreto,loginDigitado,senhaCorreta,senhaDigitada)

// if (autenticacao){
//     console.log("Login efetuado")
// } else [
//     console.log("Login ou senha digitatos está incorreto")
// 

// 11 -  function precoFinal(preco,desconto,taxa){
//     return (preco - (preco * desconto)/100) + taxa / 100
// }
// const preco = 150
// const desconto = 20
// const taxa = 10
// const precoaplicado =  precoFinal(preco,desconto,taxa)

// if (desconto >= 0 && taxa >= 0){
//     console.log(`O preço final com as taxas e desconto é ${precoaplicado}`)
// } else {
//     console.log("valores inválidos")
// }

//12 - function tempoTotal(s,ms){
//     return (s * 1000) + ms
// } 
// const s = -1
// const ms = 500
// const tempoEmMili = tempoTotal(s,ms)

// if(s >= 0 && ms >= 0 ){
//     console.log(`Total em Milisegundos ${tempoEmMili}`)
// } else{
//     console.log("Dados Inválidos")
// }

// 13 - function comparacao(a,b){
//     return a > (b*2)
// }

// const a = 20
// const b = 10
// const AMaiorQueB = comparacao(a,b)

// if (AMaiorQueB){
//     console.log(`${a} maior que o dobro de ${b}`)
// } else {
//     console.log(`${a} não é maior que o dobro de ${b}`)
// }

// 14  function escolhaExclusiva(v,f){
//     return v || f;
// }

// const v =  false;
// const f  =  false;
// const verdadeiroOuFalso = escolhaExclusiva(v,f);

// if(verdadeiroOuFalso){
//     console.log('Verdadeiro');
// } else {
//     console.log('Falso');
// }