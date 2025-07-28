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
                    <meta name="description" content="Textil Cabrera: Empresa líder en reciclaje textil en Uruguay desde 1989. Fabricamos estopas, trapos industriales, guatas siliconadas y productos TNT de máxima calidad para la industria." />
                    <meta name="keywords" content="textil cabrera, reciclaje textil uruguay, estopas industriales, trapos limpieza, guatas siliconadas, productos TNT, limpieza industrial uruguay" />
                    <link rel="canonical" href="https://textilcabrera.com" />
                    <meta name="theme-color" content="#145DA0" />
                    {/* Open Graph */}
                    <meta property="og:title" content="Textil Cabrera - Reciclaje Textil Uruguay | Estopas, Trapos Industriales, Guatas" />
                    <meta property="og:description" content="Empresa líder en reciclaje textil en Uruguay desde 1989. Fabricamos estopas, trapos industriales, guatas siliconadas y productos TNT de máxima calidad." />
                    <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
                    <meta property="og:url" content="https://textilcabrera.com" />
                    <meta property="og:type" content="website" />
                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Textil Cabrera - Reciclaje Textil Uruguay" />
                    <meta name="twitter:description" content="Empresa líder en reciclaje textil en Uruguay desde 1989. Estopas, trapos industriales, guatas siliconadas y productos TNT de calidad." />
                    <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Textil Cabrera",
                            "image": "https://textilcabrera.com/src/assets/mainImages/Logo.png",
                            "description": "Empresa uruguaya especializada en reciclaje textil desde 1989. Fabricamos estopas, trapos industriales, guatas siliconadas y productos TNT.",
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
                            "foundingDate": "1989",
                            "priceRange": "$$"
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
                            <h1>Textil Cabrera - Reciclaje Textil Uruguay</h1>
                            <p>{t('HomeText')}</p>
                        </div>
                        <Link to='/productos' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}} aria-label="Ver productos de Textil Cabrera"><button>{t('ProductsButton')}</button></Link>
                    </div>
                </header>
                <section id='quienesSomos' className='aboutUs' aria-labelledby="about-us-title">
                        <h2 id="about-us-title" className="sr-only">Acerca de Textil Cabrera</h2>
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
        </div>
    );
}

export {Home}

