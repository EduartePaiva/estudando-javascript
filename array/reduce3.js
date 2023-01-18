Array.prototype.reduce2 = function(callback,primeiroElemento){
    let i = 0
    if(primeiroElemento === undefined){
        primeiroElemento = this[0]
        i++
    }

    for(;i<(this.length);i++){
        primeiroElemento = callback(primeiroElemento,this[i],i,this)
    }
    return primeiroElemento
}

const alunos = [
    {nome: 'João', nota:7.3, bolsista:true},
    {nome: 'Maria', nota:9.2, bolsista:true},
    {nome: 'Pedro', nota:9.8, bolsista:true},
    {nome: 'Ana', nota:8.7, bolsista:false}
]

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (acumulador,atual) => acumulador && atual.bolsista
console.log(alunos.reduce2(todosBolsistas, true))

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = (acumulador,atual) => acumulador || atual.bolsista
console.log(alunos.reduce2(algumBolsista,false))


const soma = (total,valor) => total+valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma))
