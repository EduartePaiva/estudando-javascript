const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    let funcs = response.data
    let chinesa_menor_sal = funcs.filter(func => func.genero == 'F' && func.pais == 'China').reduce((anterior,chinesa_atual) => {
        if(anterior.salario > chinesa_atual.salario){
            return chinesa_atual
        }else{
            return anterior
        }

    })
    

    console.log(chinesa_menor_sal)
})



//desafio encontrar a mulher chinesa com o menor salário