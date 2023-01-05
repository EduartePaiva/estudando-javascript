converter_em_moeda = (valor) => valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})


console.log(converter_em_moeda(4545454.5144654666546464))