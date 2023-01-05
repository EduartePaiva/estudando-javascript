function media_aluno(codigo,nota1,nota2,nota3){
    let notas = [nota1,nota2,nota3]
    notas.sort((a,b) => a < b ? 1 : -1)
    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`Código do aluno: ${codigo}, Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Media do aluno: ${mediaFinal} Aluno ${mediaFinal < 5 ? 'Reprovado': 'Aprovado'}.`)

}


media_aluno(555,7,4,4)