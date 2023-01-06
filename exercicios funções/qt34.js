function duas_string(string1,string2){
    string1 = string1.toLowerCase().split('')
    string2 = string2.toLowerCase().split('')

    let retorno1 = string1.every(letra => !string2.every(letra2 => letra != letra2))
    let retorno2 = string2.every(letra => !string1.every(letra2 => letra != letra2))
    return retorno1 && retorno2
}

console.log(duas_string('adahcbbbfdgdfgbbb','acfdgdfgdbdh'))



//a função every percorre a array até um retorno falso. para retornar true tem que percorrer toda a array e retornar true em todos.
//no exemplo se a letra = letra2 vai retornar um valor falso, que encerra o ciclo, este valor falso é convertido em um valor verdadeiro
//este valor verdadeiro valida o primeiro every a comparar a proxima letra até terminar todas as letras da string e constatar que toras sejam true
//ou seja encontrou uma letra igual na string2 em todas as letras da string1



/*
    let retorno1 = string1.every(letra => {
        let result = string2.every(letra2 =>{
            if(letra == letra2){
                return false
            }else{
                return true
            }
        })
        if(result){
            return false
        }else{
            return true
        }
    })
*/

/*
    let retorno2 = string2.every(letra => {
        let result = string1.every(letra2 =>{
            if(letra == letra2){
                return false
            }else{
                return true
            }
        })
        if(result){
            return false
        }else{
            return true
        }
    })
*/