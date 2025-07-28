//import react helmet
import { Helmet } from 'react-helmet';

//import styles
import './Blog.css';

//translation
import { useTranslation } from 'react-i18next';

//import react router
import { Link } from 'react-router-dom';

const Blog = () => {
    const { t } = useTranslation();

    const blogPosts = [
        {
            id: 'usos-estopa-industrial',
            title: t('i18n.language') === 'es' ? 'Usos y Aplicaciones de la Estopa Industrial en Uruguay' : 'Uses and Applications of Industrial Yarn Waste in Uruguay',
            excerpt: t('i18n.language') === 'es' ? 'Descubre los múltiples usos de la estopa en la industria uruguaya, desde limpieza hasta pulido de superficies delicadas.' : 'Discover the multiple uses of yarn waste in Uruguayan industry, from cleaning to polishing delicate surfaces.',
            date: '2024-01-15',
            category: t('i18n.language') === 'es' ? 'Estopa' : 'Yarn Waste',
            readTime: '5'
        },
        {
            id: 'guia-trapos-industriales',
            title: t('i18n.language') === 'es' ? 'Guía Completa de Trapos Industriales: Tipos y Aplicaciones' : 'Complete Guide to Industrial Rags: Types and Applications',
            excerpt: t('i18n.language') === 'es' ? 'Todo lo que necesitas saber sobre trapos industriales, sus características y cuál elegir según tu necesidad.' : 'Everything you need to know about industrial rags, their characteristics and which to choose according to your need.',
            date: '2024-01-10',
            category: t('i18n.language') === 'es' ? 'Trapos' : 'Rags',
            readTime: '7'
        },
        {
            id: 'beneficios-reciclaje-textil',
            title: t('i18n.language') === 'es' ? 'Beneficios del Reciclaje Textil para la Industria Uruguaya' : 'Benefits of Textile Recycling for Uruguayan Industry',
            excerpt: t('i18n.language') === 'es' ? 'Conoce cómo el reciclaje textil contribuye a la sostenibilidad y reduce costos en la industria.' : 'Learn how textile recycling contributes to sustainability and reduces costs in industry.',
            date: '2024-01-05',
            category: t('i18n.language') === 'es' ? 'Sustentabilidad' : 'Sustainability',
            readTime: '6'
        },
        {
            id: 'guata-siliconada-aplicaciones',
            title: t('i18n.language') === 'es' ? 'Guata Siliconada: Características y Aplicaciones Industriales' : 'Silicone Wadding: Characteristics and Industrial Applications',
            excerpt: t('i18n.language') === 'es' ? 'Aprende sobre las propiedades únicas de la guata siliconada y sus usos en diferentes industrias.' : 'Learn about the unique properties of silicone wadding and its uses in different industries.',
            date: '2023-12-28',
            category: t('i18n.language') === 'es' ? 'Guata' : 'Wadding',
            readTime: '4'
        }
    ];

    return (
        <div className="blogPage">
            <Helmet>
                <title>{t('Blog.title')} - {t('i18n.language') === 'es' ? 'Guías y Consejos sobre Productos Industriales Uruguay' : 'Guides and Tips on Industrial Products Uruguay'}</title>
                <meta name="description" content={t('i18n.language') === 'es' ? 'Blog especializado en productos textiles industriales en Uruguay. Guías, consejos y aplicaciones de estopa, trapos, guata y TNT. Información técnica y práctica.' : 'Blog specialized in industrial textile products in Uruguay. Guides, tips and applications of yarn waste, rags, wadding and TNT. Technical and practical information.'} />
                <meta name="keywords" content={t('i18n.language') === 'es' ? 'blog textil uruguay, guías estopa uruguay, consejos trapos industriales, aplicaciones guata, reciclaje textil uruguay' : 'textile blog uruguay, yarn waste guides uruguay, industrial rags tips, wadding applications, textile recycling uruguay'} />
                <link rel="canonical" href="https://textilcabrera.com/blog" />
                
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": t('Blog.title'),
                        "description": t('Blog.subtitle'),
                        "url": "https://textilcabrera.com/blog",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Textil Cabrera",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://textilcabrera.com/src/assets/mainImages/Logo.png"
                            }
                        },
                        "blogPost": blogPosts.map(post => ({
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "description": post.excerpt,
                            "url": `https://textilcabrera.com/blog/${post.id}`,
                            "datePublished": post.date,
                            "author": {
                                "@type": "Organization",
                                "name": "Textil Cabrera"
                            }
                        }))
                    })}
                </script>
            </Helmet>

            <main role="main">
                <header className="blog-header">
                    <div className="blog-header-content">
                        <h1>{t('Blog.title')}</h1>
                        <p>{t('Blog.subtitle')}</p>
                    </div>
                </header>

                <section className="blog-posts" aria-labelledby="posts-title">
                    <div className="blog-container">
                        <h2 id="posts-title" className="section-title">{t('Blog.postsTitle')}</h2>
                        <div className="posts-grid">
                            {blogPosts.map(post => (
                                <article key={post.id} className="blog-post-card">
                                    <div className="post-meta">
                                        <span className="post-category">{post.category}</span>
                                        <span className="post-date">{new Date(post.date).toLocaleDateString(t('i18n.language') === 'es' ? 'es-UY' : 'en-US')}</span>
                                    </div>
                                    <h3>
                                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                    </h3>
                                    <p className="post-excerpt">{post.excerpt}</p>
                                    <div className="post-footer">
                                        <span className="read-time">{post.readTime} {t('Blog.readTime')}</span>
                                        <Link to={`/blog/${post.id}`} className="read-more">{t('Blog.readMore')}</Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="blog-categories" aria-labelledby="categories-title">
                    <div className="blog-container">
                        <h2 id="categories-title" className="section-title">{t('Blog.categoriesTitle')}</h2>
                        <div className="categories-grid">
                            <Link to="/estopa" className="category-card">
                                <div className="category-icon">
                                    <span>🧵</span>
                                </div>
                                <div className="category-content">
                                    <h3>{t('Blog.categories.estopa.title')}</h3>
                                    <p>{t('Blog.categories.estopa.description')}</p>
                                </div>
                            </Link>
                            <Link to="/trapos" className="category-card">
                                <div className="category-icon">
                                    <span>🧽</span>
                                </div>
                                <div className="category-content">
                                    <h3>{t('Blog.categories.trapos.title')}</h3>
                                    <p>{t('Blog.categories.trapos.description')}</p>
                                </div>
                            </Link>
                            <Link to="/guata" className="category-card">
                                <div className="category-icon">
                                    <span>🛏️</span>
                                </div>
                                <div className="category-content">
                                    <h3>{t('Blog.categories.guata.title')}</h3>
                                    <p>{t('Blog.categories.guata.description')}</p>
                                </div>
                            </Link>
                            <Link to="/tnt" className="category-card">
                                <div className="category-icon">
                                    <span>🏭</span>
                                </div>
                                <div className="category-content">
                                    <h3>{t('Blog.categories.tnt.title')}</h3>
                                    <p>{t('Blog.categories.tnt.description')}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export { Blog };