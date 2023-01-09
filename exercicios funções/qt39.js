function trocar_vetor(vetor1,vetor2){
    console.log(`vetor1: ${vetor1}`)
    console.log(`vetor2: ${vetor2}`)
    if(vetor1.length != vetor2.length){
        return 'Tamanhos diferentes'
    }

    for(let i = 0; i<vetor1.length; i++){
        vetor1[i]= vetor1[i] + vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]
    }

    console.log(`vetor1: ${vetor1}`)
    console.log(`vetor2: ${vetor2}`)
}

vetor1 = [5,6,7,8]
vetor2 = [10,20,30,40]

trocar_vetor(vetor1,vetor2)