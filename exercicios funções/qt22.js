function valor_anuidade(mes,anuidade){
    while(mes > 1){
        anuidade += anuidade * 0.05
        mes--
    }
    return anuidade
}

console.log(valor_anuidade(1,1000))
console.log(valor_anuidade(2,1000))
console.log(valor_anuidade(3,1000))
console.log(valor_anuidade(4,1000))
console.log(valor_anuidade(5,1000))
console.log(valor_anuidade(6,1000))
console.log(valor_anuidade(7,1000))
console.log(valor_anuidade(8,1000))
console.log(valor_anuidade(9,1000))
console.log(valor_anuidade(10,1000))
console.log(valor_anuidade(11,1000))
console.log(valor_anuidade(12,1000))