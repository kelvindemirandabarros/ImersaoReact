import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink/index.js';

function Menu () {
    return (
        <nav className='Menu'>
            <a href="/">
                <img className='Logo' src={Logo} alt="AluraFlix"/>
            </a>

            <ButtonLink className='ButtonLink' href="/">
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;
