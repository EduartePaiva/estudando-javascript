//cap de dkzona é 580 a partir disto tem 70% de eficiência
//dano kamasylvia tem 85% de eficiência depois do cap

let dkzona = 0.7
let trolls = 0.05
let cap_dkzona = 580
let cap_trolls = 920
let cap_ashforest = 530

function calcular_ap_total_dkzona(dano_kama,dano_monstro,cap,cap_porcentagem_spot){
    let dano_total = 0
    if(dano_monstro > cap){
        dano_total = cap + (dano_monstro-cap)*cap_porcentagem_spot
        dano_total += dano_kama*0.85
    }else if((dano_monstro+dano_kama) > cap){
        dano_total = cap + ((dano_monstro+dano_kama)-cap)*0.85
    }else{
        dano_total = dano_monstro+dano_kama
        console.log('aq')
    }

    return dano_total

}


console.log('Dano com kutum: '+calcular_ap_total_dkzona(83,889,cap_ashforest,dkzona))
console.log('Dano com secundaria de precisão: '+calcular_ap_total_dkzona(83,792,cap_ashforest,dkzona))