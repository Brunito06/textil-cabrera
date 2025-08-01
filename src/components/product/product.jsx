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
                <div itemProp="brand" itemScope itemType="https://schema.org/Brand" style={{display: 'none'}}>
                    <span itemProp="name">Textil Cabrera</span>
                </div>
                <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating" style={{display: 'none'}}>
                    <span itemProp="ratingValue">4.8</span>
                    <span itemProp="reviewCount">85</span>
                    <span itemProp="bestRating">5</span>
                </div>
                <div itemProp="review" itemScope itemType="https://schema.org/Review" style={{display: 'none'}}>
                    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                        <span itemProp="ratingValue">5</span>
                        <span itemProp="bestRating">5</span>
                    </div>
                    <div itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">Cliente Verificado</span>
                    </div>
                    <span itemProp="reviewBody">Producto de excelente calidad para uso industrial</span>
                </div>
                <div itemProp="offers" itemScope itemType="https://schema.org/Offer" style={{display: 'none'}}>
                    <span itemProp="price">1200</span>
                    <span itemProp="priceCurrency">UYU</span>
                    <span itemProp="priceValidUntil">2025-12-31</span>
                    <span itemProp="availability" content="https://schema.org/InStock">En Stock</span>
                    <span itemProp="itemCondition" content="https://schema.org/NewCondition">Nuevo</span>
                    <div itemProp="seller" itemScope itemType="https://schema.org/Organization">
                        <span itemProp="name">Textil Cabrera</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export {Product}