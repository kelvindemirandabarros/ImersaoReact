import React from 'react';
import Menu from '../Menu/index.js';
import Footer from '../Footer/index.js';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var( --black );
    color: var( --white );
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function PagesBasis ({ children }) {
    return (
        <>
            <Menu />
            
            <Main>
                { children }
            </Main>

            <Footer />
        </>
    );
}

export default PagesBasis;
