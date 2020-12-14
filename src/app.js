import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Intro from './componentes/intro.js'
import HeaderComponete from './componentes/headerComponete/hC.js'
import FooterComponent from './componentes/FooterComponent/FooterComponent.js'
import FormularioComponent from './componentes/FormularioComponent/FormularioC.js'
import SeleccionMesa from './componentes/SeleccionMesa/SeleccionMesa.js'
import SeleccionMenu from './componentes/seleccionMenu/seleccionMenu.js'
import './app.scss';
import firebase from 'firebase/app'

var firebaseConfig = {
  apiKey: "AIzaSyB0ZeQA6dcU6rUVso8yMx5lJX-ztHecWhg",
  authDomain: "bqueen-e2c3e.firebaseapp.com",
  projectId: "bqueen-e2c3e",
  storageBucket: "bqueen-e2c3e.appspot.com",
  messagingSenderId: "108804313634",
  appId: "1:108804313634:web:5deceb806048c0d03b707b",
  measurementId: "G-PLZRM6PJHQ"
};
// Inicia Firebase
firebase.initializeApp(firebaseConfig);

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
          <Route path="/menu">
            <Menu />
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


  function Menu() {
    return (
      <div>
          <HeaderComponete/>
          <FooterComponent/>
          <SeleccionMenu/>
      </div>
    );
  }