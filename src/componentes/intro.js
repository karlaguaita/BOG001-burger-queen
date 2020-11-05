import './intro.css';
import bqImg from '../bqImg/img/src/burgerlogotitulo.png';


function Intro() {
  return (
    <div className="Intro">
      <img src= {bqImg} alt ="" className="bqImg"/>
    </div>
  );
}

export default Intro;
