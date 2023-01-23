let produtos1 = [
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
] 
// retornará 239.99
    
let produtos2 = [
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
] 
// retornará 34599.89
    

function despesasTotais(produtos){
    return produtos.reduce((valorTotal,valorAtual) => valorTotal+valorAtual.preco,0)
}

console.log(despesasTotais(produtos1))
console.log(despesasTotais(produtos2))