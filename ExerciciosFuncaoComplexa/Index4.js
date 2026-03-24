function soma(a,b) {
    const resultado = a + b;
    
    return console.log(resultado)
}

soma(2,2)


function media(n1,n2,n3){
    const media = (n1 + n2 +n3)/3

    return console.log(media)
}

media(5.5,2,10)

function horasParaMinutos(horas){
    const min = horas * 60;

    return console.log(min)
}

horasParaMinutos(24)

function minutosParaSegundo(min){
    const seg = min * 60;
     
    return console.log(seg)

}

minutosParaSegundo(60)

function areaTriangulo(base,altura){
    const area = (base * altura) / 2;

    return console.log(area)

}

areaTriangulo(20,40)

function imc(peso,altura){
    const resultado = peso/ (altura * altura);

    return console.log(resultado);
}

imc (79,1.69)

function precoComDesconto(preco,taxa){
     const precoFinal = preco - (preco* taxa / 100);

     return console.log(precoFinal)
}

precoComDesconto(120,30)

function precoComAcrescimo(preco,taxa){
    const precoFinal = preco + (preco * taxa / 100);

    return console.log(precoFinal)
} 

precoComAcrescimo(120,30)

function restoDaDivisao(a,b){
    const resto = a % b

    return console.log(resto)
}

restoDaDivisao(15,2)

function troco(valorPago, valorCompra){
    const valorFinal = valorPago - valorCompra

    return console.log(valorFinal)
}

troco(120,100)