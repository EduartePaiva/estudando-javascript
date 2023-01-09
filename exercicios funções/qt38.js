function imprime_impar(inicio,fim){
    let inicio2
    let fim2
    if(inicio > fim){
        fim2 = inicio
        inicio2 = fim
    }else{
        inicio2 = inicio
        fim2 = fim
    }

    for(i = inicio2; i <=fim2; i++){
        if(i%2 !=0){
            console.log(i)
        }
    }
}

imprime_impar(101,0)