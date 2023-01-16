const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // massa quebrou o carro!, remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento na última posição
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro elemento
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2,0,'Botas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) // massa quebrou :(
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // vai até o indice anterior ao numero 4
console.log(algunsPilotos2)

