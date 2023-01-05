//notas que podem ser utilizadas 100, 50, 10, 5 e 1



function receber_notas(valor){
    if(valor < 0 || valor > 1000000000){
        return 'Valor inválido'
    }
    let notas_100 = 0
    let notas_50 = 0
    let notas_10 = 0
    let notas_5 = 0
    let notas_1 = 0
    while(valor > 0){
        if(valor >= 100){
            notas_100++
            valor -=100
            continue
        }
        if(valor >= 50){
            notas_50++
            valor-=50
            continue
        }
        if(valor >= 10){
            notas_10++
            valor-=10
            continue
        }
        if(valor >= 5){
            notas_5++
            valor-=5
            continue
        }
        if(valor >= 1){
            notas_1++
            valor-=1
            continue
        }
    }

    resposta = ''

    if(notas_100>0){
        resposta = resposta.concat(`${notas_100} nota(s) de R$ 100. `)
    }
    if(notas_50>0){
        resposta = resposta.concat(`${notas_50} nota(s) de R$ 50. `)
    }
    if(notas_10>0){
        resposta = resposta.concat(`${notas_10} nota(s) de R$ 10. `)
    }
    if(notas_5>0){
        resposta = resposta.concat(`${notas_5} nota(s) de R$ 5. `)
    }
    if(notas_1>0){
        resposta = resposta.concat(`${notas_1} nota(s) de R$ 1.`)
    }

    return resposta
}


console.log(receber_notas(10500))

