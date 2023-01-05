//Rsesolver a formula de Bhaskara
//recebe o valor do a b e c
//equação = 3x² - 5x + 12
//delra= b^2-4*a*c
function baskara(a,b,c){
    let delta = Math.pow(b,2)-(4*a*c)

    if(delta<0){
        return 'Delta é negativo'
    }
    let result = []

    result[0]=(-b+Math.sqrt(delta))/(2*a)
    result[1]=(-b-Math.sqrt(delta))/(2*a)
    return result
}


console.log(baskara(3,-5,12))
console.log(baskara(4,-3,-1))


