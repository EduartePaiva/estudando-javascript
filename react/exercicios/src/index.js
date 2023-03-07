import React from 'react'
//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import BomDIa from './componentes/BomDIa'

import Multi from './componentes/Multiplos'

const container = document.getElementById('root')
const root = createRoot(container)
const elemento = <h1>React 2</h1>

//ReactDOM.render(elemento, document.getElementById('root'))
//Ao invés de usar reactdom.render utilizar o rood.render


root.render(
    <div>
        <Multi.BoaTarde nome='Eduarte'/>
        <Multi.BoaNoite nome='Gorete'/>
    </div>
)




// $('<h1>').html('react 2')