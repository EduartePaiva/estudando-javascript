function contar_negativos(vetor){
    let num_negativos = 0

    vetor.forEach(valor =>{
        if(valor < 0){
            num_negativos++
        }
    })

    return num_negativos
}

valores = [1,2,3,4,5,6,7,8,9,10,-11,12,13,-14,15,16,17,-18,19,20,21,-22,23,24,-25,26,27,28,-29,30]


console.log(contar_negativos(valores))