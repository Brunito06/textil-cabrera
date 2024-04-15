//import styles
import './Products.css';

//translation
import { useTranslation } from 'react-i18next';

//import components
import { Product } from '../../components/product/product';
import { Banner } from '../../components/banner/Banner';

const Products = () =>{
    const { t } = useTranslation();

    return(
        <div className="productPage">
            <Banner num="banner1" title={t('YarnWasteBanner')}/>
            <div className='products'>
                <Product num="product1" title={t('YarnWasteA.title')}>
                    <p>{t('YarnWasteA.text1.text1')} <span>{t('YarnWasteA.text1.bold')}</span>{t('YarnWasteA.text1.text2')}</p>
                    <p>{t('YarnWasteA.text2.text1')}<span>{t('YarnWasteA.text2.bold')}</span>{t('YarnWasteA.text2.text2')}</p>
                </Product>
                <Product num="product2" title={t('YarnWasteB.title')}>
                    <p>{t('YarnWasteB.text1.text1')}<span>{t('YarnWasteB.text1.bold')}</span>{t('YarnWasteB.text1.text2')}</p>
                    <p>{t('YarnWasteB.text2.text1')}<span>{t('YarnWasteB.text2.bold')}</span>{t('YarnWasteB.text2.text2')}</p>
                </Product>
                <Product num="product3" title={t('ColorYarnWaste.title')}>
                    <p>{t('ColorYarnWaste.text1.text1')}<span>{t('ColorYarnWaste.text1.bold')}</span>{t('ColorYarnWaste.text1.text2')}</p>
                    <p>{t('ColorYarnWaste.text2.text1')}<span>{t('ColorYarnWaste.text2.bold')}</span>{t('ColorYarnWaste.text2.text2')}</p>
                </Product>
                <Product num="product4" title={t('MixedCase.title')}>
                    <p>{t('MixedCase.text1.text1')}<span>{t('MixedCase.text1.bold')}</span>{t('MixedCase.text1.text2')}</p>
                    <p>{t('MixedCase.text2.text1')}<span>{t('MixedCase.text2.bold')}</span>{t('MixedCase.text2.text2')}</p>
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
                    <p>Funda de <span>5kg</span></p>
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
                    <p>Funda de <span>5kg</span></p>
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