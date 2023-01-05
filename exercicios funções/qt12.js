function calcula_fatorial(num){
    if(num < 0 || !(num % 1 === 0)){
        return null
    }

    if(num == 0 || num == 1){
        return 1
    }

    let resultado = num
    num--
    while(num > 0){
        resultado*=num
        num--
    }
    return resultado
}

console.log(calcula_fatorial(-1))
console.log(calcula_fatorial('teste'))
console.log(calcula_fatorial(5.45))
console.log(calcula_fatorial(0))
console.log(calcula_fatorial(1))
console.log(calcula_fatorial(2))
console.log(calcula_fatorial(3))
console.log(calcula_fatorial(4))
console.log(calcula_fatorial(5))