let tarefas = ["lavar louca","estudar","treinar"]
if (tarefas.includes('estudar')){
    const i = tarefas.indexOf('estudar')
    tarefas.splice(i,1)
} else {
    tarefas.push('estudar')
}

console.log(tarefas)