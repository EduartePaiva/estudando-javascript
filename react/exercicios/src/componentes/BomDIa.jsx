import React from "react"


// eslint-disable-next-line import/no-anonymous-default-export
export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h1 key='h2'>Minha idade é {props.idade}</h1>

]



/*
export default props => 
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h1>Minha idade é {props.idade}</h1>
    </Fragment>
*/