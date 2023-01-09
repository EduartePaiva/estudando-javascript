
//n é num de termos, a1 primeiro termo r a razão
function progressao_aritimetica(n,a1,r){
    let soma = 0
    while(n > 0){
        console.log(a1)
        soma += a1
        a1 += r
        n--
    }

    console.log(`Soma total: ${soma}`)

}

function progressao_geometrica(n,a1,r){
    let soma = 0
    while(n > 0){
        console.log(a1)
        soma += a1
        a1 *= r
        n--
    }
    console.log(`Soma total: ${soma}`)
}

progressao_aritimetica(5,5,2)
progressao_geometrica(10,5,2)