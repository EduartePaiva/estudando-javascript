function segundoMaior(array){
    let maior = array[0]
    let segundo = 0
    

    array.forEach((valor) => {
          if(valor > maior){
            maior = valor
          }      
    })

    array.forEach((valor) => {
             if(valor > segundo && valor != maior && valor < maior){
                segundo = valor
             }
  })

    return segundo
}

function segundoMaior2(array){
    return array.sort((a,b) => a-b)[array.length-2]

}

console.log(segundoMaior2([12, 16, 1, 5])) // retornará 12
console.log(segundoMaior2([8, 4, 5, 6])) // retornará 6
console.log(segundoMaior2([8,8,12,9,11])) // retornará 6

console.log(segundoMaior([12, 16, 1, 5])) // retornará 12
console.log(segundoMaior([8, 4, 5, 6])) // retornará 6
console.log(segundoMaior([8,8,12,9,11])) // retornará 6
