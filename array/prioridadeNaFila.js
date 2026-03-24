let fila = ["ana","bruno","carla",'vip']
if (fila.includes('vip')){
    console.log('Vip já esta na fila')
}else{
    fila.unshift("vip")
    console.log(fila)
}
fila.shift()
console.log(fila)