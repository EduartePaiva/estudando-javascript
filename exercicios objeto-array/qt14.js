function objetoParaArray(obj){
    let array = []
    for(nomePropriedade in obj){
        //console.log(nomePropriedade)
        if(typeof obj[nomePropriedade] === 'object'){
            array.push([nomePropriedade,objetoParaArray(obj[nomePropriedade])])
        }else{
            console.log(obj[nomePropriedade])
            array.push([nomePropriedade,obj[nomePropriedade]])
        }
    }
    return array
}

let obj1 = {
    nome: 'Maria',
    profissao: 'Desenvolvedora de software',
    minhaInfo:{
        meunome: 'Eduarte',
        sobrenome: 'Paiva'
    },
    minhaFunc: () => console.log('Olá')
}

let obj2 = {
    codigo: 11111,
    preco: 12000
}

let arrayCriada = objetoParaArray(obj1)
console.log(arrayCriada)
console.log(arrayCriada[2])
arrayCriada[3][1]()
//console.log(objetoParaArray(obj2))
