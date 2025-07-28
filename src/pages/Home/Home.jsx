//import styles
import './Home.css'

//translation
import { useTranslation } from 'react-i18next';

//import react router
import { Link } from 'react-router-dom';

//import react helmet
import { Helmet } from 'react-helmet';

//import img
import more from "./assets/more.svg"
import factory from "./assets/factory.svg"
import camion from "./assets/camion.svg"
import trayectoria from "./assets/trayectoria.svg"
import background2 from "./assets/background2.avif"
import background3 from "./assets/background3.webm"

//import components
import { Product } from '../../components/product/product';

const Home = () =>{
    const { t, i18n } = useTranslation();

    return(
        <div className='home'>
                <Helmet>
                    <title>Textil Cabrera - Reciclaje Textil Uruguay | Estopas, Trapos Industriales, Guatas</title>
                    <meta name="description" content="🏭 Textil Cabrera: Líder en reciclaje textil Uruguay desde 1989. ✓ Estopa Uruguay ✓ Trapos Uruguay ✓ Guata Uruguay ✓ TNT Uruguay. Calidad industrial garantizada. Envíos todo el país." />
                    <meta name="keywords" content="estopa uruguay, trapos uruguay, guata uruguay, tnt uruguay, textil cabrera, reciclaje textil uruguay, estopas industriales, trapos limpieza, guatas siliconadas, productos TNT uruguay" />
                    <link rel="canonical" href="https://textilcabrera.com" />
                    <meta name="theme-color" content="#145DA0" />
                    <meta name="geo.region" content="UY" />
                    <meta name="geo.placename" content="Uruguay" />
                    {/* Open Graph */}
                    <meta property="og:title" content="Textil Cabrera - Reciclaje Textil Uruguay | Estopas, Trapos Industriales, Guatas" />
                    <meta property="og:description" content="Líder en reciclaje textil Uruguay desde 1989. Estopa Uruguay, Trapos Uruguay, Guata Uruguay, TNT Uruguay. Calidad industrial garantizada." />
                    <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
                    <meta property="og:url" content="https://textilcabrera.com" />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="es_UY" />
                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Textil Cabrera - Reciclaje Textil Uruguay" />
                    <meta name="twitter:description" content="Líder en reciclaje textil Uruguay desde 1989. Estopa Uruguay, Trapos Uruguay, Guata Uruguay, TNT Uruguay." />
                    <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Textil Cabrera",
                            "alternateName": ["Textil Cabrera SRL", "TCC"],
                            "image": "https://textilcabrera.com/src/assets/mainImages/Logo.png",
                            "description": "Empresa uruguaya líder en reciclaje textil desde 1989. Especialistas en estopa Uruguay, trapos Uruguay, guata Uruguay y TNT Uruguay para uso industrial.",
                            "foundingDate": "1989",
                            "areaServed": {
                                "@type": "Country",
                                "name": "Uruguay"
                            },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Productos Textiles Industriales",
                                "itemListElement": [
                                    {
                                        "@type": "OfferCatalog",
                                        "name": "Estopa Uruguay",
                                        "description": "Estopa de algodón industrial para limpieza y pulido"
                                    },
                                    {
                                        "@type": "OfferCatalog", 
                                        "name": "Trapos Uruguay",
                                        "description": "Trapos industriales de alta absorción"
                                    },
                                    {
                                        "@type": "OfferCatalog",
                                        "name": "Guata Uruguay", 
                                        "description": "Guata siliconada para relleno industrial"
                                    },
                                    {
                                        "@type": "OfferCatalog",
                                        "name": "TNT Uruguay",
                                        "description": "Trapos no tejidos para limpieza industrial"
                                    }
                                ]
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Ruta 8 km 28 Cno. Vega Helguera - Calle Edipo S/N",
                                "addressLocality": "Barros Blancos",
                                "addressRegion": "Canelones",
                                "postalCode": "91000",
                                "addressCountry": "UY"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": -34.736355,
                                "longitude": -55.984856
                            },
                            "url": "https://textilcabrera.com",
                            "telephone": "+598 2288 5630",
                            "email": "tcc@adinet.com.uy",
                            "openingHours": "Mo-Fr 08:00-17:00",
                            "priceRange": "$$",
                            "sameAs": [
                                "https://www.instagram.com/textilcabrera28",
                                "https://wa.me/+59898695831"
                            ]
                        })}
                    </script>
                </Helmet>
                <header role="banner">
                    <video className='videoTag' autoPlay loop muted playsInline preload="none" poster={background2}
                    onLoadedMetadata={(e) => e.target.play()} data-nosnippet data-ignore="true"
                    aria-label="Video de fondo mostrando procesos de Textil Cabrera"
                    >
                        <source src={background3} type='video/webm' />
                    </video>
                    <div className='headerText'>
                        <div>
                            <h1>{t('SEO.homeH1')}</h1>
                            <p>{t('HomeText')}</p>
                        </div>
                        <Link to='/productos' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}} aria-label="Ver productos de Textil Cabrera"><button>{t('ProductsButton')}</button></Link>
                    </div>
                </header>
                <section id='quienesSomos' className='aboutUs' aria-labelledby="about-us-title">
                        <h2 id="about-us-title" className="sr-only">{t('SEO.aboutUsTitle')}</h2>
                        <div className="seo-content">
                            <h2>{t('SEO.seoContentTitle')}</h2>
                            <p>{t('SEO.seoContentIntro')}</p>
                            
                            <h3>{t('SEO.productsMainTitle')}</h3>
                            <ul className="products-list">
                                <li><strong>{t('YarnWasteBanner')} Uruguay:</strong> {i18n.language === 'es' ? 'Estopa de algodón 100% y mezclas algodón-poliéster para limpieza industrial y pulido' : '100% cotton yarn waste and cotton-polyester blends for industrial cleaning and polishing'}</li>
                                <li><strong>{t('RagsBanner')} Uruguay:</strong> {i18n.language === 'es' ? 'Trapos industriales de alta absorción, blancos y de color, en diferentes formatos' : 'High absorption industrial rags, white and colored, in different formats'}</li>
                                <li><strong>{t('WaddingBanner')} Uruguay:</strong> {i18n.language === 'es' ? 'Guata siliconada de excelente rebote para relleno industrial y doméstico' : 'Silicone wadding with excellent rebound for industrial and domestic filling'}</li>
                                <li><strong>{t('NonWovenRagsBanner')} Uruguay:</strong> {i18n.language === 'es' ? 'Trapos no tejidos (nonwoven) con excelente capacidad de absorción' : 'Non-woven rags (nonwoven) with excellent absorption capacity'}</li>
                            </ul>
                        </div>
                        <div className='aboutUs-cards'>
                            <article className='aboutUs-card'>
                                <div className='image'>
                                    <img src={factory} alt="Icono de fábrica representando nuestra empresa" />
                                </div>
                                    <h3>{t('WhoAreWeTitle')}</h3>
                                    <p>{t('WhoAreWeText')}</p>
                            </article>
                            <article className='aboutUs-card'>
                                <div className='image'>
                                    <img src={trayectoria} alt="Icono representando nuestra experiencia y trayectoria" />
                                </div>
                                    <h3>{t('ExperienceTitle')}</h3>
                                    <p>{t('ExperienceText')}</p>
                            </article>
                            <article className='aboutUs-card'>
                                <div className='image'>
                                    <img src={camion} alt="Icono de camión representando nuestros envíos" />
                                </div>
                                    <h3>{t('SaleTitle')}</h3>
                                    <p>{t('SaleText')}</p>
                            </article>
                    </div>
                </section>
                <section aria-labelledby="featured-products-title">
                    <h2 id="featured-products-title" className='highLightProductsTitle'>{t('ProductsTitle')}</h2>
                    <div className="products-intro">
                        <p>{t('SEO.productsIntro')}</p>
                    </div>
                    <div className='products' role="list">   
                    <Product num="product14" title={t('SilicionWadding5.title')}>
                        <p>{t('SilicionWadding5.text1.text1')}<span>{t('SilicionWadding5.text1.bold')}</span>{t('SilicionWadding5.text1.text2')}</p>
                        <p>{t('SilicionWadding5.text2.text1')}<span>{t('SilicionWadding5.text2.bold')}</span>{t('SilicionWadding5.text2.text2')}</p>
                    </Product>
                    <Product num="product7" title={t('ColorRags525.title')}>
                        <p>{t('ColorRags525.text1.text1')}<span>{t('ColorRags525.text1.bold')}</span>{t('ColorRags525.text1.text2')}</p>
                        <p>{t('ColorRags525.text2.text1')}<span>{t('ColorRags525.text2.bold')}</span>{t('ColorRags525.text2.text2')}</p>
                    </Product>
                    <Product num="product11" title={t('NonWovenRags.title')}>
                        <p>{t('NonWovenRags.text1.text1')}<span>{t('NonWovenRags.text1.bold')}</span>{t('NonWovenRags.text1.text2')}</p>
                        <p>{t('NonWovenRags.text2.text1')}<span>{t('NonWovenRags.text2.bold')}</span>{t('NonWovenRags.text2.text2')}</p>
                    </Product>
                    <Link className='verMasBox' to='/productos' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}} aria-label="Ver todos los productos de Textil Cabrera">
                        <div className='verMasBoxContent'>
                            <p>{t('SeeMoreButton')}</p>
                            <img src={more} alt="Icono para ver más productos" />
                        </div>
                    </Link>
                </div>
                </section>
                
                <section className="faq-section" aria-labelledby="faq-title">
                    <h2 id="faq-title">{t('SEO.faqTitle')}</h2>
                    <div className="faq-container">
                        <div className="faq-item">
                            <h3>{t('SEO.faq.q1.question')}</h3>
                            <p>{t('SEO.faq.q1.answer')}</p>
                        </div>
                        <div className="faq-item">
                            <h3>{t('SEO.faq.q2.question')}</h3>
                            <p>{t('SEO.faq.q2.answer')}</p>
                        </div>
                        <div className="faq-item">
                            <h3>{t('SEO.faq.q3.question')}</h3>
                            <p>{t('SEO.faq.q3.answer')}</p>
                        </div>
                        <div className="faq-item">
                            <h3>{t('SEO.faq.q4.question')}</h3>
                            <p>{t('SEO.faq.q4.answer')}</p>
                        </div>
                    </div>
                </section>
        </div>
    );
}

export {Home}

