import './seleccionMenu.scss';
import bqImg5 from '../../bqImg/img/src/Hdoble.png';
import bqImg6 from '../../bqImg/img/src/Hsimple.png';

const BurguerMenu = ({burguer1, burguer2}) => {
    return(
        <div className='groupImage2'>
            <div className='desayunoImg'>
                <img src= {bqImg5} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={burguer1}>Seleccionar</button>
                </div>
            </div>
            <div className='desayunoImg'>
                <img src= {bqImg6} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={burguer2}>Seleccionar</button>
                </div>
            </div>
        </div>
    )
}

export default BurguerMenu;