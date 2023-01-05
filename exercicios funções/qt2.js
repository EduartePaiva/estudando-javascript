function classificar_triangulo(lado1,lado2,lado3){
    if(lado1 == lado2 && lado1 == lado3){
        console.log('Todos os lados são iguais Equilátero')
    }else if(lado1!=lado2 && lado1!=lado3 && lado2 != lado3){
        console.log('Todos os lados são diferentes Escaleno')
    }else{
        console.log('Dois lados são iguais Isósceles')
    }
}

classificar_triangulo(1,1,1)
classificar_triangulo(1,1,2)
classificar_triangulo(1,2,2)
classificar_triangulo(1,2,3)


//se 3 lados são iguais = Equilátero
//se 3 lados são diferentes = Escaleno
// se 2 lados são iguais = Isósceles