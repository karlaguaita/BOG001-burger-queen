import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Intro from './componentes/intro.js'
import HeaderComponete from './componentes/headerComponete/hC.js'
import FooterComponent from './componentes/FooterComponent/FooterComponent.js'
import FormularioComponent from './componentes/FormularioComponent/FormularioC.js'
import SeleccionMesa from './componentes/SeleccionMesa/SeleccionMesa.js'
import './app.scss';

export default function App() {
  return (
    <Router>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/seleccion">
            <Mesa/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <Intro/>
  );
}

function Form() {
  return (
    <div>
        <HeaderComponete/>
        <FormularioComponent className="formu"/>
        <FooterComponent/>
    </div>
  );
}

function Mesa() {
    return (
      <div>
          <HeaderComponete/>
          <FooterComponent/>
          <SeleccionMesa/>
      </div>
    );
  }