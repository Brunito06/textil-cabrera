//import styles
import './Products.css';

//import components
import { Product } from '../../components/product/product';
import { Banner } from '../../components/banner/Banner';

const Products = () =>{
    return(
        <div className="productPage">
            <Banner num="banner1" title="ESTOPAS"/>
            <div className='products'>
                <Product num="product1" title="Estopa Blanca A">
                    <p>Recortes de tejido (recuperado), se destaca por su alto porcentaje de <span>algodón</span>, blanco / crema</p>
                    <p>x1kg en funda de <span>25kg</span></p>
                </Product>
                <Product num="product2" title="Estopa Blanca B">
                    <p>Mezcla <span>algodón-poliéster</span>, para limpiezas varias</p>
                    <p>x1kg en funda de <span>25kg</span></p>
                </Product>
                <Product num="product3" title="Estopa de Color">
                    <p>Mezcla <span>algodón-poliéster</span>, para limpiezas varias</p>
                    <p>x1kg en funda de <span>25kg</span></p>
                </Product>
                <Product num="product4" title="Funda Mixta">
                    <p>Mezcla <span>algodón-poliéster</span>, para limpiezas varias</p>
                    <p>x1kg en funda de <span>25kg</span></p>
                </Product>
            </div>
            <Banner num="banner2" title="TRAPOS"/>
        </div>
    );
}

export {Products}