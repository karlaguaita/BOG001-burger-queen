import './seleccionMenu.scss';
import bqImg7 from '../../bqImg/img/src/agua500.png';
import bqImg8 from '../../bqImg/img/src/agua750.png';
import bqImg9 from '../../bqImg/img/src/gaseosa500.png';
import bqImg10 from '../../bqImg/img/src/gaseosa750.png';

const BebidasMenu = ({bebidas1, bebidas2, bebidas3, bebidas4}) => {
    return(
        <div className='groupImage'>
            <div className='desayunoImg'>
                <img src= {bqImg7} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={bebidas1}>Seleccionar</button>
                </div>
            </div>
            <div className='desayunoImg'>
                <img src= {bqImg8} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={bebidas2}>Seleccionar</button>
                </div>
            </div>
            <div className='desayunoImg'>
                <img src= {bqImg9} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={bebidas3}>Seleccionar</button>
                </div>
            </div>
            <div className='desayunoImg'>
                <img src= {bqImg10} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={bebidas4}>Seleccionar</button>
                </div>
            </div>
        </div>
    )
}

export default BebidasMenu;