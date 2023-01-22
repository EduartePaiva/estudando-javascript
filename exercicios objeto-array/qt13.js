function filtrarNumeros(aray){
    return aray.filter(valor => typeof valor == 'number')
}

let array1 = ['javascript',1,'3','web',20]
let array2 = ['a','c']
console.log(filtrarNumeros(array1))
console.log(filtrarNumeros(array2))