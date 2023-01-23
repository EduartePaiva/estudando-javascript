function funcaoDaSorte(numero){
    if(!(numero >= 0 && numero<= 10)){
        return 'Número Inválido'
    }

    let sorteio = Math.round(Math.random()*10)
    
    if(numero == sorteio){
        return `Parabéns! O número sorteado foi o ${sorteio}`
    }else{
        return `Que pena! O número sorteado foi o ${sorteio}`
    }

}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(9))
console.log(funcaoDaSorte(8))
console.log(funcaoDaSorte(7))
console.log(funcaoDaSorte(6))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(4))
console.log(funcaoDaSorte(3))
console.log(funcaoDaSorte(2))
console.log(funcaoDaSorte(1))