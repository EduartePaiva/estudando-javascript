function contar_intervalo_10_a_20(vetor){
    let valroes_intervalo = 0
    let valores_fora = 0
    for(let i = vetor.length; i > 0; i--){
        if(vetor[i] >=10 && vetor[i] <= 20){
            valroes_intervalo++
        }else{
            valores_fora++
        }
    }

    console.log(`O número de valores no intervalo de 10 a 20 são: ${valroes_intervalo}, e o número fora do intervalo é: ${valores_fora}`)
}

valores = [1,2,3,4,5,6,7,8,9,10,11,12,13,-14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]


contar_intervalo_10_a_20(valores)