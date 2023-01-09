function funcao1(vetorNumerico, numInt){
    for(let i = 0; i< vetorNumerico.length; i++){
        vetorNumerico[i] = vetorNumerico[i]*numInt
    }
    return vetorNumerico
}

vetor1 = [1,2,3,4,5]

function funcao2(vetorNumerico, numInt){
    for(let i = 0; i< vetorNumerico.length; i++){
        if(vetorNumerico[i] > 5){
            vetorNumerico[i] = vetorNumerico[i]*numInt
        }
        
    }
    return vetorNumerico
}



console.log(funcao2(funcao1(vetor1,2),2))
