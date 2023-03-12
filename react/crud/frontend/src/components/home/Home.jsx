import React from "react";
import Main from "../template/Main";
import { faHome} from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <Main icon={faHome} title="Início" subtitle="Segundo Projeto do capítulo de React.">
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar a construção de um
            cadastro desenvolvido em React!</p>


    </Main>