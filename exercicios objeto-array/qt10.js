function simboloMais(num){
    let frase = ''
    while(num>0){
        frase = frase+'+'
        num--
    }
    return frase
}

console.log(simboloMais(5))