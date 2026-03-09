const estoque = ["arroz","feijao","carne",'sal']
if (!estoque.includes('sal')) {
    estoque.push('sal')
    console.log(estoque)
} else{
    console.log('Já tem o sal')
}


