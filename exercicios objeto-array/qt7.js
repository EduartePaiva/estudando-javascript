estaEntre = (numero,minimo,maximo,inclusivo = false) => {
    if(inclusivo){
        return numero >= minimo && numero <=maximo
    }else{
        return numero > minimo && numero < maximo
    }
}

console.log(estaEntre(50,50,100,true))