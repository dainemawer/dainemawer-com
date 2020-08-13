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
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Internal
import Contentful from "@lib/contentful";

// Components
import Info from '@components/Info/Info'
import Hero from '@components/Hero/Hero'
import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import ArticleFooter from '@components/Article/ArticleFooter'
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

const Project = ({ project }) => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <>
            <Meta
                title={`${project.title} | Daine Mawer`}
                description={project.excerpt}
                url={`https://dainemawer.com/${slug}`}
            />
            <Layout>
                <article itemScope itemType="https://schema.org/BlogPosting" className="page-project">
                    <Hero title={project.title} subtitle={project.excerpt} />
                    <div itemProp="mainEntityOfPage">
                        <header>
                            <picture>
                                <source srcSet={`${project.hero.url}?fm=webp&q=60`} type='image/webp' />
                                <source srcSet={`${project.hero.url}?q=60`} type='image/jpg' />
                                <img className={styles.image} src={`${project.hero.url}?q=60`} loading="lazy" alt={project.hero.description} />
                            </picture>
                            <meta itemProp="url" content={project.hero.url} />
                            <meta itemProp="width" content={project.hero.width} />
                            <meta itemProp="height" content={project.hero.height} />
                        </header>
                        <section className="project-content">
                            <Info client={project.client} agency={project.agency} role={project.role} date={project.date} />
                            <div itemProp="articleBody">
                                {documentToReactComponents(project.content, options)}
                            </div>
                        </section>
                        <ArticleFooter published={project.published} modified={project.modified} />
                    </div>
                </article>
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    const api = new Contentful('projects');
    const project = await api.getEntryBySlug(context.query.slug);
    return {
        props: { project }
    }
}

Project.propTypes = {
    project: PropTypes.shape({
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

export default Project;