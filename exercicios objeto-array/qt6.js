inverso = valor => {
    switch(typeof valor){
        case 'number':
            return valor * -1
        case 'boolean':
            return !valor
        default:
            return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
    }
}

console.log(inverso(-10))
console.log(inverso(false))
console.log(inverso('false'))