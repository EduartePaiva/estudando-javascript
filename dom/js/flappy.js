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

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

function MoverDaDireitaAEsquerda(elemento,posicaoNaTela){
    setTimeout(() => {
        elemento.setX(posicaoNaTela)
        posicaoNaTela-=2
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

function Barreiras(altura, largura, abertura, espaco, notificarPonto){
    this.pares = [
        new ParDeBarreiras(altura,abertura,largura),
        new ParDeBarreiras(altura,abertura,largura+espaco),
        new ParDeBarreiras(altura,abertura,largura+espaco*2),
        new ParDeBarreiras(altura,abertura,largura+espaco*3)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX()-deslocamento)
            // quando o elemento sair da área do jogo

            if(par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura/2
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if(cruzouOMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo){
    let voando = false

    this.elemento = novoElemento('img','passaro')
    this.elemento.src = './imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if(novoY <= 0){
            this.setY(0)
        }else if(novoY >= alturaMaxima){
            this.setY(alturaMaxima)
        }else{
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo/2)

}

function Progresso(){
    this.elemento = novoElemento('span','progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

function estaoSobrepostos(elementoA,elementoB){
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top+a.height >= b.top && b.top + b.height >= a.top

    return horizontal && vertical
}

function colidiu(passaro,barreiras){
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if(!colidiu){
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento,superior)
                || estaoSobrepostos(passaro.elemento,inferior)

        }
    })

    return colidiu
}

function FlappyBird(){
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura,largura,200,400, 
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        //loop do jogo
        const temporizador = setInterval(()=> {
            barreiras.animar()
            passaro.animar()

            if(colidiu(passaro,barreiras)){
                clearInterval(temporizador)
            }
        }, 20)
    }

}


new FlappyBird().start()