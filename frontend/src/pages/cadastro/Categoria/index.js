import React from 'react';
import { Link } from 'react-router-dom';
import PagesBasis from '../../../components/PagesBasis/index.js';

function CadastroCategoria () {
    return (
        <PagesBasis>
            <h1>Cadastro de Categoria</h1>

            <Link to='/'>
                Ir para Home Page
            </Link>
        </PagesBasis>
    );
}

export default CadastroCategoria;
