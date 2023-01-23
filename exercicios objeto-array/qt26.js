function removeVogais(palavra){
    return palavra.replace(/[aeiou]/gi,'')
    
}

console.log(removeVogais('removendo todas as vogais'))
console.log(removeVogais("Cod3r")) // retornará "Cd3r" 
console.log(removeVogais("Fundamentos")) // retornará "Fndmnts
