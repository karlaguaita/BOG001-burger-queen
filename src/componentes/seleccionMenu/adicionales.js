import './seleccionMenu.scss';
import bqImg7 from '../../bqImg/img/src/huevo.png';
import bqImg8 from '../../bqImg/img/src/quesoamarrillo.png';
import bqImg9 from '../../bqImg/img/src/tocineta.png';

const Adicionales = ({adicional1, adicional2, adicional3}) => {
    return(
        <div className='groupImage'>
            <div className='desayunoImg'>
                <img src= {bqImg7} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={adicional1}>Seleccionar</button>
                </div>
            </div>
            <div className='desayunoImg'>
                <img src= {bqImg8} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={adicional2}>Seleccionar</button>
                </div>
            </div>
            <div className='desayunoImg'>
                <img src= {bqImg9} alt ="" className="Sandjyq"/>
                <div>
                    <button className='botonComidas' onClick={adicional3}>Seleccionar</button>
                </div>
            </div>
        </div>
    )
}

export default Adicionales;