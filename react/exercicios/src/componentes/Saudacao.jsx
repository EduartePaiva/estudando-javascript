import React, { Component } from "react";

export default class Saudacao extends Component {
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    setTipoOuNome(e, tipoOuNome) {
        this.setState({ [`${tipoOuNome}`]: e.target.value })
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
                    onChange={e => this.setTipoOuNome(e, "tipo")} />
                <input type="text"
                    placeholder="Nome..."
                    value={nome}
                    onChange={e => this.setTipoOuNome(e, "nome")} />
            </div>
        )
    }
}