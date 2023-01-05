class produto{
    constructor(codigo,nome_produto,preco){
        this.codigo = codigo
        this.nome_produto = nome_produto
        this.preco = preco
    }

    get_codigo(){
        return this.codigo
    }
    get_nome_produto(){
        return this.nome_produto
    }
    get_preco(){
        return this.preco
    }
    calcula_total(quantidade){
        return this.preco*quantidade
    }
}
let produtos = []
produtos[0] = new produto(100,'Cachorro Quente',3)
produtos[1] = new produto(200,'Hamburger Simples',4)
produtos[2] = new produto(300,'Cheeseburguer',5.5)
produtos[3] = new produto(400,'Bauru',7.5)
produtos[4] = new produto(500,'Refrigerante',3.5)
produtos[5] = new produto(600,'Suco',2.8)


function calcular_valor_produto(codigo,quantidade,produtos){
    return produtos.find(produto => produto.get_codigo() === codigo).calcula_total(quantidade)
}


console.log(calcular_valor_produto(100,2,produtos))