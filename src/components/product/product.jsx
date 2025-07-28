//import styles
import './product.css'

//import image
import imgMaterial from './assets/capas.svg'
import imgPackage from './assets/box.svg'

const Product = ({num, title, children}) =>{
    return(
        <article className='product' role="listitem" itemScope itemType="https://schema.org/Product">
            <div className='productImage' id={num}></div>
            <div className='productInfoContant'>
                <h3 className='productTitle' itemProp="name">{title}</h3>
                <div className='productInfo'>
                    <img src={imgMaterial} alt="Icono de material" />
                    <div itemProp="description">{children[0]}</div>
                </div>
                <div className='productInfo'>
                    <img src={imgPackage} alt="Icono de empaque" />
                    <div>{children[1]}</div>
                </div>
                <div itemProp="manufacturer" itemScope itemType="https://schema.org/Organization" style={{display: 'none'}}>
                    <span itemProp="name">Textil Cabrera</span>
                </div>
                <div itemProp="offers" itemScope itemType="https://schema.org/Offer" style={{display: 'none'}}>
                    <span itemProp="availability" content="https://schema.org/InStock">En Stock</span>
                    <span itemProp="priceCurrency" content="UYU">UYU</span>
                </div>
            </div>
        </article>
    );
}

export {Product}