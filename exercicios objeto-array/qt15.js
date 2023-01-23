function soParDeIncidePar(array){
    return array.filter((valor,index) => valor%2==0 && index%2==0)
}

aray1 = [1,2,3,4]
aray2 = [10,70,22,43]

console.log(soParDeIncidePar(aray1))
console.log(soParDeIncidePar(aray2))
