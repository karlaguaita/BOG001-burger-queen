import './seleccionMenu.scss';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import DesayunoMenu from './desayunoMenu'
import BurguerMenu from './burguerMenu'
import BebidasMenu from './bebidasMenu'
import LeftBox from './leftBox'
import RightBox from './rightBox'
import BurguerType from './burguerType'
import Adicionales from './adicionales'
import Acompannates from './acompanantes'
import bqImg from '../../bqImg/img/src/Sandjyq.png';
import bqImg2 from '../../bqImg/img/src/cafeAmericano.png';
import bqImg3 from '../../bqImg/img/src/cafeConLeche.png';
import bqImg4 from '../../bqImg/img/src/jugoNatural.png';
import bqImg7 from '../../bqImg/img/src/agua500.png';
import bqImg8 from '../../bqImg/img/src/agua750.png';
import bqImg9 from '../../bqImg/img/src/gaseosa500.png';
import bqImg10 from '../../bqImg/img/src/gaseosa750.png';
import bqImg5 from '../../bqImg/img/src/Hdoble.png';
import bqImg6 from '../../bqImg/img/src/Hsimple.png';
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
          bebidas: false,
          productos: true,
          pedido: false,
          products: [],
          burguer_type: 'Res',
          titlePart: 'burguer',
          pedido_UID: null
        };

        this.selectClient = this.selectClient.bind(this);
        this.selectDesayuno = this.selectDesayuno.bind(this);
        this.selectBurguer = this.selectBurguer.bind(this);
        this.selectBebidas = this.selectBebidas.bind(this);
        this.desayuno1 = this.desayuno1.bind(this);
        this.desayuno2 = this.desayuno2.bind(this);
        this.desayuno3 = this.desayuno3.bind(this);
        this.desayuno4 = this.desayuno4.bind(this);
        this.burguer1 = this.burguer1.bind(this);
        this.burguer2 = this.burguer2.bind(this);
        this.bebidas1 = this.bebidas1.bind(this);
        this.bebidas2 = this.bebidas2.bind(this);
        this.bebidas3 = this.bebidas3.bind(this);
        this.bebidas4 = this.bebidas4.bind(this);
        this.back = this.back.bind(this);
        this.procesar = this.procesar.bind(this);
        this.carne1 = this.carne1.bind(this);
        this.carne2 = this.carne3.bind(this);
        this.carne3 = this.carne3.bind(this);
        this.selectBurguerType = this.selectBurguerType.bind(this)
        this.adicional1 = this.adicional1.bind(this);
        this.adicional2 = this.adicional2.bind(this);
        this.adicional3 = this.adicional3.bind(this);
        this.selectAdicionales = this.selectAdicionales.bind(this)
        this.acompanante1 = this.acompanante1.bind(this);
        this.acompanante2 = this.acompanante2.bind(this);
        this.selectAcompanantes = this.selectAcompanantes.bind(this)
        this.getPedido = this.getPedido.bind(this)
        this.volver = this.volver.bind(this)
        this.pagar = this.pagar.bind(this)
    }

    componentDidMount(props){
        var user = firebase.auth().currentUser;
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
            this.getPedido(mesa)
        }
        else{
            // No te dejmos entrar XD
            this.setState({redirect: '/'})
        }
        
    }

    getPedido(mesa){
        let _this = this
        firebase.firestore().collection('pedidos').where('status', '==', 'En proceso').where('mesa', '==', mesa).get()
        .then(snapshot => {
            console.log(snapshot)
            if (!snapshot.empty)
            {
                snapshot.forEach(doc => {
                    _this.setState({
                        fecha: doc.data().date,
                        cliente: doc.data().cliente,
                        burguer_type: doc.data().burguer_type,
                        products: doc.data().products,
                        estatus: doc.data().status,
                        nombre: doc.data().mesero,
                        productos: false,
                        pedido: true,
                        pedido_UID: doc.id
                    })
                })
            }
        })
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
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Sandwich',
            img: bqImg,
            cantidad: 1,
            precio: 7
        })
        this.setState({
            productos: false,
            pedido: true,
            product: aux
        })
    }

    desayuno2(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Café americano',
            img: bqImg2,
            cantidad: 1,
            precio: 4
        })
        this.setState({
            productos: false,
            pedido: true,
            product: aux
        })
    }

    desayuno3(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Café con leche',
            img: bqImg3,
            cantidad: 1,
            precio: 5
        })
        this.setState({
            productos: false,
            pedido: true,
            product: aux
        })
    }

    desayuno4(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Jugo natural',
            img: bqImg4,
            cantidad: 1,
            precio: 8
        })
        this.setState({
            productos: false,
            pedido: true,
            product: aux
        })
    }

    burguer1(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Hamb. Doble',
            img: bqImg5,
            cantidad: 1,
            precio: 10
        })
        this.setState({
            productos: false,
            pedido: true,
            product: aux
        })
    }

    burguer2(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Hamb. simple',
            img: bqImg6,
            cantidad: 1,
            precio: 9
        })
        this.setState({
            productos: false,
            pedido: true,
            product: aux
        })
    }

    bebidas1(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Agua 300ml',
            img: bqImg7,
            cantidad: 1,
            precio: 2
        })
        this.setState({
            productos: false,
            pedido: true,
            product: aux
        })
    }

    bebidas2(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Agua 700ml',
            img: bqImg8,
            cantidad: 1,
            precio: 3
        })
        this.setState({
            productos: false,
            pedido: true,
            product: aux
        })
    }

    bebidas3(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Gaseosa 500ml',
            img: bqImg9,
            cantidad: 1,
            precio: 4
        })
        this.setState({
            productos: false,
            pedido: true,
            product: aux
        })
    }

    bebidas4(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Gaseosa 750ml',
            img: bqImg10,
            cantidad: 1,
            precio: 5
        })
        this.setState({
            productos: false,
            pedido: true,
            product: aux
        })
    }

    carne1(){
        this.setState({
            titlePart: 'burguer',
            burguer: true,
            burguer_type: 'res'
        })
    }

    carne2(){
        this.setState({
            titlePart: 'burguer',
            burguer: true,
            burguer_type: 'pollo'
        })
    }

    carne3(){
        this.setState({
            titlePart: 'burguer',
            burguer: true,
            burguer_type: 'vege'
        })
    }

    selectBurguerType(){
        this.setState({
            burguer: false,
            titlePart: 'tipo'
        })
    }

    adicional1(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Extra: huevo',
            cantidad: 1,
            precio: 1
        })
        this.setState({
            titlePart: 'burguer',
            burguer: true,
            product: aux
        })
    }

    adicional2(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Extra: Queso',
            cantidad: 1,
            precio: 1
        })
        this.setState({
            titlePart: 'burguer',
            burguer: true,
            product: aux
        })
    }

    adicional3(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Extra: tocineta',
            cantidad: 1,
            precio: 1
        })
        this.setState({
            titlePart: 'burguer',
            burguer: true,
            product: aux
        })
    }

    selectAdicionales(){
        this.setState({
            burguer: false,
            titlePart: 'adicionales'
        })
    }

    acompanante1(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Acom: Aros',
            cantidad: 1,
            precio: 5
        })
        this.setState({
            titlePart: 'burguer',
            burguer: true,
            product: aux
        })
    }

    acompanante2(){
        let aux = []

        aux = this.state.products
        aux.push({
            nombre: 'Acom: Papas',
            cantidad: 1,
            precio: 5
        })
        this.setState({
            titlePart: 'burguer',
            burguer: true,
            product: aux
        })
    }

    selectAcompanantes(){
        this.setState({
            burguer: false,
            titlePart: 'acompanante'
        })
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
        document.getElementsByClassName("botonMesaSelect2")[0].style.background='#2F80EDx|'
        document.getElementsByClassName("botonMesaSelect3")[0].style.background='#180B69'
    }

    back(){
        this.setState({
            productos: true,
            pedido: false,
        })
    }

    procesar(){
        if (this.state.pedido_UID)
        {
            const data = {
                cliente: this.state.cliente,
                products: this.state.products,
                burguer_type: this.state.burguer_type,
                status: 'En proceso',
                date: this.state.fecha,
                mesa: this.state.mesa,
                mesero_uid: this.state.userID,
                mesero: this.state.nombre
            }
            // Colocamos el pedido en la base de datos
            firebase.firestore().collection("pedidos").doc(this.state.pedido_UID).set(data)
            this.setState({redirect: '/seleccion'})
        }
        else
        {
            const data = {
                cliente: this.state.cliente,
                products: this.state.products,
                burguer_type: this.state.burguer_type,
                status: 'En proceso',
                date: this.state.fecha,
                mesa: this.state.mesa,
                mesero_uid: this.state.userID,
                mesero: this.state.nombre
            }
            // Colocamos el pedido en la base de datos
            firebase.firestore().collection("pedidos").doc().set(data)
            this.setState({redirect: '/seleccion'})
        }
    }

    volver(){
        this.setState({redirect: '/seleccion'})
    }

    pagar(){
        if (this.state.pedido_UID)
        {
            const data = {
                cliente: this.state.cliente,
                products: this.state.products,
                burguer_type: this.state.burguer_type,
                status: 'Pago',
                date: this.state.fecha,
                mesa: this.state.mesa,
                mesero_uid: this.state.userID,
                mesero: this.state.nombre
            }
            // Colocamos el pedido en la base de datos
            firebase.firestore().collection("pedidos").doc(this.state.pedido_UID).set(data)
            this.setState({redirect: '/seleccion'})
        }
        else{
            alert('Debe primero procesar el pedido')
        }
    }

    render(){
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                {
                    this.state.productos &&
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
                            {
                                this.state.titlePart == 'burguer' &&
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
                            }
                            {
                                this.state.titlePart == 'tipo' &&
                                <div className='typeMenu'>
                                    <div className='botonSelect'>
                                        <div className='botonMesaSelect'>Tipo</div>
                                    </div>
                                </div>
                            }
                            {
                                this.state.titlePart == 'adicionales' &&
                                <div className='typeMenu'>
                                    <div className='botonSelect'>
                                        <div className='botonMesaSelect'>Adicionales</div>
                                    </div>
                                </div>
                            }
                            {
                                this.state.titlePart == 'acompanante' &&
                                <div className='typeMenu'>
                                    <div className='botonSelect'>
                                        <div className='botonMesaSelect'>Acompañantes</div>
                                    </div>
                                </div>
                            }
                            <div className='picsMenu'>
                                {
                                    this.state.desayunos &&
                                    <DesayunoMenu
                                        desayuno1={this.desayuno1}
                                        desayuno2={this.desayuno2}
                                        desayuno3={this.desayuno3}
                                        desayuno4={this.desayuno4}
                                    />
                                }
                                {
                                    this.state.burguer &&
                                    <div className='BurguerMenu'>
                                        <BurguerMenu
                                            burguer1={this.burguer1}
                                            burguer2={this.burguer2}
                                        />
                                        <div className='typeMenu2'>
                                            <div className='botonSelect'>
                                                <button className='botonMesaSelect' onClick={this.selectBurguerType}>Tipo</button>
                                            </div>
                                            <div className='botonSelect'>
                                                <button className='botonMesaSelect2' onClick={this.selectAdicionales}>Adicionales</button>
                                            </div>
                                            <div className='botonSelect'>
                                                <button className='botonMesaSelect3' onClick={this.selectAcompanantes}>Acompañantes</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    this.state.bebidas &&
                                    <BebidasMenu
                                        bebidas1={this.bebidas1}
                                        bebidas2={this.bebidas2}
                                        bebidas3={this.bebidas3}
                                        bebidas4={this.bebidas4}
                                    />
                                }
                                {
                                    this.state.titlePart == 'tipo' &&
                                    <BurguerType
                                        carne1={this.carne1}
                                        carne2={this.carne2}
                                        carne3={this.carne3}
                                    />
                                }
                                {
                                    this.state.titlePart == 'adicionales' &&
                                    <Adicionales
                                        adicional1={this.adicional1}
                                        adicional2={this.adicional2}
                                        adicional3={this.adicional3}
                                    />
                                }
                                {
                                    this.state.titlePart == 'acompanante' &&
                                    <Acompannates
                                        acompanante1={this.acompanante1}
                                        acompanante2={this.acompanante2}
                                    />
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
                }
                {
                    this.state.pedido &&
                    <div className="Smenu">
                        <p className = "SeleccionM">Nombre del Mesero: {this.state.nombre} </p>
                        <div className='BoxWhiteLeft'>
                            <LeftBox
                                product={this.state.products}
                                cliente={this.state.cliente}
                                hour={this.state.hour}
                                mesa={this.state.mesa}
                                fecha={this.state.fecha}
                                estatus={this.state.estatus}
                            />
                        </div>
                        <div className='BoxWhiteRight'>
                            <RightBox
                                product={this.state.products}
                                cliente={this.state.cliente}
                                hour={this.state.hour}
                                mesa={this.state.mesa}
                                fecha={this.state.fecha}
                                estatus={this.state.estatus}
                                back={this.back}
                                procesar={this.procesar}
                                volver={this.volver}
                                pagar={this.pagar}
                            />
                        </div>
                    </div>
                }
            </div>
            
        );
    }
}

export default SeleccionMenu;