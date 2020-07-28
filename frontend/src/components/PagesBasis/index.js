import React from 'react';
import Menu from '../Menu/index.js';
import Footer from '../Footer/index.js';

function PagesBasis ({ children }) {
    return (
        <div>
            <Menu />
            { children }
            <Footer />
        </div>
    );
}

export default PagesBasis;
