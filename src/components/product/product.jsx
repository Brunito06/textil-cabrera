//import styles
import './product.css'

//import image
import imgMaterial from './assets/capas.svg'
import imgPackage from './assets/box.svg'

const Product = ({num, title, children}) =>{
    return(
        <article className='product' role="listitem">
            <div className='productImage' id={num}></div>
            <div className='productInfoContant'>
                <h3 className='productTitle'>{title}</h3>
                <div className='productInfo'>
                    <img src={imgMaterial} alt="Icono de material" />
                    <div>{children[0]}</div>
                </div>
                <div className='productInfo'>
                    <img src={imgPackage} alt="Icono de empaque" />
                    <div>{children[1]}</div>
                </div>
            </div>
        </article>
    );
}

export {Product}