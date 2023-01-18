//Implementar o map

Array.prototype.map2 = function(func){
    let novaArray = []
    for(let i = 0; i< this.length; i++){
        novaArray.push(func(this[i],i,this))
    }
    return novaArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": " cANETA", "preco": 7.50}'
]
    
// Retornar um array apenas com os preços

const resultado = carrinho.map2(elemento => JSON.parse(elemento)).map2(elemento => elemento.preco)

console.log(resultado)