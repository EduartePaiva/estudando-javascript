function contarCaracter(caracter,frase){
    let numLetras = 0
    for(let i=0;i<frase.length;i++){
        if(frase[i] == caracter){
            numLetras++
        }
    }
    return numLetras
}


console.log(contarCaracter('r', 'A sorte favoreçe os audazes'))
console.log(contarCaracter('c', 'Conhece-te a ti mesmo'))