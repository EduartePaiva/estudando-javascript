function calculadora(num1,operacional,num2){
 switch(operacional){
    case '+':
        return num1+num2
    case '-': 
        return num1-num2
    case '*': 
        return num1*num2
    case '/':
        return num1/num2
    default:
        return 'Operação inválida'
 }
}

console.log(calculadora(5,'+',7))
console.log(calculadora(5,'-',7))
console.log(calculadora(5,'*',7))
console.log(calculadora(5,'/',7))
console.log(calculadora(5,'.',7))