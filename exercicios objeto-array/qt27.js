function inverter(obj){
    let novoObj = {}
    let arrayDoObj = Object.entries(obj)
    arrayDoObj.forEach(valor => {
        novoObj[valor[1]] = valor[0]
    })

    return novoObj
}


const obj1 = { a: 1, b: 2, c: 3}

console.log(inverter(obj1))