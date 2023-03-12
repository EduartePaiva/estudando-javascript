import './Header.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <header className="header d-flex flex-column flex-wrap">
        <h1 className="mt-3">
            <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
            {' ' + props.title}
            <p className="lead text-muted">{props.subtitle}</p>
        </h1>
    </header>