import './seleccionMenu.scss';
import React from 'react';
import { Confirm } from 'react-st-modal';

const RightBox = ({product, cliente, hour, mesa, fecha, estatus, back, procesar, volver, pagar}) => {
    let total = 0
    for (let index = 0; index < product.length; index++) {
        total += product[index].precio*product[index].cantidad
    }
    console.log(product)
    return(
        <div>
            <div className='dataOrder'>
                <p className='textOrderHeader'>Mesa # {mesa} {hour}</p>
                <p className='textOrderHeader'>{fecha}</p>
                <p className='textOrderHeader'>{cliente}</p>
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
                    product.map((productos)=>
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
                <div className='bodyMenu1'>
                    <div className='bodyHeader1'>
                        <p className='bodyTextStyle2'>Total</p>
                    </div>
                    <div className='bodyHeader5'>
                        <p className='bodyTextStyle2'>{total}$</p>
                    </div>
                </div>
                <div className='typeMenu1'>
                    <div className='botonSelect'>
                        <button className='botonMesaSelectBack' onClick={back}>Añadir mas</button>
                    </div>
                    <div className='botonSelect'>
                        <button className='botonMesaSelectProcesar' onClick={async () => {
                            const result = await Confirm('Deseas enviar el pedido?', 
                                'Pedido:');
                            
                                if (result) {
                                    procesar()
                                } else {
                                    // Сonfirmation not confirmed
                                }
                            }}>Procesar pedido</button>
                    </div>
                </div>
                <div className='typeMenu1'>
                    <div className='botonSelect'>
                        <button className='botonMesaSelectVolver' onClick={volver}>Volver</button>
                    </div>
                    <div className='botonSelect'>
                        <button className='botonMesaSelectPagar' onClick={async () => {
                            const result = await Confirm('Deseas pagar la cuenta por: '+total+'$?', 
                                'Pagar mesa: '+mesa);
                            
                                if (result) {
                                    pagar()
                                } else {
                                    // Сonfirmation not confirmed
                                }
                            }}>Pagar pedido</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBox;