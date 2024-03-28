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
                    <p>100% <span>Algodón</span>, ideal para pulido o limpiezas delicadas</p>
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
                    <p>100% <span>Algodón / algodón-poliéster</span>, ideal para pulido o limpiezas delicadas</p>
                    <p>(9kg) Estopa Blanca A, (8kg) Estopa Blanca B, (8kg) Estopa de color, en funda de <span>25kg</span></p>
                </Product>
            </div>
            <Banner num="banner2" title="TRAPOS"/>
            <div className='products'>
                <Product num="product5" title="Trapos Blancos">
                    <p>Recortes de tejido (recuperado), se destaca por su alto porcentaje de <span>algodón</span>, blanco / crema</p>
                    <p>x1kg en funda de <span>25kg</span></p>
                </Product>
                <Product num="product6" title="Trapos Blancos">
                    <p>Recortes de tejido (recuperado), se destaca por su alto porcentaje de <span>algodón</span>, blanco / crema</p>
                    <p>Formato <span>10kg</span></p>
                </Product>
                <Product num="product7" title="Trapos de Color">
                    <p>Recortes de tejido (recuperado), nivel de <span>absorción</span> medio/alto</p>
                    <p>x5kg flejado de <span>25kg</span></p>
                </Product>
                <Product num="product8" title="Trapos de Color">
                    <p>Recortes de tejido (recuperado), nivel de <span>absorción</span> medio/alto</p>
                    <p>x1kg en funda de <span>25kg</span></p>
                </Product>
                <Product num="product9" title="Trapos de Color">
                    <p>Recortes de tejido (recuperado), nivel de <span>absorción</span> medio/alto</p>
                    <p>Formato <span>10kg</span></p>
                </Product>
                <Product num="product10" title="Trapos de Color">
                    <p>Recortes de tejido (recuperado), nivel de <span>absorción</span> medio/alto</p>
                    <p>Formato <span>20kg</span></p>
                </Product>
            </div>
            <Banner num="banner3" title="TRAPOS NO TEJIDOS"/>
            <div className='products'>
                <Product num="product11" title="Trapos no tejidos">
                    <p>Paños de tejido sin tejer (nonwoven), excelente <span>absorción</span></p>
                    <p><span>5kg</span></p>
                </Product>
                <Product num="product12" title="Paños no tejidos">
                    <p>Paños de tejido sin tejer (nonwoven), excelente <span>absorción</span></p>
                    <p>5 Cajas de <span>300 unidades</span> c/u</p>
                </Product>
                <Product num="product13" title="Bobinas de papel">
                    <p>Pasta de <span>Celulosa</span></p>
                    <p>2 Bobinas (<span>4kg</span>)</p>
                </Product>
            </div>
            <Banner num="banner4" title="GUATAS"/>
            <div className='products'>
                <Product num="product14" title="Guata siliconada">
                    <p>Excelente rebote, ideal para <span>relleno</span> de almohadones, peluches, etc</p>
                    <p><span>5kg</span></p>
                </Product>
                <Product num="product15" title="Guata siliconada">
                    <p>Excelente rebote, ideal para <span>relleno</span> de almohadones, peluches, etc</p>
                    <p><span>2kg</span> (Unicamente para reventa)</p>
                </Product>
                <Product num="product16" title="Guata en manta">
                    <p>Excelente <span>calidad</span>, ideal para confección y manualidades</p>
                    <p>Rollos 1.5m x 20m, peso aprox <span>5kg</span><br></br> (Venta por rollo/kilo)<br></br>Gramajes: 80g , 120g y 150g</p>
                </Product>
            </div>
        </div>
    );
}

export {Products}