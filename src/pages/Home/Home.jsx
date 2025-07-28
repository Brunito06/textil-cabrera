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
    const { t } = useTranslation();

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
                            <h1>Estopa Uruguay | Trapos Uruguay | Guata Uruguay | TNT Uruguay</h1>
                            <p>{t('HomeText')}</p>
                        </div>
                        <Link to='/productos' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}} aria-label="Ver productos de Textil Cabrera"><button>{t('ProductsButton')}</button></Link>
                    </div>
                </header>
                <section id='quienesSomos' className='aboutUs' aria-labelledby="about-us-title">
                        <h2 id="about-us-title" className="sr-only">Acerca de Textil Cabrera</h2>
                        <div className="seo-content">
                            <h2>Textil Cabrera: Líder en Productos Textiles Industriales en Uruguay</h2>
                            <p>Desde 1989, Textil Cabrera es la empresa líder en <strong>estopa Uruguay</strong>, <strong>trapos Uruguay</strong>, <strong>guata Uruguay</strong> y <strong>TNT Uruguay</strong>. Nos especializamos en el reciclaje textil y la fabricación de productos industriales de máxima calidad para empresas de todo el país.</p>
                            
                            <h3>Nuestros Productos Principales:</h3>
                            <ul className="products-list">
                                <li><strong>Estopa Uruguay:</strong> Estopa de algodón 100% y mezclas algodón-poliéster para limpieza industrial y pulido</li>
                                <li><strong>Trapos Uruguay:</strong> Trapos industriales de alta absorción, blancos y de color, en diferentes formatos</li>
                                <li><strong>Guata Uruguay:</strong> Guata siliconada de excelente rebote para relleno industrial y doméstico</li>
                                <li><strong>TNT Uruguay:</strong> Trapos no tejidos (nonwoven) con excelente capacidad de absorción</li>
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
                        <p>Descubre nuestra línea completa de productos textiles industriales fabricados en Uruguay con más de 30 años de experiencia en reciclaje textil.</p>
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
                    <h2 id="faq-title">Preguntas Frecuentes sobre Productos Textiles en Uruguay</h2>
                    <div className="faq-container">
                        <div className="faq-item">
                            <h3>¿Qué tipos de estopa fabrican en Uruguay?</h3>
                            <p>En Textil Cabrera fabricamos estopa blanca A (100% algodón), estopa blanca B (mezcla algodón-poliéster) y estopa de color. Todas ideales para limpieza industrial y pulido en Uruguay.</p>
                        </div>
                        <div className="faq-item">
                            <h3>¿Dónde comprar trapos industriales en Uruguay?</h3>
                            <p>Textil Cabrera es el principal proveedor de trapos industriales en Uruguay. Ofrecemos trapos blancos y de color con alta capacidad de absorción, disponibles en formatos de 10kg, 20kg y 25kg.</p>
                        </div>
                        <div className="faq-item">
                            <h3>¿Qué es la guata siliconada y para qué se usa?</h3>
                            <p>La guata siliconada es un material de relleno con excelente rebote, ideal para almohadas, peluches, tapicería y aplicaciones industriales. En Uruguay, Textil Cabrera es líder en su fabricación.</p>
                        </div>
                        <div className="faq-item">
                            <h3>¿Qué significa TNT en productos textiles?</h3>
                            <p>TNT significa "Trapos No Tejidos" (nonwoven en inglés). Son paños con excelente absorción fabricados sin proceso de tejido tradicional, ideales para limpieza industrial en Uruguay.</p>
                        </div>
                    </div>
                </section>
        </div>
    );
}

export {Home}

