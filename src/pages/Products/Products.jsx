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
                <title>Productos Textiles - Estopas, Trapos Industriales, Guatas | Textil Cabrera</title>
                <meta name="description" content="Catálogo completo de productos textiles de Textil Cabrera: estopas de algodón, trapos industriales, guatas siliconadas, productos TNT y papel industrial. Calidad garantizada desde 1989." />
                <meta name="keywords" content="estopas algodón, trapos industriales, guatas siliconadas, productos TNT, papel industrial, limpieza industrial, textil cabrera productos" />
                <link rel="canonical" href="https://textilcabrera.com/productos" />
                <meta name="theme-color" content="#145DA0" />
                {/* Open Graph */}
                <meta property="og:title" content="Productos Textiles - Estopas, Trapos Industriales, Guatas | Textil Cabrera" />
                <meta property="og:description" content="Catálogo completo de productos textiles: estopas de algodón, trapos industriales, guatas siliconadas, productos TNT y papel industrial. Calidad garantizada." />
                <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
                <meta property="og:url" content="https://textilcabrera.com/productos" />
                <meta property="og:type" content="website" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Productos Textiles - Textil Cabrera" />
                <meta name="twitter:description" content="Estopas, trapos industriales, guatas siliconadas y productos TNT de máxima calidad para la industria." />
                <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Productos Textiles - Textil Cabrera",
                        "description": "Catálogo completo de productos textiles: estopas, trapos industriales, guatas siliconadas y productos TNT",
                        "url": "https://textilcabrera.com/productos",
                        "mainEntity": {
                            "@type": "ItemList",
                            "name": "Productos de Reciclaje Textil",
                            "numberOfItems": 16,
                            "itemListElement": [
                                {
                                    "@type": "Product",
                                    "name": "Estopa Blanca A",
                                    "description": "100% algodón, ideal para pulido o limpiezas delicadas",
                                    "category": "Estopas"
                                },
                                {
                                    "@type": "Product", 
                                    "name": "Guata Siliconada",
                                    "description": "Excelente rebote, ideal para relleno de almohadas, peluches",
                                    "category": "Guatas"
                                },
                                {
                                    "@type": "Product",
                                    "name": "Trapos de Color",
                                    "description": "Recortes de tejido recuperado, nivel de absorción medio/alto",
                                    "category": "Trapos"
                                }
                            ]
                        }
                    })}
                </script>
            </Helmet>
            <main role="main">
            <Banner num="banner1" title={t('YarnWasteBanner')}/>
            <section id='estopa' className='products' aria-labelledby="estopas-title">
                <h2 id="estopas-title" className="sr-only">{t('YarnWasteBanner')}</h2>
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
            </section>
            <Banner num="banner2" title={t('RagsBanner')}/>
            <section id='rags' className='products' aria-labelledby="trapos-title">
                <h2 id="trapos-title" className="sr-only">{t('RagsBanner')}</h2>
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
            </section>
            <Banner num="banner3" title={t('NonWovenRagsBanner')}/>
            <section id='nonwoven' className='products' aria-labelledby="tnt-title">
                <h2 id="tnt-title" className="sr-only">{t('NonWovenRagsBanner')}</h2>
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
            </section>
            <Banner num="banner4" title={t('WaddingBanner')}/>
            <section id='wadding' className='products' aria-labelledby="guatas-title">
                <h2 id="guatas-title" className="sr-only">{t('WaddingBanner')}</h2>
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
            </section>
            </main>
        </div>
    );
}

export {Products}