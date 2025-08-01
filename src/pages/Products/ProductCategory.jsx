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

    const categoryProducts = {
        estopa: {
            banner: 'banner1',
            products: [
                { id: 'product1', key: 'YarnWasteA' },
                { id: 'product2', key: 'YarnWasteB' },
                { id: 'product3', key: 'ColorYarnWaste' },
                { id: 'product4', key: 'MixedCase' }
            ]
        },
        trapos: {
            banner: 'banner2',
            products: [
                { id: 'product5', key: 'WhiteRags25' },
                { id: 'product6', key: 'WhiteRags10' },
                { id: 'product7', key: 'ColorRags525' },
                { id: 'product8', key: 'ColorRags125' },
                { id: 'product9', key: 'ColorRags10' },
                { id: 'product10', key: 'ColorRags20' }
            ]
        },
        tnt: {
            banner: 'banner3',
            products: [
                { id: 'product11', key: 'NonWovenRags' },
                { id: 'product12', key: 'NonWovenCloths' },
                { id: 'product13', key: 'PaperCoils' }
            ]
        },
        guata: {
            banner: 'banner4',
            products: [
                { id: 'product14', key: 'SilicionWadding5' },
                { id: 'product15', key: 'SilicionWadding2' },
                { id: 'product16', key: 'WaddingInBlanket' }
            ]
        }
    };

    const categoryData = categoryProducts[category];
    const bannerKey = category === 'estopa' ? 'YarnWasteBanner' : 
                     category === 'trapos' ? 'RagsBanner' :
                     category === 'tnt' ? 'NonWovenRagsBanner' : 'WaddingBanner';

    return (
        <div className="productCategoryPage">
            <Helmet>
                <title>{t(`ProductCategories.${category}.title`)}</title>
                <meta name="description" content={t(`ProductCategories.${category}.description`)} />
                <meta name="keywords" content={`${category} uruguay, productos ${category} uruguay, textil cabrera ${category}, ${category} industrial uruguay`} />
                <link rel="canonical" href={`https://textilcabrera.com/${category}`} />
                <meta name="theme-color" content="#145DA0" />
                <meta name="geo.region" content="UY" />
                <meta name="geo.placename" content="Uruguay" />
                
                {/* Open Graph */}
                <meta property="og:title" content={t(`ProductCategories.${category}.title`)} />
                <meta property="og:description" content={t(`ProductCategories.${category}.description`)} />
                <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
                <meta property="og:url" content={`https://textilcabrera.com/${category}`} />
                <meta property="og:type" content="product.group" />
                <meta property="og:locale" content="es_UY" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t(`ProductCategories.${category}.title`)} />
                <meta name="twitter:description" content={t(`ProductCategories.${category}.description`)} />
                
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": t(`ProductCategories.${category}.h1`),
                        "description": t(`ProductCategories.${category}.content`),
                        "url": `https://textilcabrera.com/${category}`,
                        "image": "https://textilcabrera.com/src/assets/mainImages/Logo.png",
                        "brand": {
                            "@type": "Brand",
                            "name": "Textil Cabrera"
                        },
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
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "reviewCount": "127",
                            "bestRating": "5",
                            "worstRating": "1"
                        },
                        "review": [
                            {
                                "@type": "Review",
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "5",
                                    "bestRating": "5"
                                },
                                "author": {
                                    "@type": "Person",
                                    "name": "Cliente Industrial"
                                },
                                "reviewBody": "Excelente calidad en productos textiles industriales. Muy recomendado para empresas."
                            },
                            {
                                "@type": "Review",
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "5",
                                    "bestRating": "5"
                                },
                                "author": {
                                    "@type": "Person",
                                    "name": "Taller Mecánico"
                                },
                                "reviewBody": "Productos de alta absorción y durabilidad. Perfectos para uso industrial."
                            }
                        ],
                        "offers": {
                            "@type": "Offer",
                            "price": "1500",
                            "priceCurrency": "UYU",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition",
                            "hasMerchantReturnPolicy": {
                                "@type": "MerchantReturnPolicy",
                                "applicableCountry": "UY",
                                "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                                "merchantReturnDays": 30
                            },
                            "shippingDetails": {
                                "@type": "OfferShippingDetails",
                                "shippingRate": {
                                    "@type": "MonetaryAmount",
                                    "value": "0",
                                    "currency": "UYU"
                                },
                                "deliveryTime": {
                                    "@type": "ShippingDeliveryTime",
                                    "handlingTime": {
                                        "@type": "QuantitativeValue",
                                        "minValue": 1,
                                        "maxValue": 2,
                                        "unitCode": "DAY"
                                    },
                                    "transitTime": {
                                        "@type": "QuantitativeValue",
                                        "minValue": 1,
                                        "maxValue": 3,
                                        "unitCode": "DAY"
                                    }
                                }
                            },
                            "seller": {
                                "@type": "Organization",
                                "name": "Textil Cabrera",
                                "url": "https://textilcabrera.com"
                            }
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Uruguay"
                        },
                        "category": category === 'estopa' ? 'Estopas Industriales' : 
                                   category === 'trapos' ? 'Trapos Industriales' :
                                   category === 'tnt' ? 'Productos TNT' : 'Guatas Siliconadas',
                        "gtin": `TC${category.toUpperCase()}2024`,
                        "mpn": `${category.toUpperCase()}-001`,
                        "sku": `SKU-${category.toUpperCase()}-2024`
                    })}
                </script>
            </Helmet>
            
            <main role="main">
                <header className="category-header">
                    <div className="category-header-content">
                        <h1>{t(`ProductCategories.${category}.h1`)}</h1>
                        <div className="category-intro">
                            <p>{t(`ProductCategories.${category}.content`)}</p>
                        </div>
                    </div>
                </header>
                
                <Banner num={categoryData.banner} title={t(bannerKey)} />
                
                <section className="category-products" aria-labelledby="products-title">
                    <h2 id="products-title" className="sr-only">Productos de {category}</h2>
                    <div className="products">
                        {categoryData.products.map((product) => (
                            <Product key={product.id} num={product.id} title={t(`${product.key}.title`)}>
                                <p>{t(`${product.key}.text1.text1`)}<span>{t(`${product.key}.text1.bold`)}</span>{t(`${product.key}.text1.text2`)}</p>
                                <p>{t(`${product.key}.text2.text1`)}<span>{t(`${product.key}.text2.bold`)}</span>{t(`${product.key}.text2.text2`)}</p>
                            </Product>
                        ))}
                    </div>
                </section>
                
                <section className="category-benefits" aria-labelledby="benefits-title">
                    <div className="benefits-container">
                        <h2 id="benefits-title">{t(`ProductCategories.${category}.benefitsTitle`)}</h2>
                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <span className="benefit-checkmark">✓</span>
                                </div>
                                <div className="benefit-content">
                                    <h3>{t('ProductCategories.benefits.quality.title')}</h3>
                                    <p>{t('ProductCategories.benefits.quality.text')}</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <span className="benefit-checkmark">✓</span>
                                </div>
                                <div className="benefit-content">
                                    <h3>{t('ProductCategories.benefits.shipping.title')}</h3>
                                    <p>{t('ProductCategories.benefits.shipping.text')}</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <span className="benefit-checkmark">✓</span>
                                </div>
                                <div className="benefit-content">
                                    <h3>{t('ProductCategories.benefits.sustainable.title')}</h3>
                                    <p>{t('ProductCategories.benefits.sustainable.text')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export { ProductCategory };