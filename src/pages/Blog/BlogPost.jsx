import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import './BlogPost.css';

export const BlogPost = () => {
  const { postId } = useParams();
  const { t } = useTranslation();

  // Blog posts data
  const blogPosts = {
    'usos-estopa-industrial': {
      title: t('blog.posts.estopa.title'),
      content: t('blog.posts.estopa.content'),
      category: t('blog.categories.estopa'),
      date: '2024-01-15',
      metaDescription: t('blog.posts.estopa.metaDescription')
    },
    'beneficios-trapos-industriales': {
      title: t('blog.posts.trapos.title'),
      content: t('blog.posts.trapos.content'),
      category: t('blog.categories.trapos'),
      date: '2024-01-10',
      metaDescription: t('blog.posts.trapos.metaDescription')
    },
    'guia-guata-siliconada': {
      title: t('blog.posts.guata.title'),
      content: t('blog.posts.guata.content'),
      category: t('blog.categories.guata'),
      date: '2024-01-05',
      metaDescription: t('blog.posts.guata.metaDescription')
    },
    'aplicaciones-tnt-uruguay': {
      title: t('blog.posts.tnt.title'),
      content: t('blog.posts.tnt.content'),
      category: t('blog.categories.tnt'),
      date: '2024-01-01',
      metaDescription: t('blog.posts.tnt.metaDescription')
    }
  };

  const post = blogPosts[postId];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-post">
      <Helmet>
        <title>{post.title} - Textil Cabrera</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.metaDescription,
            "author": {
              "@type": "Organization",
              "name": "Textil Cabrera"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Textil Cabrera",
              "logo": {
                "@type": "ImageObject",
                "url": "https://textilcabrera.com/src/assets/mainImages/Logo.png"
              }
            },
            "datePublished": post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://textilcabrera.com/blog/${postId}`
            }
          })}
        </script>
      </Helmet>

      <div className="blog-post-container">
        <header className="blog-post-header">
          <div className="blog-post-meta">
            <span className="blog-post-category">{post.category}</span>
            <span className="blog-post-date">{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <h1 className="blog-post-title">{post.title}</h1>
        </header>

        <article className="blog-post-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <footer className="blog-post-footer">
          <a href="/blog" className="back-to-blog">
            ← {t('blog.backToBlog')}
          </a>
        </footer>
      </div>
    </div>
  );
};