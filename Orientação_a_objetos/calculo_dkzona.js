//cap de dkzona é 580 a partir disto tem 70% de eficiência
//dano kamasylvia tem 85% de eficiência depois do cap

function calcular_ap_total_dkzona(dano_kama,dano_monstro,cap){
    let dano_total = 0
    if(dano_monstro > cap){
        dano_total = cap + (dano_monstro-cap)*.7
        dano_total += dano_kama*0.85
    }else{
        dano_total = dano_monstro+dano_kama
    }

    return dano_total

}


console.log('Dano com kutum: '+calcular_ap_total_dkzona(53,785,580))
console.log('Dano com secundaria de precisão: '+calcular_ap_total_dkzona(83,694,580))