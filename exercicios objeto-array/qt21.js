menorNum = numeros => numeros.reduce((numAnterior,atual) => numAnterior > atual ? atual:numAnterior)


console.log(menorNum([10, 5, 35, 65])) // retornará 5
console.log(menorNum([5, -15, 50, 3])) // retornará -15
