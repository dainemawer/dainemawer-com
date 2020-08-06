/**
 * ✂️ Projects (Single)
 *
 * Renders the Projects (Single) Post Template
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import Contentful from "../../lib/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Info from '../../components/Info/Info'
import Hero from '../../components/Hero/Hero'
import Layout from '../../components/Layout/Layout'
import Meta from '../../components/Meta/Meta'

const options = {
    renderNode: {
        'embedded-asset-block': (node) => <img src={`${node.data.target.fields.file.url}?fm=webp&q=60`} />
    }
}

/**
 * Project Page
 *
 * @returns {null}
 * @constructor
 */
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
                    <Info client={project.client} agency={project.agency} role={project.role} date={project.date} />
                    <div itemProp="mainEntityOfPage">
                        <header>
                            <img src={`${project.hero.url}?fm=webp&q=60`} alt={project.hero.description} />
                            <meta itemProp="url" content={project.hero.url} />
                            <meta itemProp="width" content={project.hero.width} />
                            <meta itemProp="height" content={project.hero.height} />
                        </header>
                        <div itemProp="articleBody">
                            {documentToReactComponents(project.content, options)}
                        </div>
                        <footer>
                            <p className="screen-reader-text">
                                        <span itemProp="datePublished">
                                            <time dateTime={project.published}>{project.published}</time>
                                        </span>
                                <span itemProp="dateModified">
                                            <time dateTime={project.modified}>{project.modified}</time>
                                        </span>
                            </p>
                        </footer>
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

}

Project.defaultProps = {

}

export default Project;