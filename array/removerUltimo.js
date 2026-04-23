let logs = ["ok","ok","erro"]
if (logs[logs.length - 1 ] === 'erro'){
    logs.pop()
} else {
    console.log('erro não é o ultimo')
}

console.log(logs)