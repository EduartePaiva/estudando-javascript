function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGridado(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
    
}

const obj = {name:'Roberto'}

imprimirNomeGridado(obj)