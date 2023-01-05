/*De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras*/

function e_bissexto(ano){
    if(ano%400 == 0){
        return true
    }
    if(ano%100 == 0){
        return false
    }
    if(ano%4 == 0){
        return true
    }
    return false

}
console.log(e_bissexto(8))
console.log(e_bissexto(1000))
console.log(e_bissexto(1200))
console.log(e_bissexto(500))
console.log(e_bissexto(2022))

