import './Nav.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'



// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! um navitem.jsx */}
            <Link to="/">
                <FontAwesomeIcon icon={props.iconHome} /> Inicio
            </Link>
            <Link to="/users">
                <FontAwesomeIcon icon={props.iconUsers} /> Usuários
            </Link>
        </nav>
    </aside>
