function arredonda(nota){
    if(nota>37){
        if(nota%5 >=3 ){
            while(nota%5 !=0){
                nota++
            }
        }
    }

    if(nota >=40){
        return `Aluno Aprovado Nota: ${nota}`
    }else{
        return `Aluno Reprovado Nota: ${nota}`
    }
}


console.log(arredonda(37))
console.log(arredonda(38))
console.log(arredonda(39))
console.log(arredonda(40))
console.log(arredonda(41))
console.log(arredonda(42))
console.log(arredonda(43))
