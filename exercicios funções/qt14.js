function calssifica_frutas(fruta){
    switch (fruta){
    case 'maçã':
        return 'Não vendemos esta fruta aqui'
    case 'kiwi':
        return 'Estamos com escassez de kiwis'
    case 'melancia':
        return 'Aqui está, são 3 reais o quilo'
    default:
        console.log('Erro!!!')
    }
}

console.log(calssifica_frutas('maçã'))
console.log(calssifica_frutas('kiwi'))
console.log(calssifica_frutas('melancia'))
console.log(calssifica_frutas('asdsa'))