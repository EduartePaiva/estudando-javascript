//N jogos por temporada
//pontuação por jogo
//verifica se a pontuação na lista é maior ou menor que seu melhor jogo e pior jogo
//guarda a pontuação em uma lista
//String: “10 20 20 8 25 3 0 30 1”
pontuacao = '10 20 20 8 25 3 0 30 1'
function analisar_recordes(pontuacao){
    pontuacao = pontuacao.split(" ").map(Number)

    let resultado = [0,0]
    let maiorRecord=pontuacao[0]
    for(let i =0;i<pontuacao.length;i++){
        if(maiorRecord<pontuacao[i]){
            resultado[0]++
            maiorRecord = pontuacao[i]
        }
        if(pontuacao[resultado[1]]>pontuacao[i]){
            resultado[1]=i
        }
    }
    resultado[1]++
    console.log(pontuacao)
    return resultado
}

console.log(analisar_recordes(pontuacao))