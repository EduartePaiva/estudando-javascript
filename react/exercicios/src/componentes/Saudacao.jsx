import React, { Component } from "react";

export default class Saudacao extends Component {
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    setTipoOuNome(e, tipoOuNome = 'nome') {
        this.setState({ [`${tipoOuNome}`]: e.target.value })
    }

    setTipo(e){
        this.setState({ [`tipo`]: e.target.value })
    }
    
    constructor(props){
        super(props)
        this.setTipoOuNome = this.setTipoOuNome.bind(this)
        this.setTipo = this.setTipo.bind(this)
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text"
                    placeholder="Tipo..."
                    value={tipo}
                    onChange={this.setTipo} />
                <input type="text"
                    placeholder="Nome..."
                    value={nome}
                    onChange={this.setTipoOuNome} />
            </div>
        )
    }
}