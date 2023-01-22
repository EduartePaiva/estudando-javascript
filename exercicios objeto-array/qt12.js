function removerPropriedade(objeto, nomePropriedade){
    let novoObjeto = Object.assign({},objeto)
    delete novoObjeto[nomePropriedade]
    return novoObjeto
}

let obj1 = {a:1,b:2}
let obj2 = {id:20,nome:'caneta',descricao:'Não preenchido'}

console.log(removerPropriedade(obj1,'a'))
console.log(removerPropriedade(obj2,'descricao'))
console.log(obj2)

console.log(Object.is(removerPropriedade(obj2,'descricao'),obj2))