import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink/index.js';
import Button from '../Button/index.js';
import { Link } from 'react-router-dom';

function Menu () {
    return (
        <nav className='Menu'>
            <Link to="/">
                <img className='Logo' src={Logo} alt="AluraFlix"/>
            </Link>

            <Button as={Link} className='ButtonLink' to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
