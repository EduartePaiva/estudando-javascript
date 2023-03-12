import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav iconHome={faHome} iconUsers={faUsers} />
            <Routes />
            <Footer />
        </div>

    </BrowserRouter>