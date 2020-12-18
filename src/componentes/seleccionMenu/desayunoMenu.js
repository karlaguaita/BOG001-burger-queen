import './seleccionMenu.scss';
import bqImg from '../../bqImg/img/src/Sandjyq.png';
import bqImg2 from '../../bqImg/img/src/cafeAmericano.png';
import bqImg3 from '../../bqImg/img/src/cafeConLeche.png';
import bqImg4 from '../../bqImg/img/src/jugoNatural.png';

const DesayunoMenu = ({desayuno1, desayuno2, desayuno3, desayuno4}) => {
    return(
        <div className='groupImage'>
            <div className='desayunoImg'>
                <img src= {bqImg} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={desayuno1}>Seleccionar</button>
                </div>
            </div>
            <div className='desayunoImg'>
                <img src= {bqImg2} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={desayuno2}>Seleccionar</button>
                </div>
            </div>
            <div className='desayunoImg'>
                <img src= {bqImg3} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={desayuno3}>Seleccionar</button>
                </div>
            </div>
            <div className='desayunoImg'>
                <img src= {bqImg4} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={desayuno4}>Seleccionar</button>
                </div>
            </div>
        </div>
    )
}

export default DesayunoMenu;