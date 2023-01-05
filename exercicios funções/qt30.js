function percorre_vetor(vetor){
    let maior_valor = 0
    let menor_valor = 0

    vetor.forEach(valor => {
        if(valor > maior_valor){
            maior_valor = valor
        }
        if(valor < menor_valor){
            menor_valor = valor
        }
    })

    console.log(`O menor valor é: ${menor_valor} e o maior é: ${maior_valor}`)
}

vetor = [1,64,6,5,4,466,-66,44,6,664,6,64,564,66,6,66,6612164,6,64,-67,656,-68,65]

percorre_vetor(vetor)