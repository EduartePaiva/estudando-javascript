function repetir(elemento,numRepet){
    let aray = []
    for(let i=0;i<numRepet;i++){
        aray.push(elemento)
    }
    return aray
}

console.log(repetir('Codigo',2))
console.log(repetir('7',3))