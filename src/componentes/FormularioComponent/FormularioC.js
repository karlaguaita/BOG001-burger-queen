import './FormularioC.scss';
import { FaEnvelope,FaLock } from 'react-icons/fa';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase'

class FormularioComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      email: '',
      pass: ''
    };

    this.changeEmail = this.changeEmail.bind(this);
    this.changePass = this.changePass.bind(this);
  }

    render (){
      // Esto se usa para redireccionar a una nueva página cuando se cambia el estado redirect
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
      return (
        <div className="FormuC">
            <div className="titleForm">
              <p className = "textoFormu">  Ingrese su usuario y contraseña </p>
            </div>
            <div className="emailForm">
              <input className = "inputOne" placeholder="Usuario"  value={this.state.email} onChange={this.changeEmail}></input>
              <FaEnvelope className = "emailIcon"/>
            </div>
            <div className="passForm">
              <input className = "inputTwo" placeholder="Contraseña" type="password" value={this.state.pass} onChange={this.changePass}></input>
              <FaLock className = "emailIcon"/>
            </div>
            <div className="submitForm">
                <button className ="boton" onClick={() => {this.login()}}> INGRESAR </button>
            </div>
        </div>
      );
    }

    changeEmail(event) {
      // Establece el valor del correo
      console.log(event)
      this.setState({email: event.target.value});
    }

    changePass(event) {
      // Establece el valor del password
      this.setState({pass: event.target.value});
    }

    login(){
      let _this = this
      if (!this.state.email)
        alert('Por favor introducir su email')
      else if(!this.state.pass)
        alert('Por favor introducir su password')
      else
      {
        // Autenticamos el usuario con correo y password en firebase
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
          .then((user) => {
            console.log(user.user.uid)
            firebase.firestore()
            .collection('usuarios')
            .doc(user.user.uid)
            .get()
            .then(function(userData) {
              console.log(userData.data())
              if (userData.data().Tipo == 'Mesero')
                _this.setState({redirect: '/seleccion'})
              else
                _this.setState({redirect: '/chef'})
            }).catch(function(error) {
              console.log('Error fetching user data:', error);
            });
            
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(error.message)
          });
      }
      
    }
    
  }

export default FormularioComponent;