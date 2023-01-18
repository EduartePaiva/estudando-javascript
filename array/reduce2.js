const alunos = [
    {nome: 'João', nota:7.3, bolsista:false},
    {nome: 'Maria', nota:9.2, bolsista:false},
    {nome: 'Pedro', nota:9.8, bolsista:false},
    {nome: 'Ana', nota:8.7, bolsista:false}
]

// Desafio 1: Todos os alunos são volsistas?

const todosBolsistas = (acumulador,atual) => acumulador && atual.bolsista
console.log(alunos.reduce(todosBolsistas, true))

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = (acumulador,atual) => acumulador || atual.bolsista
console.log(alunos.reduce(algumBolsista,false))
