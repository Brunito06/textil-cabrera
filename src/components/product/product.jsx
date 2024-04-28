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
                    <div>{children[0]}</div>
                </div>
                <div className='productInfo'>
                    <img src={imgPackage} alt="package" />
                    <div>{children[1]}</div>
                </div>
            </div>
        </article>
    );
}

export {Product}