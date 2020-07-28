import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Páginas:
import Home from './pages/Home/index.js';
import CadastroVideo from './pages/cadastro/Video/index.js';
const Pagina404 = () => (<div>Página não encontrada. {"(Erro 404)"}</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/cadastro/video' component={ CadastroVideo } />
      <Route component={ Pagina404 } /> {/* Rota sem o path será carregada se não houver carregado nenhuma rota anterior, servindo para a rota 404 de página não encontrada. */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
