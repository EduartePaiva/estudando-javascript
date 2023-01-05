class Crianca{
    constructor(altura,taxa_de_cresc){
        this.altura = altura
        this.taxa_de_cresc = taxa_de_cresc
    }

    get_altura(){
        return this.altura
    }
    get_taxa_de_crest(){
        return this.taxa_de_cresc
    }
}

crianca1 = new Crianca(130,10)
crianca2 = new Crianca(100,15)


function crianca1_vs_crianca2(crianca1,crianca2){
    let calculo = (cri1,cri2) => {
        let altura1 = cri1.get_altura()
        let altura2 = cri2.get_altura()
        let anos = 0
        while(altura1 < altura2){
            altura1 += cri1.get_taxa_de_crest()
            altura2 += cri2.get_taxa_de_crest()

            anos++
        }
        return anos
    }
    if(crianca1.get_altura() < crianca2.get_altura() && crianca1.get_taxa_de_crest() > crianca2.get_taxa_de_crest()){
        console.log(`A crianca 1 é menor que a crianca 2 mas a crianca 1 ultrapassará a 2 em: ${calculo(crianca1,crianca2)} anos`) 
    }else if(crianca2.get_altura() < crianca1.get_altura() && crianca2.get_taxa_de_crest() > crianca1.get_taxa_de_crest()){
        console.log(`A crianca 2 é menor que a crianca 1 mas a crianca 2 ultrapassará a 1 em: ${calculo(crianca2,crianca1)} anos`) 
    }else{
        console.log('A altura das crianças são iguais ou uma não consegue passar a outra em tamanho')
    }
}


crianca1_vs_crianca2(crianca1,crianca2)