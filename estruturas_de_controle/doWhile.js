function PegarNumeroAleatorio(minimo,maximo){
    maximo++;
    const numero = Math.random() * (maximo-minimo) + minimo
    return Math.floor(numero)
}


do{
    opcao = PegarNumeroAleatorio(10,20);
    console.log(`Número escolhido foi: ${opcao}`);

}while(opcao != 10)
console.log('Chegou no número escolhido');