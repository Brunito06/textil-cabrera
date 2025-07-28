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
            title: t('Blog.posts.estopa.title'),
            excerpt: t('Blog.posts.estopa.excerpt'),
            date: '2024-01-15',
            category: t('Blog.categories.estopa.title'),
            readTime: '8'
        },
        {
            id: 'guia-trapos-industriales',
            title: t('Blog.posts.trapos.title'),
            excerpt: t('Blog.posts.trapos.excerpt'),
            date: '2024-01-10',
            category: t('Blog.categories.trapos.title'),
            readTime: '10'
        },
        {
            id: 'beneficios-reciclaje-textil',
            title: t('Blog.posts.reciclaje.title'),
            excerpt: t('Blog.posts.reciclaje.excerpt'),
            date: '2024-01-05',
            category: t('Blog.posts.reciclaje.category'),
            readTime: '12'
        },
        {
            id: 'guata-siliconada-aplicaciones',
            title: t('Blog.posts.guata.title'),
            excerpt: t('Blog.posts.guata.excerpt'),
            date: '2023-12-28',
            category: t('Blog.categories.guata.title'),
            readTime: '6'
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