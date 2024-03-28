//import styles
import './product.css'

//import image
import imgMaterial from './assets/capas.svg'
import imgPackage from './assets/box.svg'

const Product = ({num, title, children}) =>{
    return(
        <article className='product'>
            <div className='productImage' id={num}></div>
            <div className='productInfoContant'>
                <p className='productTitle'>{title}</p>
                <div className='productInfo'>
                    <img src={imgMaterial} alt="Material" />
                    <p>{children[0]}</p>
                </div>
                <div className='productInfo'>
                    <img src={imgPackage} alt="package" />
                    <p>{children[1]}</p>
                </div>
            </div>
        </article>
    );
}

export {Product}