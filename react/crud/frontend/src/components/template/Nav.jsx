import './Nav.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! um navitem.jsx */}
            <a href="#/">
                <FontAwesomeIcon icon={props.iconHome} /> Inicio
            </a>
            <a href="#/users">
                <FontAwesomeIcon icon={props.iconUsers} /> Usuários
            </a>
        </nav>
    </aside>
