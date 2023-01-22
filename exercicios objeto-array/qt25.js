/*
function buscarPalavrasSemelhantes(frase,arrayDePalavras){
    function testaPalavras(anterior,atual){
        let i = 0
        for(; i< atual.length;i++){
            if(frase[0] == atual[i]){
                let numLetrasIguais = 0
                for(;numLetrasIguais<frase.length;numLetrasIguais++){
                    if(frase[numLetrasIguais] != atual[i+numLetrasIguais]){
                        break
                    }
                }
                if((numLetrasIguais) == frase.length){
                    anterior.push(atual)
                    break
                }
            }
        }
        return anterior
    }

    let array = arrayDePalavras.reduce(testaPalavras,[])
    return array
}
Fiz esta porra toda para dps ver que existe o includes

*/

function buscarPalavrasSemelhantes(frase,arrayDePalavras){
    return arrayDePalavras.filter(palavra => palavra.includes(frase))
}


let novaarray = ['programação', 'mobile', 'profissional','pragmatismo']

console.log(buscarPalavrasSemelhantes('pro', novaarray)) // retornará ["programação", "profissional"] 
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++",'python é legal mas eu gosto de python'])) // retornará []