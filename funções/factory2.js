function criarProduto(nome,preco,desconto = 25){
    return {
        nome,
        preco,
        desconto: desconto/100
    }
}

carro = criarProduto('gol',30000)
cafe = criarProduto('cafe', 5,5)


console.log(carro)
console.log(cafe)

