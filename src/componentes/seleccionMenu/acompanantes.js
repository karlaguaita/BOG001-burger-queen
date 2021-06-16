import './seleccionMenu.scss';
import bqImg7 from '../../bqImg/img/src/aroCebolla.png';
import bqImg8 from '../../bqImg/img/src/papasFritas.png';

const Acompanantes = ({acompanante1, acompanante2}) => {
    return(
        <div className='groupImage'>
            <div className='desayunoImg'>
                <img src= {bqImg7} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={acompanante1}>Seleccionar</button>
                </div>
            </div>
            <div className='desayunoImg'>
                <img src= {bqImg8} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={acompanante2}>Seleccionar</button>
                </div>
            </div>
        </div>
    )
}

export default Acompanantes;