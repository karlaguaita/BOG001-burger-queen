import './seleccionMenu.scss';

const LeftBox = ({product, cliente, hour, mesa, fecha, estatus}) => {
    let product_ = []

    for (let index = 0; index < 4; index++) {
        if (product[index].img)
            product_.push(product[index])
        if (index == product.length-1)
            break
    }

    return(
        <div className='leftBoxDiv'>
            <div className='titlesMenu2'>
                <div className='hour'>
                    <p className='textFormatMenu'>Hora: {hour}</p>
                </div>
                <div className='titleBoxMenu'>
                    <p className='textFormatMenu'>Platos de comida</p>
                </div>
            </div>
            <div className='boxProductsImg'>
                {product_.map((producto) => 
                <div className='desayunoImg'>
                    <img src= {producto.img} alt ="" className="Sandjyq"/>
                </div>
                )}
            </div>
            <div className='resumenMenu2'>
                <div className='headerMenu'>
                    <div className='boxHeader'>
                        <p className='headerTextStyle'># Mesa</p>
                    </div>
                    <div className='boxHeader'>
                        <p className='headerTextStyle'>Fecha</p>
                    </div>
                    <div className='boxHeader'>
                        <p className='headerTextStyle'>Cliente</p>
                    </div>
                    <div className='boxHeaderEnd'>
                        <p className='headerTextStyle'>Estatus</p>
                    </div>
                </div>
                <div className='bodyMenu'>
                    <div className='bodyHeader'>
                        <p className='bodyTextStyle'>{mesa}</p>
                    </div>
                    <div className='bodyHeader'>
                        <p className='bodyTextStyle'>{fecha}</p>
                    </div>
                    <div className='bodyHeader'>
                    <p className='bodyTextStyle'>{cliente}</p>
                    </div>
                    <div className='bodyHeaderEnd'>
                        <p className='bodyTextStyle'>{estatus}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBox;