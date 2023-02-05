
const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname,'dados.txt')
/*
const receberDados = new Promise(function (resolve){
    
    fs.readFile(caminho,function(erro,valor){
        resolve({erro, valor:valor.toString().split('\r\n')})
    })

})

receberDados.then(console.log)

*/

receberDados = caminho => { 
    return new Promise(resolve => {
        fs.readFile(caminho,function(erro,valor){
            resolve({erro, valor:valor.toString().split('\r\n')})
        })
        console.log('Depois de ler')
    })
}
receberDados(caminho).then(console.log)