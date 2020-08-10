/**
 * 📦 Articles
 *
 * Renders the Articles Page Template.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

// Internal
import Contentful from "@lib/contentful"

// Components
import Banner from '@components/Banner/Banner'
import Hero from '@components/Hero/Hero'
import Layout from '@components/Layout/Layout'
import Loading from '@components/Loading/Loading'
import Meta from '@components/Meta/Meta'

// Dynamic Components
const Masonry = dynamic(() => import('@components/Masonry/Masonry'), { loading: () => <Loading /> });

/**
 * Projects Page
 *
 * @returns {null}
 * @constructor
 */
const Articles = ({ articles }) => (
    <>
        <Meta
            title="Articles | Daine Mawer"
            description="A collection of writing, articles and tutorials."
            url="https://dainemawer.com/articles"
        />
        <Layout>
            <Hero title="Articles." subtitle="A collection of writing, articles and tutorials." />
            {articles && <Masonry items={articles} />}
            <Banner background="rgba(185,141,79, 0.28)" />
        </Layout>
    </>
);

export async function getServerSideProps() {
    const ArticlesAPI = new Contentful('articles');
    const articles = await ArticlesAPI.fetchEntries();
    return {
        props: { articles }
    }
}

Articles.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            published: PropTypes.string,
            modified: PropTypes.string,
            id: PropTypes.number,
            title: PropTypes.string,
            excerpt: PropTypes.string,
            content: PropTypes.shape({
                data: PropTypes.object,
                content: PropTypes.array,
                nodeType: PropTypes.string,
            }),
            slug: PropTypes.string,
            type: PropTypes.string,
            hero: PropTypes.shape({
                description: PropTypes.string,
                title: PropTypes.string,
                url: PropTypes.string,
                height: PropTypes.number,
                width: PropTypes.number,
            }),
            featured: PropTypes.shape({
                description: PropTypes.string,
                title: PropTypes.string,
                url: PropTypes.string,
                height: PropTypes.number,
                width: PropTypes.number,
            })
        })
    ).isRequired
}

export default Articles;