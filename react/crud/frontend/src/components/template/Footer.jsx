import './Footer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <footer className="footer">
        <span>
            Desenvolvido com <FontAwesomeIcon icon={faHeart} className="text-danger" /> por
            <strong> Cod<span className='text-danger'>3</span>r</strong>
        </span>
    </footer>