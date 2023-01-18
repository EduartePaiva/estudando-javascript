const carrinho = [
'{"nome": "Borracha", "preco": 3.45}',
'{"nome": "Caderno", "preco": 13.90}',
'{"nome": "Kit de Lapis", "preco": 41.22}',
'{"nome": " cANETA", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const resultado = carrinho.map(elemento => JSON.parse(elemento)).map(elemento => elemento.preco)

console.log(resultado)