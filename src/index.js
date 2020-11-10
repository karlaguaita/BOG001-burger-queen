import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Intro from './componentes/intro.js'
import HeaderComponete from './componentes/headerComponete/hC.js'
import FooterComponent from './componentes/FooterComponent/FooterComponent.js'
import FormularioComponent from './componentes/FormularioComponent/FormularioC.js'
import App from './app.js'


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

