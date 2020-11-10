import './FormularioC.scss';
import { FaEnvelope,FaLock } from 'react-icons/fa';
import {useHistory} from "react-router-dom";


function FormularioComponent() {
    let history = useHistory();
    return (
      <div className="FormuC">
          <div className="titleForm">
            <p className = "textoFormu">  Ingrese su usuario y contraseña </p>
          </div>
          <div className="emailForm">
            <input className = "inputOne" placeholder="Usuario"></input>
            <FaEnvelope className = "emailIcon"/>
          </div>
          <div className="passForm">
            <input className = "inputTwo" placeholder="Contraseña"></input>
            <FaLock className = "emailIcon"/>
          </div>
          <div className="submitForm">
              <button className ="boton" onClick={() => {history.push("/seleccion")}}> INGRESAR </button>
          </div>
        
        
        
      </div>
      
      
    );
  }


export default FormularioComponent;