//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite acessar e manipular variáveis externas Á função

//Contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
