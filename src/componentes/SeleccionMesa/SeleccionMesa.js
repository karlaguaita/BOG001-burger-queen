import './SeleccionMesa.scss';
import bqImg from '../../bqImg/img/src/mesa.png';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase'

class SeleccionMesa extends Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false,
        userID: '',
        nombre: ''
      };

      this.getUser = this.getUser.bind(this);
      this.mesa1 = this.mesa1.bind(this);
      this.mesa2 = this.mesa2.bind(this);
      this.mesa3 = this.mesa3.bind(this);
      this.mesa4 = this.mesa4.bind(this);
      this.mesa5 = this.mesa5.bind(this);
      this.mesa6 = this.mesa6.bind(this);
    }

    componentDidMount(){
      var user = firebase.auth().currentUser;
      console.log(user.uid)
      if (user) {
        // Llenamos la variable con el ID de firebase
        this.setState({userID: user.uid}, 
          ()=>{ this.getUser(user.uid)})
      }
      else{
        // No te dejmos entrar XD
        this.setState({redirect: '/'})
      }
    }

    // Obtenemos la información del usuario
    getUser(uid){
      // Usamos una variable auxiliar al trabajar dentro de una consulta de firebase sino no podemos enviar data al state
      let _this = this
      //consultamos los datos de usuario en firebase
      firebase.firestore()
      .collection('usuarios')
      .doc(uid)
      .get()
      .then(function(user) {
        _this.setState({nombre: user.data().nombre})
      }).catch(function(error) {
        console.log('Error fetching user data:', error);
      });
    }

    mesa1(){
      localStorage.setItem('mesa',JSON.stringify(1))
      this.setState({redirect: '/menu'})
      
    }

    mesa2(){
      localStorage.setItem('mesa',JSON.stringify(2))
      this.setState({redirect: '/menu'})
    }

    mesa3(){
      localStorage.setItem('mesa',JSON.stringify(3))
      this.setState({redirect: '/menu'})
    }

    mesa4(){
      localStorage.setItem('mesa',JSON.stringify(4))
      this.setState({redirect: '/menu'})
    }

    mesa5(){
      localStorage.setItem('mesa',JSON.stringify(5))
      this.setState({redirect: '/menu'})
    }

    mesa6(){
      localStorage.setItem('mesa',JSON.stringify(6))
      this.setState({redirect: '/menu'})
    }
  
    render(){
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
      return (
        <div className="SeleccionMesa">
            <p className = "SeleccionM">Nombre del Mesero: {this.state.nombre} </p>
            <div className ="grupoUno">
                <div className="ImgMesa">
                  <img src= {bqImg} alt ="" className="MesaImg"/>
                  <div className="botonMesaDiv">
                    <button className='botonMesa' onClick={this.mesa1}>Seleccionar mesa 1</button>
                  </div>
                </div>
                <div className="ImgMesa">
                    <img src= {bqImg} alt ="" className="MesaImg"/>
                    <div className="botonMesaDiv">
                      <button className='botonMesa' onClick={this.mesa2}>Seleccionar mesa 2</button>
                    </div>
                </div>
                <div className="ImgMesa">
                    <img src= {bqImg} alt ="" className="MesaImg"/>
                    <div className="botonMesaDiv">
                      <button className='botonMesa' onClick={this.mesa3}>Seleccionar mesa 3</button>
                    </div>
                </div>
            </div>
            <div className ="grupoUno">
                <div className="ImgMesa">
                    <img src= {bqImg} alt ="" className="MesaImg"/>
                    <div className="botonMesaDiv">
                      <button className='botonMesa' onClick={this.mesa4}>Seleccionar mesa 4</button>
                    </div>
                </div>
                <div className="ImgMesa">
                    <img src= {bqImg} alt ="" className="MesaImg"/>
                    <div className="botonMesaDiv">
                      <button className='botonMesa' onClick={this.mesa5}>Seleccionar mesa 5</button>
                    </div>
                </div>
                <div className="ImgMesa">
                    <img src= {bqImg} alt ="" className="MesaImg"/>
                    <div className="botonMesaDiv">
                      <button className='botonMesa' onClick={this.mesa6}>Seleccionar mesa 6</button>
                    </div>
                </div>
            </div>
        </div>
      );
    }
    
  }

  export default SeleccionMesa; 



