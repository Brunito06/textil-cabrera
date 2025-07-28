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
            title: 'Usos y Aplicaciones de la Estopa Industrial en Uruguay',
            excerpt: 'Descubre los múltiples usos de la estopa en la industria uruguaya, desde limpieza hasta pulido de superficies delicadas.',
            date: '2024-01-15',
            category: 'Estopa',
            readTime: '5 min'
        },
        {
            id: 'guia-trapos-industriales',
            title: 'Guía Completa de Trapos Industriales: Tipos y Aplicaciones',
            excerpt: 'Todo lo que necesitas saber sobre trapos industriales, sus características y cuál elegir según tu necesidad.',
            date: '2024-01-10',
            category: 'Trapos',
            readTime: '7 min'
        },
        {
            id: 'beneficios-reciclaje-textil',
            title: 'Beneficios del Reciclaje Textil para la Industria Uruguaya',
            excerpt: 'Conoce cómo el reciclaje textil contribuye a la sostenibilidad y reduce costos en la industria.',
            date: '2024-01-05',
            category: 'Sustentabilidad',
            readTime: '6 min'
        },
        {
            id: 'guata-siliconada-aplicaciones',
            title: 'Guata Siliconada: Características y Aplicaciones Industriales',
            excerpt: 'Aprende sobre las propiedades únicas de la guata siliconada y sus usos en diferentes industrias.',
            date: '2023-12-28',
            category: 'Guata',
            readTime: '4 min'
        }
    ];

    return (
        <div className="blogPage">
            <Helmet>
                <title>Blog Textil Cabrera - Guías y Consejos sobre Productos Industriales Uruguay</title>
                <meta name="description" content="Blog especializado en productos textiles industriales en Uruguay. Guías, consejos y aplicaciones de estopa, trapos, guata y TNT. Información técnica y práctica." />
                <meta name="keywords" content="blog textil uruguay, guías estopa uruguay, consejos trapos industriales, aplicaciones guata, reciclaje textil uruguay" />
                <link rel="canonical" href="https://textilcabrera.com/blog" />
                
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "Blog Textil Cabrera",
                        "description": "Blog especializado en productos textiles industriales en Uruguay",
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
                    <h1>Blog Textil Cabrera</h1>
                    <p>Guías, consejos y novedades sobre productos textiles industriales en Uruguay</p>
                </header>

                <section className="blog-posts" aria-labelledby="posts-title">
                    <h2 id="posts-title" className="sr-only">Artículos del blog</h2>
                    <div className="posts-grid">
                        {blogPosts.map(post => (
                            <article key={post.id} className="blog-post-card">
                                <div className="post-meta">
                                    <span className="post-category">{post.category}</span>
                                    <span className="post-date">{new Date(post.date).toLocaleDateString('es-UY')}</span>
                                </div>
                                <h3>
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h3>
                                <p className="post-excerpt">{post.excerpt}</p>
                                <div className="post-footer">
                                    <span className="read-time">{post.readTime} de lectura</span>
                                    <Link to={`/blog/${post.id}`} className="read-more">Leer más →</Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="blog-categories" aria-labelledby="categories-title">
                    <h2 id="categories-title">Categorías</h2>
                    <div className="categories-grid">
                        <Link to="/estopa" className="category-card">
                            <h3>Estopa Uruguay</h3>
                            <p>Todo sobre estopa industrial, tipos y aplicaciones</p>
                        </Link>
                        <Link to="/trapos" className="category-card">
                            <h3>Trapos Industriales</h3>
                            <p>Guías sobre trapos para limpieza industrial</p>
                        </Link>
                        <Link to="/guata" className="category-card">
                            <h3>Guata Siliconada</h3>
                            <p>Información sobre guata y sus usos</p>
                        </Link>
                        <Link to="/tnt" className="category-card">
                            <h3>TNT Uruguay</h3>
                            <p>Trapos no tejidos y sus aplicaciones</p>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export { Blog };