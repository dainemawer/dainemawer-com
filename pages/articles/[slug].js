/**
 * ✂️ Projects (Single)
 *
 * Renders the Projects (Single) Post Template
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Internal
import Contentful from "@lib/contentful"

// Components
import Author from '@components/Author/Author'
import Hero from '@components/Hero/Hero'
import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'

// Styles
import styles from "@components/Masonry/Masonry.module.scss"

const options = {
    renderNode: {
        'embedded-asset-block': (node) => (
            <picture>
                <source srcSet={`${node.data.target.fields.file.url}?fm=webp&q=60`} type='image/webp' />
                <source srcSet={`${node.data.target.fields.file.url}?q=60`} type='image/jpg' />
                <img className={styles.image} src={`${node.data.target.fields.file.url}?q=60`} loading="lazy" alt="" />
            </picture>
        )
    }
}

const Article = ({ article }) => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <>
            <Meta
                title={`${article.title} | Daine Mawer`}
                description={article.excerpt}
                url={`https://dainemawer.com/${slug}`}
            />
            <Layout>
                <article itemScope itemType="https://schema.org/BlogPosting" className="page-project">
                    <Hero title={article.title} subtitle={article.excerpt} />
                    <div itemProp="mainEntityOfPage">
                        <header>
                            <div>
                                <time dateTime={article.published}>{article.published}</time>
                            </div>
                            <picture>
                                <source srcSet={`${article.hero.url}?fm=webp&q=60`} type='image/webp' />
                                <source srcSet={`${article.hero.url}?q=60`} type='image/jpg' />
                                <img className={styles.image} src={`${article.hero.url}?q=60`} loading="lazy" alt={article.hero.description} />
                            </picture>
                            <meta itemProp="url" content={article.hero.url} />
                            <meta itemProp="width" content={article.hero.width} />
                            <meta itemProp="height" content={article.hero.height} />
                        </header>
                        <div itemProp="articleBody">
                            {documentToReactComponents(article.content, options)}
                        </div>
                        <footer>
                            <p className="screen-reader-text">
                                <span itemProp="datePublished">
                                    <time dateTime={article.published}>{article.published}</time>
                                </span>
                                <span itemProp="dateModified">
                                    <time dateTime={article.modified}>{article.modified}</time>
                                </span>
                            </p>
                        </footer>
                        <Author />
                    </div>
                </article>
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    const api = new Contentful('articles');
    const article = await api.getEntryBySlug(context.query.slug);
    return {
        props: { article }
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string,
        excerpt: PropTypes.string,
        published: PropTypes.string,
        modified: PropTypes.string,
        hero: PropTypes.shape({
            description: PropTypes.string,
            url: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number,
        })
    }).isRequired
}

export default Article;