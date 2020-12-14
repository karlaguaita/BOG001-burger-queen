import './seleccionMenu.scss';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import bqImg from '../../bqImg/img/src/Sandjyq.png';
import bqImg2 from '../../bqImg/img/src/cafeAmericano.png';
import bqImg3 from '../../bqImg/img/src/cafeConLeche.png';
import bqImg4 from '../../bqImg/img/src/jugoNatural.png';
import bqImg5 from '../../bqImg/img/src/Hdoble.png';
import bqImg6 from '../../bqImg/img/src/Hsimple.png';
import bqImg7 from '../../bqImg/img/src/agua500.png';
import bqImg8 from '../../bqImg/img/src/agua750.png';
import bqImg9 from '../../bqImg/img/src/gaseosa500.png';
import bqImg10 from '../../bqImg/img/src/gaseosa750.png';
var moment = require('moment'); // Libreria para el manejo del tiempo


class SeleccionMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: false,
          userID: '',
          nombre: '',
          hour: '',
          mesa: '',
          cliente: '',
          estatus: 'Pendiente',
          desayunos: false,
          burguer: false,
          bebidas: false
        };

        this.selectClient = this.selectClient.bind(this);
        this.selectDesayuno = this.selectDesayuno.bind(this);
        this.selectBurguer = this.selectBurguer.bind(this);
        this.selectBebidas = this.selectBebidas.bind(this);
    }

    componentDidMount(props){
        var user = firebase.auth().currentUser;
        console.log(user.uid)
        if (user) {
            // Llenamos la variable con el ID de firebase
            this.setState({userID: user.uid,
            hour: moment().format('hh:mm')}, 
            ()=>{ this.getUser(user.uid)})
            let mesa
            if (localStorage && localStorage.getItem('mesa')) {
                mesa = JSON.parse(localStorage.getItem('mesa'));
                this.setState({mesa,
                fecha: moment().format("MMM DD YYYY hh:mm")})
            }
            console.log(mesa)
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

    selectClient(event){
        this.setState({cliente: event.target.value});
    }

    desayuno1(){

    }

    desayuno2(){

    }

    desayuno3(){

    }

    desayuno4(){

    }

    burguer1(){

    }

    burguer2(){

    }

    selectDesayuno(){
        this.setState({
            desayunos: true, 
            burguer: false,
            bebidas: false
        })

        document.getElementsByClassName("botonMesaSelect")[0].style.background='#180B69'
        document.getElementsByClassName("botonMesaSelect2")[0].style.background='#2F80ED'
        document.getElementsByClassName("botonMesaSelect3")[0].style.background='#2F80ED'
    }

    selectBurguer(){
        this.setState({
            burguer: true, 
            desayunos: false,
            bebidas: false
        })

        document.getElementsByClassName("botonMesaSelect")[0].style.background='#2F80ED'
        document.getElementsByClassName("botonMesaSelect2")[0].style.background='#180B69'
        document.getElementsByClassName("botonMesaSelect3")[0].style.background='#2F80ED'
    }

    selectBebidas(){
        this.setState({
            burguer: false, 
            desayunos: false,
            bebidas: true
        })

        document.getElementsByClassName("botonMesaSelect")[0].style.background='#2F80ED'
        document.getElementsByClassName("botonMesaSelect2")[0].style.background='#2F80ED'
        document.getElementsByClassName("botonMesaSelect3")[0].style.background='#180B69'
    }

    render(){
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="Smenu">
                <p className = "SeleccionM">Nombre del Mesero: {this.state.nombre} </p>
                <div className='BoxWhite'>
                    <div className='titlesMenu'>
                        <div className='hour'>
                            <p className='textFormatMenu'>Hora: {this.state.hour}</p>
                        </div>
                        <div className='titleBoxMenu'>
                            <p className='textFormatMenu'>Platos de comida</p>
                        </div>
                    </div>
                    <div className='typeMenu'>
                        <div className='botonSelect'>
                            <button className='botonMesaSelect' onClick={this.selectDesayuno}>Desayunos</button>
                        </div>
                        <div className='botonSelect'>
                            <button className='botonMesaSelect2' onClick={this.selectBurguer}>Burguer</button>
                        </div>
                        <div className='botonSelect'>
                            <button className='botonMesaSelect3' onClick={this.selectBebidas}>Bebidas</button>
                        </div>
                    </div>
                    <div className='picsMenu'>
                        {
                            this.state.desayunos &&
                            <div className='groupImage'>
                                <div className='desayunoImg'>
                                    <img src= {bqImg} alt ="" className="Sandjyq"/>
                                    <div>
                                        <button className='botonComidas' onClick={this.desayuno1}>Seleccionar</button>
                                    </div>
                                </div>
                                <div className='desayunoImg'>
                                    <img src= {bqImg2} alt ="" className="Sandjyq"/>
                                    <div>
                                        <button className='botonComidas' onClick={this.desayuno2}>Seleccionar</button>
                                    </div>
                                </div>
                                <div className='desayunoImg'>
                                    <img src= {bqImg3} alt ="" className="Sandjyq"/>
                                    <div>
                                        <button className='botonComidas' onClick={this.desayuno3}>Seleccionar</button>
                                    </div>
                                </div>
                                <div className='desayunoImg'>
                                    <img src= {bqImg4} alt ="" className="Sandjyq"/>
                                    <div>
                                        <button className='botonComidas' onClick={this.desayuno4}>Seleccionar</button>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            this.state.burguer &&
                            <div className='groupImage'>
                                <div className='desayunoImg'>
                                    <img src= {bqImg5} alt ="" className="Sandjyq"/>
                                    <div>
                                        <button className='botonComidas' onClick={this.burguer1}>Seleccionar</button>
                                    </div>
                                </div>
                                <div className='desayunoImg'>
                                    <img src= {bqImg6} alt ="" className="Sandjyq"/>
                                    <div>
                                        <button className='botonComidas' onClick={this.burguer2}>Seleccionar</button>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            this.state.bebidas &&
                            <div className='groupImage'>
                                <div className='desayunoImg'>
                                    <img src= {bqImg7} alt ="" className="Sandjyq"/>
                                    <div>
                                        <button className='botonComidas' onClick={this.bebidas1}>Seleccionar</button>
                                    </div>
                                </div>
                                <div className='desayunoImg'>
                                    <img src= {bqImg8} alt ="" className="Sandjyq"/>
                                    <div>
                                        <button className='botonComidas' onClick={this.bebidas2}>Seleccionar</button>
                                    </div>
                                </div>
                                <div className='desayunoImg'>
                                    <img src= {bqImg9} alt ="" className="Sandjyq"/>
                                    <div>
                                        <button className='botonComidas' onClick={this.bebidas3}>Seleccionar</button>
                                    </div>
                                </div>
                                <div className='desayunoImg'>
                                    <img src= {bqImg10} alt ="" className="Sandjyq"/>
                                    <div>
                                        <button className='botonComidas' onClick={this.bebidas4}>Seleccionar</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='resumenMenu'>
                        <div className='headerMenu'>
                            <div className='boxHeader'>
                                <p className='headerTextStyle'># Mesa</p>
                            </div>
                            <div className='boxHeader'>
                                <p className='headerTextStyle'>Fecha</p>
                            </div>
                            <div className='boxHeader'>
                                <p className='headerTextStyle'>Cliente</p>
                            </div>
                            <div className='boxHeaderEnd'>
                                <p className='headerTextStyle'>Estatus</p>
                            </div>
                        </div>
                        <div className='bodyMenu'>
                            <div className='bodyHeader'>
                                <p className='bodyTextStyle'>{this.state.mesa}</p>
                            </div>
                            <div className='bodyHeader'>
                                <p className='bodyTextStyle'>{this.state.fecha}</p>
                            </div>
                            <div className='bodyHeader'>
                                <input className='bodyTextStyleInput'value={this.state.cliente} onChange={this.selectClient}></input>
                            </div>
                            <div className='bodyHeaderEnd'>
                                <p className='bodyTextStyle'>{this.state.estatus}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SeleccionMenu;