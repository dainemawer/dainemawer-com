import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../components/Banner/Banner'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout/Layout'
import Meta from '../components/Meta/Meta'
import Contentful from "../lib/contentful";
import {filterItems} from '../lib/filter';
import dynamic from 'next/dynamic'

const Masonry = dynamic(() => import('../components/Masonry/Masonry'), { loading: () => <p>Loading...</p> });

const Home = ({ articles, projects }) => {

    const filteredProjects = filterItems(projects);
    const filteredArticles = filterItems(articles);
    const items = [...filteredArticles, ...filteredProjects];

    return (
        <>
            <Meta
                title="Home | Daine Mawer"
                description="I build accessible front-ends for the industries biggest brands."
                url="https://dainemawer.com"
            />
            <Layout>
                <Hero title="Hej! I’m Daine." subtitle="I build accessible front-ends for the industries biggest brands." />
                {items && <Masonry items={items} />}
                <Banner background="rgba(185,141,79, 0.28)" />
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    const BlogAPI = new Contentful('articles');
    const ProjectAPI = new Contentful('projects');

    const articles = await BlogAPI.fetchEntries();
    const projects = await ProjectAPI.fetchEntries();

    return {props: { articles, projects } };
};

export default Home