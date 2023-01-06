vetorInteiro = [1,2,3,4]
vetorString = ['um','dois','três','quatro']
vetorDouble = [1.1,2.2,3.3,4.4]

//console.log(vetorInteiro)
//console.log(vetorString)
//console.log(vetorDouble)
function concatenar_vetores(...vetores){
    let vetores_concatenados = []
    vetores.forEach(vetor => vetores_concatenados=vetores_concatenados.concat(vetor))
    return vetores_concatenados
}
a = 1
console.log(concatenar_vetores(a,'dois'))

console.log(vetorInteiro.concat(vetorString,vetorDouble))
console.log(concatenar_vetores(vetorInteiro,vetorDouble))
console.log(concatenar_vetores('cinco'))