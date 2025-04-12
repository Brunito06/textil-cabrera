//import react helmet
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <title>Productos - Textil Cabrera</title>
                <meta name="description" content="Conocé todos nuestros productos: estopas, trapos, guatas siliconadas, papel industrial y más." />
                <meta name="theme-color" content="#145DA0" />
                {/* Open Graph */}
                <meta property="og:title" content="Productos - Textil Cabrera" />
                <meta property="og:description" content="Estopas, trapos, guatas siliconadas, papel industrial y mucho más en Textil Cabrera." />
                <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
                <meta property="og:url" content="https://textilcabrera.com/productos" />
                <meta property="og:type" content="website" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Productos - Textil Cabrera" />
                <meta name="twitter:description" content="Productos textiles e industriales de calidad." />
                <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
            </Helmet>
            <Banner num="banner1" title={t('YarnWasteBanner')}/>
            <div id='estopa' className='products'>
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
            <Banner num="banner2" title={t('RagsBanner')}/>
            <div id='rags' className='products'>
                <Product num="product5" title={t('WhiteRags25.title')}>
                    <p>{t('WhiteRags25.text1.text1')}<span>{t('WhiteRags25.text1.bold')}</span>{t('WhiteRags25.text1.text2')}</p>
                    <p>{t('WhiteRags25.text2.text1')}<span>{t('WhiteRags25.text2.bold')}</span>{t('WhiteRags25.text2.text2')}</p>
                </Product>
                <Product num="product6" title={t('WhiteRags10.title')}>
                    <p>{t('WhiteRags10.text1.text1')}<span>{t('WhiteRags10.text1.bold')}</span>{t('WhiteRags10.text1.text2')}</p>
                    <p>{t('WhiteRags10.text2.text1')}<span>{t('WhiteRags10.text2.bold')}</span>{t('WhiteRags10.text2.text2')}</p>
                </Product>
                <Product num="product7" title={t('ColorRags525.title')}>
                    <p>{t('ColorRags525.text1.text1')}<span>{t('ColorRags525.text1.bold')}</span>{t('ColorRags525.text1.text2')}</p>
                    <p>{t('ColorRags525.text2.text1')}<span>{t('ColorRags525.text2.bold')}</span>{t('ColorRags525.text2.text2')}</p>
                </Product>
                <Product num="product8" title={t('ColorRags125.title')}>
                    <p>{t('ColorRags125.text1.text1')}<span>{t('ColorRags125.text1.bold')}</span>{t('ColorRags125.text1.text2')}</p>
                    <p>{t('ColorRags125.text2.text1')}<span>{t('ColorRags125.text2.bold')}</span>{t('ColorRags125.text2.text2')}</p>
                </Product>
                <Product num="product9" title={t('ColorRags10.title')}>
                    <p>{t('ColorRags10.text1.text1')}<span>{t('ColorRags10.text1.bold')}</span>{t('ColorRags10.text1.text2')}</p>
                    <p>{t('ColorRags10.text2.text1')}<span>{t('ColorRags10.text2.bold')}</span>{t('ColorRags10.text2.text2')}</p>
                </Product>
                <Product num="product10" title={t('ColorRags20.title')}>
                    <p>{t('ColorRags20.text1.text1')}<span>{t('ColorRags20.text1.bold')}</span>{t('ColorRags20.text1.text2')}</p>
                    <p>{t('ColorRags20.text2.text1')}<span>{t('ColorRags20.text2.bold')}</span> {t('ColorRags20.text2.text2')}</p>
                </Product>
            </div>
            <Banner num="banner3" title={t('NonWovenRagsBanner')}/>
            <div id='nonwoven' className='products'>
                <Product num="product11" title={t('NonWovenRags.title')}>
                    <p>{t('NonWovenRags.text1.text1')}<span>{t('NonWovenRags.text1.bold')}</span>{t('NonWovenRags.text1.text2')}</p>
                    <p>{t('NonWovenRags.text2.text1')}<span>{t('NonWovenRags.text2.bold')}</span>{t('NonWovenRags.text2.text2')}</p>
                </Product>
                <Product num="product12" title={t('NonWovenCloths.title')}>
                    <p>{t('NonWovenCloths.text1.text1')}<span>{t('NonWovenCloths.text1.bold')}</span>{t('NonWovenCloths.text1.text2')}</p>
                    <p>{t('NonWovenCloths.text2.text1')}<span>{t('NonWovenCloths.text2.bold')}</span>{t('NonWovenCloths.text2.text2')}</p>
                </Product>
                <Product num="product13" title={t('PaperCoils.title')}>
                    <p>{t('PaperCoils.text1.text1')}<span>{t('PaperCoils.text1.bold')}</span>{t('PaperCoils.text1.text2')}</p>
                    <p>{t('PaperCoils.text2.text1')}<span>{t('PaperCoils.text2.bold')}</span>{t('PaperCoils.text2.text2')}</p>
                </Product>
            </div>
            <Banner num="banner4" title={t('WaddingBanner')}/>
            <div id='wadding' className='products'>
                <Product num="product14" title={t('SilicionWadding5.title')}>
                    <p>{t('SilicionWadding5.text1.text1')}<span>{t('SilicionWadding5.text1.bold')}</span>{t('SilicionWadding5.text1.text2')}</p>
                    <p>{t('SilicionWadding5.text2.text1')}<span>{t('SilicionWadding5.text2.bold')}</span>{t('SilicionWadding5.text2.text2')}</p>
                </Product>
                <Product num="product15" title={t('SilicionWadding2.title')}>
                    <p>{t('SilicionWadding2.text1.text1')}<span>{t('SilicionWadding2.text1.bold')}</span>{t('SilicionWadding2.text1.text2')}</p>
                    <p>{t('SilicionWadding2.text2.text1')}<span>{t('SilicionWadding2.text2.bold')}</span>{t('SilicionWadding2.text2.text2')}</p>
                </Product>
                <Product num="product16" title={t('WaddingInBlanket.title')}>
                    <p>{t('WaddingInBlanket.text1.text1')}<span>{t('WaddingInBlanket.text1.bold')}</span>{t('WaddingInBlanket.text1.text2')}</p>
                    <p>{t('WaddingInBlanket.text2.text1')}<span>{t('WaddingInBlanket.text2.bold')}</span>{t('WaddingInBlanket.text2.text2')}</p>
                </Product>
            </div>
        </div>
    );
}

export {Products}