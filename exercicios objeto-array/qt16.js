function e_bissesto(ano){
    if(ano%100 == 0){
        if(ano%400 == 0){
            return true
        }else{
            return false
        }
    }else if(ano%4 == 0){
        return true
    }else{
        return false
    }
}

console.log(e_bissesto(2020))
console.log(e_bissesto(2100))
console.log(e_bissesto(2400))