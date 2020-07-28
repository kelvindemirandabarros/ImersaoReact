import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink/index.js';
import Button from '../Button/index.js';

function Menu () {
    return (
        <nav className='Menu'>
            <a href="/">
                <img className='Logo' src={Logo} alt="AluraFlix"/>
            </a>

            <Button className='ButtonLink' href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
