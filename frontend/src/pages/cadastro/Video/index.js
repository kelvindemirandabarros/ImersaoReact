import React from 'react';
import PagesBasis from '../../../components/PagesBasis/index.js';
import { Link } from 'react-router-dom';

function CadastroVideo () {
    return (
        <PagesBasis>
            <h1>Cadastro de Vídeo</h1>

            <Link to='/cadastro/categoria'>
                Cadastrar Categoria
            </Link>
        </PagesBasis>
    );
}

export default CadastroVideo;
