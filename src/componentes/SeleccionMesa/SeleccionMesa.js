import './SeleccionMesa.scss';
import bqImg from '../../bqImg/img/src/mesa.png';



function SeleccionMesa() {
    return (
      <div className="SeleccionMesa">
        <p className = "SeleccionM">  Nombre del Mesero </p>
        <div className ="grupoUno">
            <div className="ImgMesa">
                <img src= {bqImg} alt ="" className="MesaImg"/>
            </div>
            <div className="ImgMesa">
                <img src= {bqImg} alt ="" className="MesaImg"/>
            </div>
            <div className="ImgMesa">
                <img src= {bqImg} alt ="" className="MesaImg"/>
            </div>
        </div>
        <div className ="grupoUno">
            <div className="ImgMesa">
               <img src= {bqImg} alt ="" className="MesaImg"/>
            </div>
             <div className="ImgMesa">
                <img src= {bqImg} alt ="" className="MesaImg"/>
            </div>
            <div className="ImgMesa">
                <img src= {bqImg} alt ="" className="MesaImg"/>
      </div>
      </div>
      </div>
    );
  }


export default SeleccionMesa;