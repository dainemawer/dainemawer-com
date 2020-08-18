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
            content: PropTypes.shape({
                content: PropTypes.array,
                data: PropTypes.object,
                nodeType: PropTypes.string,
            }),
            excerpt: PropTypes.string,
            featured: PropTypes.shape({
                description: PropTypes.string,
                height: PropTypes.number,
                title: PropTypes.string,
                url: PropTypes.string,
                width: PropTypes.number,
            }),
            hero: PropTypes.shape({
                description: PropTypes.string,
                height: PropTypes.number,
                title: PropTypes.string,
                url: PropTypes.string,
                width: PropTypes.number
            }),
            id: PropTypes.number,
            modified: PropTypes.string,
            published: PropTypes.string,
            slug: PropTypes.string,
            title: PropTypes.string,
            type: PropTypes.string
        })
    ).isRequired
}

export default Articles;