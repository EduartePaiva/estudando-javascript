function valor_plano_de_saude(idade){
    valor_base = 100

    if(idade < 10){
        return valor_base + 80
    }
    if(idade <= 30){
        return valor_base + 50
    }
    if(idade <= 60){
        return valor_base + 95
    }
    
    return valor_base + 130
}


console.log('Você pagará:' + valor_plano_de_saude(1))
console.log('Você pagará:' + valor_plano_de_saude(10))
console.log('Você pagará:' + valor_plano_de_saude(31))
console.log('Você pagará:' + valor_plano_de_saude(61))
console.log('Você pagará:' + valor_plano_de_saude(100))