function conceito_de_notas(notas){
    let identifica = valor => {
        if(valor <= 4.9){
            return 'D'
        }

        if( valor <= 6.9){
            return 'C'
        }
        if(valor <= 8.9){
            return 'B'
        }

        if(valor <= 10){
            return 'A'
        }
    }
    for(let i = 0; i< notas.length; i++){
        notas[i] = {
            notas: notas[i],
            conceito: identifica(notas[i])
        }
    }

    return notas
}

let notas = [1,2,3,4,5,6,7,8,9,10]

console.log(notas)
let classifica = conceito_de_notas(notas)
console.log(classifica)

