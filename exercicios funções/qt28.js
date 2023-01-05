function ler_vetor(vetor){
    let num_par = 0
    vetor.forEach(valor => {
        if(valor%2 == 0) num_par++
    });

    console.log(num_par)
    return num_par

}


valores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

ler_vetor(valores)

