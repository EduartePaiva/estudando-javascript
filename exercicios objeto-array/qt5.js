maiorouIgual = (num1,num2) => {
    if(typeof num1 != typeof num2){
        return false
    }
    return num1 >= num2
}

console.log(maiorouIgual(0,0))
console.log(maiorouIgual(0,'0'))
console.log(maiorouIgual(5,1))