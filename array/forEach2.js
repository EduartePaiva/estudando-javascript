// minha solução
/*
const aprovados = ['Agatha', 'Aldo','Daniel','Raquel']
Array.prototype.meuForEach = function(funcao){
    for(let i=0; i<this.length;i++){
        funcao(this[i],i,this)
    } 
}
aprovados.meuForEach((valor,indice,array) => console.log(valor,indice,array))
*/
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i< this.length;i++){
        callback(this[i],i,this)
    }
}

const aprovados = ['Agatha', 'Aldo','Daniel','Raquel']
aprovados.forEach2(function(nome,indice, array){
    console.log(`${indice+1}) ${nome}`)
})