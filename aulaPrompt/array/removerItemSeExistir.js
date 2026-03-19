 compras = ["pao","leite","cafe","acucar"]
 if (compras.includes("cafe")){
    const i = compras.indexOf('cafe')
    compras.splice(i,1)
    
 } else {
    console.log('Não tem café')
 }

 console.log(compras)