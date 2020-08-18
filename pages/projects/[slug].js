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
import { useSession, getSession } from 'next-auth/client'

// Internal
import Contentful from "@lib/contentful";

// Components
import Access from '@components/Access/Access'
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
    const [ session, ] = useSession()
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
                    {!session && project.hidden ? (
                        <Access />
                    ) : (
                        <>
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
                        </>
                    )}
                </article>
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    const api = new Contentful('projects');
    const project = await api.getEntryBySlug(context.query.slug);
    const session = await getSession(context)

    return {
        props: { project, session }
    }
}

Project.propTypes = {
    project: PropTypes.shape({
        agency: PropTypes.string,
        client: PropTypes.string,
        content: PropTypes.shape({}),
        date: PropTypes.string,
        excerpt: PropTypes.string,
        hero: PropTypes.shape({
            description: PropTypes.string,
            height: PropTypes.number,
            url: PropTypes.string,
            width: PropTypes.number,
        }),
        hidden: PropTypes.bool,
        modified: PropTypes.string,
        published: PropTypes.string,
        role: PropTypes.string,
        title: PropTypes.string,
    }).isRequired
}

export default Project;