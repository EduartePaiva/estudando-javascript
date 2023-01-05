function compra_carro(carro){
    switch(carro){
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedans':
            return 'Tem certeza que prefere este modelo?'
        case 'motocicleta':
            return 'Tem certeza que prefere este modelo?'
        case 'caminhonete':
            return 'Tem certeza que prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}


console.log(compra_carro('hatch'))
console.log(compra_carro('sedans'))
console.log(compra_carro('motocicleta'))
console.log(compra_carro('caminhonete'))
console.log(compra_carro('fiat'))