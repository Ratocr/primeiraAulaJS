compras = ["pao","leite","cafe","acucar"];
if (compras.includes('cafe')){
    const i =  compras.indexOf('cafe')
    compras.splice(i,1)
    console.log(compras)
}else{
    console.log('Não tem café')
}
