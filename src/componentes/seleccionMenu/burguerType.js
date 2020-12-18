import './seleccionMenu.scss';
import bqImg7 from '../../bqImg/img/src/carnederes.png';
import bqImg8 from '../../bqImg/img/src/pollo.png';
import bqImg9 from '../../bqImg/img/src/carnevege.png';

const BurguerType = ({carne1, carne2, carne3}) => {
    return(
        <div className='groupImage'>
            <div className='desayunoImg'>
                <img src= {bqImg7} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={carne1}>Seleccionar</button>
                </div>
            </div>
            <div className='desayunoImg'>
                <img src= {bqImg8} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={carne2}>Seleccionar</button>
                </div>
            </div>
            <div className='desayunoImg'>
                <img src= {bqImg9} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={carne3}>Seleccionar</button>
                </div>
            </div>
        </div>
    )
}

export default BurguerType;