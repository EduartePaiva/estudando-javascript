estudantes = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
} // retornará { nome: "Mariana", media: 7.875 }
    

function calculaMelhorEstudantePorMedia(estudantes){
    melhorAluno = {
        nome: '',
        media: 0
    }
    for(aluno in estudantes){
        let media_aluno = estudantes[aluno].reduce((anterior,atual) => anterior+atual,0)/estudantes[aluno].length
        if(media_aluno > melhorAluno.media){
            melhorAluno.nome = aluno
            melhorAluno.media = media_aluno
        }
    }
    return melhorAluno
}

console.log(calculaMelhorEstudantePorMedia(estudantes))