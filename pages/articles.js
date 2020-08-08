/**
 * 📦 Articles
 *
 * Renders the Articles Page Template.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import Contentful from "@lib/contentful"

import Banner from '@components/Banner/Banner'
import Hero from '@components/Hero/Hero'
import Layout from '@components/Layout/Layout'
import Loading from '@components/Loading/Loading'
import Meta from '@components/Meta/Meta'

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
    articles: PropTypes.arrayOf(PropTypes.shape({}))
}

Articles.defaultProps = {
    articles: []
}

export default Articles;