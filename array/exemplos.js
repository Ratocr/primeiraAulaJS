let frutas = ["maça", "banana", "uva", "morango"]

frutas.push('uva')

console.log(frutas)

frutas.pop()
console.log(frutas)

frutas.unshift('melancia')
console.log(frutas)


frutas.shift()
console.log(frutas.length)


frutas.splice(1, 2)
console.log(frutas)

frutas.push('uva')
console.log(frutas)

const temUva = frutas.includes('uva')
console.log(temUva)


console.log(frutas.indexOf('uva'))

const ordemAlfabetica = frutas.sort()
console.log(ordemAlfabetica)


const arrayParaString = frutas.join(' ')
console.log(arrayParaString)

