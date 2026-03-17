const prompt = require('prompt-sync')()


//  for (let i = 10; i >= 0 ; i --)
    
//     console.log(`numero é ${i}`)


// 2 const nu = 7
// for (let i = 0; i < 11; i++){
//     console.log(`${nu} X ${i} = ${nu * i} `)
// }

// 3 let somaPares = 0
// for( i = 1; i<= 20; i ++){
//     if( i % 2 === 0) {
//         somaPares += i
//     } 
// }

// console.log(`A soma de todos os pares é ${somaPares}`)+

// let estrela = '*' 

// for (let i = 0; i < 10; i++) {
//    estrela += '*'
// }

// console.log(estrela)


// for( i = 10; i >= 1 ; i--){
//     console.log(i)
//     if ( i === 1 ){
//         console.log('Feliz ano novo')
//     }
// }


// const numeroSecreto = 7
// let tentativas = 0
// let chute = 0

// while(numeroSecreto !== chute){
//     chute = Number(prompt('Escolha um número de 1 a 10 : '))

//     tentativas +=1
// }

// console.log(`Parabéns você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas`)


// let numero = 1
// let soma = 0

// while(numero !== 0){
//     numero = Number(prompt('Digite os números para soma, quando quiser parar digite 0 : '))
//     soma += numero 
// }
//     console.log(`A sua soma deu ${soma}`)

// let potencia = 1

// while(potencia < 1000){
//     potencia *= 2
//     console.log(potencia)
// }


// const senha = 'hugo33'
// let  senhaEscrita = ''

// while(senha !== senhaEscrita ){
//     senhaEscrita = String(prompt('Digite a sua senha: ').toLowerCase())
//     if (senha !== senhaEscrita){
//         console.log('senha invalida')
//     } else {
//         console.log('Acesso liberado')
//     }
    
// }


// let atual = 0;
// let proximo = 1;
// let soma = 0; 

// console.log(atual); 

// while (proximo < 100) {
//     console.log(proximo);
    
//     soma = atual + proximo; 
//     atual = proximo;        
//     proximo = soma;         
// }


// do while

// let opcao 
// do{
//    opcao = Number(prompt('Digite uma opção : n1 = olá ,  n2 = tchau , n3 = sair:  '))
//     switch(opcao){
//         case 1:
//         console.log('Olá')
//         break 
//         case 2:
//         console.log('tchau')
//          break 
//         case 3:
//         console.log('sair')
//          break 
//         default: 
//         console.log('Opçao invalida')
//          break 
//             }
//         }
//           while(opcao !== 3)


// let numero = 0

// do{
//     numero = Number(prompt('Digite um numero negativo ou positvo: '))
// }
// while(numero <=0)
// console.log(numero)

// let  n1 = 0
// let n2 = 0
// let opcao = 0
// do{ 
//     n1=Number(prompt('Digite o primeiro número: '))
//     n2=Number(prompt('Digite o segundo número: '))
//     opcao = (Number(prompt('1 = soma, 2 =  subtração, 3 = divisão, 4 = multiplicação, 5 = sair : ')))
//     switch(opcao){
//         case 1:
//             console.log(n1 + n2)
//             break
//         case 2:
//             console.log(n1 - n2)
//             break
//         case 3:
//             if(n2 !== 0){
//                 console.log(n1/n2)
//             } else {
//                 console.log('Zero não é divisor')
//             }
//             break
//         case 4:
//             console.log(n1 * n2)
//             break
//         case 5:
//             console.log('Ate logo')
//             break
//         default:
//             console.log('Opcão inválida')
//             break

//     }
//     if (opcao !== 5){
//          console.log('Qual o novo calculo ? ')
//     }
    

// } while( opcao != 5)

// let soma = 0;
// let contador = 0;
// let continuar;

// do {
//     let numero = Number(prompt("Digite um número:"));
    
//     soma += numero;
//     contador++;
    
//     // Perguntamos se o usuário quer continuar
//     continuar = prompt("Deseja adicionar mais? (s/n)").toLowerCase();

// } while (continuar === 's');

// let media = soma / contador;
// console.log(media)


