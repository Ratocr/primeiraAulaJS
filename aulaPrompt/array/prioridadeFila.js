fila = ['ana', 'bruno','carla']
if(!fila.includes('vip')) {
    fila.unshift('vip')
    fila.shift()
    }

console.log(fila)