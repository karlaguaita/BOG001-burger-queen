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
        nombre: '',
        userMesa1: '',
        userMesa2: '',
        userMesa3: '',
        userMesa4: '',
        userMesa5: '',
        userMesa6: '',
      };

      this.getUser = this.getUser.bind(this);
      this.getPedidos = this.getPedidos.bind(this);
      this.mesa1 = this.mesa1.bind(this);
      this.mesa2 = this.mesa2.bind(this);
      this.mesa3 = this.mesa3.bind(this);
      this.mesa4 = this.mesa4.bind(this);
      this.mesa5 = this.mesa5.bind(this);
      this.mesa6 = this.mesa6.bind(this);
    }

    componentDidMount(){
      var user = firebase.auth().currentUser;
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

      this.getPedidos()
    }

    getPedidos(){
      firebase.firestore().collection('pedidos').where('status', '==', 'En proceso').get()
      .then(snapshot => {
        if (!snapshot.empty){
          snapshot.forEach(doc => {
            console.log(doc.data())
            if (doc.data().mesa == 1)
            {
              if (doc.data().cliente)
                this.setState({userMesa1: doc.data().cliente})
              else
                this.setState({userMesa1: 'Cliente 1'})
            }
            else if (doc.data().mesa == 2)
            {
              if (doc.data().cliente)
                this.setState({userMesa2: doc.data().cliente})
              else
                this.setState({userMesa2: 'Cliente 2'})
            }
            else if (doc.data().mesa == 3)
            {
              if (doc.data().cliente)
                this.setState({userMesa3: doc.data().cliente})
              else
                this.setState({userMesa3: 'Cliente 3'})
            }
            else if (doc.data().mesa == 4)
            {
              if (doc.data().cliente)
                this.setState({userMesa4: doc.data().cliente})
              else
                this.setState({userMesa4: 'Cliente 4'})
            }
            else if (doc.data().mesa == 5)
            {
              if (doc.data().cliente)
                this.setState({userMesa5: doc.data().cliente})
              else
                this.setState({userMesa5: 'Cliente 5'})
            }
            else if (doc.data().mesa == 6)
            {
              if (doc.data().cliente)
                this.setState({userMesa6: doc.data().cliente})
              else
                this.setState({userMesa6: 'Cliente 6'})
            }
          });
        }
      })
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
                    <p className='TextMesa'>{this.state.userMesa1}</p>
                    <button className='botonMesa' onClick={this.mesa1}>Seleccionar mesa 1</button>
                  </div>
                </div>
                <div className="ImgMesa">
                    <img src= {bqImg} alt ="" className="MesaImg"/>
                    <div className="botonMesaDiv">
                      <p className='TextMesa'>{this.state.userMesa2}</p>
                      <button className='botonMesa' onClick={this.mesa2}>Seleccionar mesa 2</button>
                    </div>
                </div>
                <div className="ImgMesa">
                    <img src= {bqImg} alt ="" className="MesaImg"/>
                    <div className="botonMesaDiv">
                      <p className='TextMesa'>{this.state.userMesa3}</p>
                      <button className='botonMesa' onClick={this.mesa3}>Seleccionar mesa 3</button>
                    </div>
                </div>
            </div>
            <div className ="grupoUno">
                <div className="ImgMesa">
                    <img src= {bqImg} alt ="" className="MesaImg"/>
                    <div className="botonMesaDiv">
                      <p className='TextMesa'>{this.state.userMesa4}</p>
                      <button className='botonMesa' onClick={this.mesa4}>Seleccionar mesa 4</button>
                    </div>
                </div>
                <div className="ImgMesa">
                    <img src= {bqImg} alt ="" className="MesaImg"/>
                    <div className="botonMesaDiv">
                      <p className='TextMesa'>{this.state.userMesa5}</p>
                      <button className='botonMesa' onClick={this.mesa5}>Seleccionar mesa 5</button>
                    </div>
                </div>
                <div className="ImgMesa">
                    <img src= {bqImg} alt ="" className="MesaImg"/>
                    <div className="botonMesaDiv">
                      <p className='TextMesa'>{this.state.userMesa6}</p>
                      <button className='botonMesa' onClick={this.mesa6}>Seleccionar mesa 6</button>
                    </div>
                </div>
            </div>
        </div>
      );
    }
    
  }

  export default SeleccionMesa; 



