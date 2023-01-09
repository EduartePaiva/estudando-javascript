vetorPilha = [1,2,3,4,5]
vetorAdiciona = [6,7,8,9]

function adicionarVetor(vetorInicial,vetorAdiciona){
    for(let i = 0; i < vetorAdiciona.length; i++){
        console.log(vetorAdiciona[i])
        vetorInicial.push(vetorAdiciona[i])
    }
    console.log('Vetor adicionado: ' + vetorAdiciona)
    console.log('Vetor resultado: ' + vetorInicial)
    return vetorInicial
}

console.log(adicionarVetor(vetorPilha,vetorAdiciona))

