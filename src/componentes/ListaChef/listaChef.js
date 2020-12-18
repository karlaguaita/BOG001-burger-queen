import './ListaChef.scss';
import bqImg from '../../bqImg/img/src/mesa.png';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase'
import React from 'react';
import ReactShadowScroll from 'react-shadow-scroll';

class ListaChef extends Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false,
        userID: '',
        nombre: '',
        pedidos: []
      };

      this.getUser = this.getUser.bind(this);
      this.getPedidos = this.getPedidos.bind(this);
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
        let _this = this
      firebase.firestore().collection('pedidos').where('status', '==', 'En proceso').get()
      .then(snapshot => {
        if (!snapshot.empty){
          snapshot.forEach(async doc => {
            console.log(doc.data())
            let aux = []
            await snapshot.forEach(doc => {
                aux.push({
                    mesa: doc.data().mesa,
                    products: doc.data().products
                })
            })
            _this.setState({
                pedidos: aux
            })
          });
        }
      })
    }
  
    render(){
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
      return (
        <div className="SeleccionCheft">
            <p className = "SeleccionM">Nombre del Chef: {this.state.nombre} </p>
            <ReactShadowScroll className='BoxWhite'>
                {
                    this.state.pedidos.map((pedidos)=>
                    <div>
                        <div className='dataOrder2'>
                            <p className='textOrderHeader'>Mesa # {pedidos.mesa}</p>
                        </div>
                        <div className='resumenMenu3'>
                            <div className='headerMenu1'>
                                <div className='boxHeader1'>
                                    <p className='headerTextStyle2'>Producto</p>
                                </div>
                                <div className='boxHeader2'>
                                    <p className='headerTextStyle2'>Cantidad</p>
                                </div>
                                <div className='boxHeader3'>
                                    <p className='headerTextStyle2'>Precio</p>
                                </div>
                                <div className='boxHeader4'>
                                    <p className='headerTextStyle2'>Total</p>
                                </div>
                            </div>
                            {
                                pedidos.products.map((productos)=>
                                    <div className='bodyMenu1'>
                                        <div className='bodyHeader1'>
                                            <p className='bodyTextStyle2'>{productos.nombre}</p>
                                        </div>
                                        <div className='bodyHeader2'>
                                            <p className='bodyTextStyle2'>{productos.cantidad}</p>
                                        </div>
                                        <div className='bodyHeader3'>
                                        <p className='bodyTextStyle2'>{productos.precio}$</p>
                                        </div>
                                        <div className='bodyHeader4'>
                                            <p className='bodyTextStyle2'>{productos.cantidad*productos.precio}$</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )}
            </ReactShadowScroll>
        </div>
      );
    }
    
  }

  export default ListaChef; 



