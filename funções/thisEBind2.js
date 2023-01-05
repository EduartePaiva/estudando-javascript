function Pessoa(){
    this.idade = 0
    const self = this //gambiarra para manter o this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa