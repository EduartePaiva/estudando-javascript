function gameOver(){
    this.FimDoJogo = false
    const passaro = document.querySelector('.passaro')
    this.pontos = 0
    this.bannerFimDeJogo = novoElemento('div','btnRecomecar')
    const visualPlacar = document.querySelector('.progresso')

    this.setPlacar = () => {
        this.pontos++
        visualPlacar.innerHTML = this.pontos
    }

    this.mostrarPlacar = () => {
        this.bannerFimDeJogo.innerHTML = this.pontos
        document.querySelector('[wm-flappy]').appendChild(this.bannerFimDeJogo)
    }

    this.setGameOver = () => {
        this.FimDoJogo = true
        this.mostrarPlacar()
    }

    this.getFimDoJogo = () =>{
        if(this.FimDoJogo) return this.FimDoJogo

        return this.monitoraSeBateu()

    }

    this.pegarindexCanoAFrente = (listaTubos) => {
        
        for(let i =0;i<listaTubos.length;i++){
            let distanciaPassaro = passaro.offsetLeft+43
            let distanciaCanoEsquerda = listaTubos[i].offsetLeft
            if(distanciaPassaro < distanciaCanoEsquerda){
                return i
            }
        }

    }

    this.monitoraSeBateu = () => {
        //analizar se o cano está em frente ao pássaro
        let listaDeTubos = document.querySelectorAll('.par-de-barreiras')
        let tuboMaisProx = listaDeTubos[this.pegarindexCanoAFrente(listaDeTubos)]
        

        let tuboDeBaixo = tuboMaisProx.childNodes[1]
        let tuboDeCima = tuboMaisProx.childNodes[0]
        //primeiramente: pegar a posição do canto de cima e do canto de baixo do passaro


        let distanciaPassaroDaEsquerda = passaro.offsetLeft+60
        let distanciaPassaroTopoAosPes = passaro.offsetTop+43
        let distanciaPassaroTopoACabeca = passaro.offsetTop
        let distanciaDoPrimeiroCano = tuboMaisProx.offsetLeft
        let distanciaTopoC1 = tuboDeBaixo.offsetTop
        let distanciaTopoC2 = tuboDeCima.clientHeight
        if(distanciaPassaroDaEsquerda >= distanciaDoPrimeiroCano){

            if(!(distanciaPassaroTopoAosPes<distanciaTopoC1) || !(distanciaTopoC2 < distanciaPassaroTopoACabeca)){
                console.log('Posição do pássaro a esquerda:'+(passaro.offsetLeft+60))
                console.log('Posição do tubo a esquerda:'+(tuboMaisProx.offsetLeft-130))
                this.setGameOver()
                return true
            }
        }
        
        return false
    }

}


function novoElemento(tagName,className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false){
    this.elemento = novoElemento('div','barreira')

    const borda = novoElemento('div','borda')
    const corpo = novoElemento('div','corpo')

    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

//const b = new Barreira(true)
//b.setAltura(300)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura,abertura,x){
    this.elemento = novoElemento('div','par-de-barreiras')
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.floor(Math.random() * (altura-abertura))
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.elem.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

function MoverDaDireitaAEsquerda(elemento,posicaoNaTela){
    setTimeout(() => {
        elemento.setX(posicaoNaTela)
        posicaoNaTela-=2
        //console.log(fimDoJogo.getFimDoJogo())
        //console.log(fimDoJogo.getFimDoJogo())
        if(!fimDoJogo.getFimDoJogo()){
            if(posicaoNaTela > 0){
                MoverDaDireitaAEsquerda(elemento,posicaoNaTela)
            }else{
                elemento.elemento.remove()
                fimDoJogo.setPlacar()
            }
        }
    },10)

}

function invocaConeACadaXSegundos(segundos){
    let cone = new ParDeBarreiras(550,150,1200)
    document.querySelector('[wm-flappy]').appendChild(cone.elemento)
    MoverDaDireitaAEsquerda(cone,1200)
    setTimeout(() => {
        let flappy = document.querySelector('.passaro')
        let bottom = parseInt(flappy.style.bottom.split('px')[0])
        if(bottom > 10){
            invocaConeACadaXSegundos(segundos)
            
        }
    },segundos*1000)
}

//
function Flappy(){
    this.flappy = document.querySelector('.passaro')

    this.flappyCaindo = (alturaAtual) => {
        let alturaTela = this.flappy.parentElement.clientHeight
        if(alturaAtual == -1) {
            alturaAtual = alturaTela/2
            this.flappy.style.bottom = alturaAtual+'px'

        }
        //flappy vai cair até bottom 0%a

        //console.log(alturaAtual)
        if(alturaAtual>0 && !fimDoJogo.getFimDoJogo()){
            setTimeout(()=>{
                let alturaDoFlappy = parseInt(this.flappy.style.bottom.split('px')[0])
                alturaDoFlappy-=5
                this.flappy.style.bottom = alturaDoFlappy+'px'
                //console.log(alturaDoFlappy)
                this.flappyCaindo(alturaDoFlappy)
            },30)
        }else{
            console.log('acabou')
            fimDoJogo.setGameOver()
        }

    }

    this.moveFlappyParaCima = (pixelsAMover) => {
        document.onkeydown = (e) =>{
            if(e.key = 'ArrowUp' && !fimDoJogo.getFimDoJogo()){
                let alturaDoFlappy = parseInt(this.flappy.style.bottom.split('px')[0])
                let alturaTela = this.flappy.parentElement.clientHeight
                if(alturaDoFlappy> 10 && alturaDoFlappy < alturaTela-pixelsAMover){
                    this.flappy.style.bottom = (alturaDoFlappy+pixelsAMover)+'px'

                }
                
            }
        }
    }
}




function startGame(){
    invocaConeACadaXSegundos(3)
    fimDoJogo = new gameOver()
    const passaro = new Flappy()
    passaro.flappyCaindo(-1)
    passaro.moveFlappyParaCima(70)
    //fimDoJogo.monitoraSeBateu()
    
}
//a

startGame()
