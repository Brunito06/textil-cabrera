//import react helmet
import { Helmet } from 'react-helmet';

//import styles
import './ProductCategory.css';

//translation
import { useTranslation } from 'react-i18next';

//import components
import { Product } from '../../components/product/product';
import { Banner } from '../../components/banner/Banner';

const ProductCategory = ({ category }) => {
    const { t } = useTranslation();

    const categoryData = {
        estopa: {
            title: 'Estopa Uruguay - Productos de Algodón Industrial | Textil Cabrera',
            description: 'Estopa de algodón 100% uruguaya para limpieza industrial. Estopa blanca A y B, estopa de color. Venta mayorista en Uruguay. ✓ Calidad garantizada ✓ Envíos a todo el país',
            keywords: 'estopa uruguay, estopa algodón uruguay, estopa industrial uruguay, estopa blanca uruguay, estopa limpieza uruguay, comprar estopa uruguay',
            h1: 'Estopa Uruguay - Productos de Algodón Industrial',
            content: 'Textil Cabrera es líder en la fabricación de estopa en Uruguay. Nuestra estopa de algodón 100% es ideal para limpieza industrial, pulido y trabajos delicados. Ofrecemos estopa blanca A (100% algodón), estopa blanca B (mezcla algodón-poliéster) y estopa de color para diferentes aplicaciones industriales.',
            banner: 'banner1',
            products: ['product1', 'product2', 'product3', 'product4']
        },
        guata: {
            title: 'Guata Siliconada Uruguay - Relleno Industrial | Textil Cabrera',
            description: 'Guata siliconada uruguaya para relleno de almohadas, peluches y tapicería. Guata en manta y siliconada. ✓ Excelente rebote ✓ Calidad premium ✓ Envíos Uruguay',
            keywords: 'guata uruguay, guata siliconada uruguay, guata relleno uruguay, guata almohadas uruguay, guata industrial uruguay, comprar guata uruguay',
            h1: 'Guata Siliconada Uruguay - Relleno de Calidad Premium',
            content: 'Especialistas en guata siliconada en Uruguay desde 1989. Nuestra guata ofrece excelente rebote y durabilidad, perfecta para relleno de almohadas, peluches, tapicería y aplicaciones industriales. Disponible en presentaciones de 2kg, 5kg y guata en manta.',
            banner: 'banner4',
            products: ['product14', 'product15', 'product16']
        },
        tnt: {
            title: 'TNT Uruguay - Trapos No Tejidos Industriales | Textil Cabrera',
            description: 'TNT (Trapos No Tejidos) en Uruguay para limpieza industrial. Paños TNT, bobinas de papel celulosa. ✓ Excelente absorción ✓ Calidad industrial ✓ Distribución nacional',
            keywords: 'tnt uruguay, trapos no tejidos uruguay, paños tnt uruguay, nonwoven uruguay, tnt industrial uruguay, bobinas papel uruguay',
            h1: 'TNT Uruguay - Trapos No Tejidos para Industria',
            content: 'Textil Cabrera fabrica productos TNT (Trapos No Tejidos) de alta calidad en Uruguay. Nuestros paños no tejidos ofrecen excelente absorción para limpieza industrial. Incluye trapos TNT en fundas, paños individuales y bobinas de papel de celulosa.',
            banner: 'banner3',
            products: ['product11', 'product12', 'product13']
        },
        trapos: {
            title: 'Trapos Industriales Uruguay - Limpieza Profesional | Textil Cabrera',
            description: 'Trapos industriales uruguayos para limpieza profesional. Trapos blancos y de color, alta absorción. ✓ Tejido recuperado ✓ Diferentes formatos ✓ Venta mayorista Uruguay',
            keywords: 'trapos uruguay, trapos industriales uruguay, trapos limpieza uruguay, trapos algodón uruguay, trapos absorción uruguay, comprar trapos uruguay',
            h1: 'Trapos Industriales Uruguay - Limpieza Profesional',
            content: 'Líderes en trapos industriales en Uruguay. Fabricamos trapos de tejido recuperado con alto porcentaje de algodón, ideales para limpieza industrial y profesional. Disponibles en trapos blancos y de color, diferentes formatos desde 10kg hasta 25kg.',
            banner: 'banner2',
            products: ['product5', 'product6', 'product7', 'product8', 'product9', 'product10']
        }
    };

    const data = categoryData[category];

    return (
        <div className="productCategoryPage">
            <Helmet>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
                <meta name="keywords" content={data.keywords} />
                <link rel="canonical" href={`https://textilcabrera.com/${category}`} />
                <meta name="theme-color" content="#145DA0" />
                <meta name="geo.region" content="UY" />
                <meta name="geo.placename" content="Uruguay" />
                
                {/* Open Graph */}
                <meta property="og:title" content={data.title} />
                <meta property="og:description" content={data.description} />
                <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
                <meta property="og:url" content={`https://textilcabrera.com/${category}`} />
                <meta property="og:type" content="product.group" />
                <meta property="og:locale" content="es_UY" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={data.title} />
                <meta name="twitter:description" content={data.description} />
                
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProductGroup",
                        "name": data.h1,
                        "description": data.content,
                        "url": `https://textilcabrera.com/${category}`,
                        "manufacturer": {
                            "@type": "Organization",
                            "name": "Textil Cabrera",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "UY",
                                "addressRegion": "Canelones",
                                "addressLocality": "Barros Blancos"
                            }
                        },
                        "offers": {
                            "@type": "AggregateOffer",
                            "availability": "https://schema.org/InStock",
                            "priceCurrency": "UYU",
                            "seller": {
                                "@type": "Organization",
                                "name": "Textil Cabrera"
                            }
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Uruguay"
                        }
                    })}
                </script>
            </Helmet>
            
            <main role="main">
                <header className="category-header">
                    <h1>{data.h1}</h1>
                    <div className="category-intro">
                        <p>{data.content}</p>
                    </div>
                </header>
                
                <Banner num={data.banner} title={t(`${category}Banner`)} />
                
                <section className="category-products" aria-labelledby="products-title">
                    <h2 id="products-title" className="sr-only">Productos de {category}</h2>
                    <div className="products">
                        {data.products.map((productId, index) => (
                            <Product key={productId} num={productId} title={t(`Product${index + 1}.title`)}>
                                <p>{t(`Product${index + 1}.text1`)}</p>
                                <p>{t(`Product${index + 1}.text2`)}</p>
                            </Product>
                        ))}
                    </div>
                </section>
                
                <section className="category-benefits" aria-labelledby="benefits-title">
                    <h2 id="benefits-title">¿Por qué elegir {category} de Textil Cabrera?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <h3>✓ Calidad Garantizada</h3>
                            <p>Más de 30 años fabricando productos textiles de calidad en Uruguay</p>
                        </div>
                        <div className="benefit-item">
                            <h3>✓ Envíos a Todo el País</h3>
                            <p>Distribución nacional con envíos gratuitos de Pando a Montevideo</p>
                        </div>
                        <div className="benefit-item">
                            <h3>✓ Productos Sustentables</h3>
                            <p>Reciclaje textil responsable, contribuyendo al cuidado del medio ambiente</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export { ProductCategory };