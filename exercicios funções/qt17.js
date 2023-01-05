function plano_de_trabalho(plano,salario){
    switch(plano){
        case 'A':
            console.log(`Novo salário ${salario+=salario*0.1}`)
            return salario
        case 'B':
            console.log(`Novo salário ${salario+=salario*0.15}`)
            return salario
        case 'C':
            console.log(`Novo salário ${salario+=salario*0.20}`)
            return salario
        default:
            console.log('Plano é inválido')
            return salario
    }
}

plano_de_trabalho('A',1000)
plano_de_trabalho('B',1000)
plano_de_trabalho('C',1000)
plano_de_trabalho('D',1000)