//Três valores
//Capital inicial, taxa de juros e tempo de aplicação.


function calculo_juros_simples(capiral_inicial, taxa_de_juros_anual, tempo_de_aplicacao){
    let result=0;
    if(taxa_de_juros_anual>1){
        taxa_de_juros_anual/=100;
    }
    while(tempo_de_aplicacao>0){
        result += capiral_inicial*taxa_de_juros_anual
        tempo_de_aplicacao--
    }
    console.log(`Montante total de juros simples: ${(result+capiral_inicial).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`)
    
}
calculo_juros_simples(100,0.10,50)


function calculo_juros_composto(capiral_inicial, taxa_de_juros_anual, tempo_de_aplicacao){
    let result = capiral_inicial
    if(taxa_de_juros_anual>1){
        taxa_de_juros_anual/=100;
    }
    while(tempo_de_aplicacao>0){
        result += result*taxa_de_juros_anual
        tempo_de_aplicacao--
    }
    console.log(`Montante total de juros compostos: ${(result).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`)
}

calculo_juros_composto(100,0.10,50)