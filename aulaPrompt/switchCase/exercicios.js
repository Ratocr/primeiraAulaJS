// function nomeDoDia(numero){
//     switch(Number(numero)){
//         case 1:
//             return "Domingo"    
//         case 2:
//             return "Segunda"
//         case 3:
//             return "Terça"
//         case 4:
//             return "Quarta"
//         case 5:
//             return "Quinta"
//         case 6:
//             return "Sexta"
//         case 7:
//             return "Sábado"
//         default:
//             return "Opção Inválida"

//     }
// }

// console.log(nomeDoDia('3'))

// 2 -  function plano(tipo){
//     switch(tipo.trim().toLowerCase()){
//         case 'basic':
//             return "Acesso Limitado"
//         case 'pro':
//             return "Acesso completo"
//         case 'premium':
//             return "Acesso completo + suporte"
//         default:
//             return "Plano inválido"
//         }
//     }

// console.log(plano(" PRO "))

//3-  function calculara(a,b,operacao){
//     switch(operacao){
//         case '+' :
//             return a + b
//         case '-':
//             return a - b
//         case '*':
//             return a * b
//         case '/':
//           if (b === 0){
//             return'Divisão por 0'
//           } else{
//            return (a / b).toFixed(2)
//           }
//         default:
//             return 'Operação inválida'  
//     }
// }

// console.log(calculara(2,4,'/'))

// 4 - function acaoSemaforo(cor){
//     switch(cor.trim().toLowerCase()){
//         case 'vermelho':
//             return 'Pare'
//         case 'Amarelo':
//             return 'Atenção'
//         case 'verde':
//             return 'Siga'
//         default:
//             return 'Cor Inválida'
//     }
// }

// console.log(acaoSemaforo('azul'))

function recomendar(categoria){
    switch(categoria.trim().toLowerCase()){
        case 'acao':
            return 'Duro de Matar'
        case 'comedia':
            return 'Todo Mundo em Panico'
        case 'terror':
            return 'Invocação do Mal'
        case 'romance':
            return 'Ps eu te amo'
        default:
            return 'Gênero Inválido'
    }
}

console.log(recomendar('acao'))