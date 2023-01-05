class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


function Pessoa2(nome){
    this.nome = nome

    this.falar = function (){
        console.log(`Neu nome é ${this.nome}`)
    }
}

const teste = new Pessoa2('Eduarte')

teste.falar()