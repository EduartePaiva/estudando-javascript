// Arrow Function
const soma = (a,b) => a+b
console.log(soma(2,3))

// Arrow Function (this)
const lexco1 = () => console.log(this === exports)
const lexco2 =  lexco1.bind({})
lexco1()
lexco2()

// parametros default
function log(testo = 'Node'){
    console.log(testo)
}

log()
log('teste')

// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total +=n)
    return total
}
console.log(total(2,3,4,5))
