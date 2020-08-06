/**
 * 📦 Projects
 *
 * Renders the Projects Page Template.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic'
import Contentful from "../lib/contentful";

import Banner from '../components/Banner/Banner'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout/Layout'
import Meta from '../components/Meta/Meta'

const Masonry = dynamic(() => import('../components/Masonry/Masonry'), { loading: () => <p>Loading...</p> });


/**
 * Projects Page
 *
 * @returns {null}
 * @constructor
 */
const Projects = ({ projects }) => {

    return (
        <>
            <Meta
                title="Projects | Daine Mawer"
                description="A collection of some of the work I’m most proud of."
                url="https://dainemawer.com/projects"
            />
            <Layout>
                <Hero title="Projects." subtitle="A collection of some of the work I’m most proud of." />
                {projects && <Masonry items={projects} />}
                <Banner background="rgba(185,141,79, 0.28)" />
            </Layout>
        </>
    );
}

export async function getServerSideProps() {
    const ProjectsAPI = new Contentful('projects');
    const projects = await ProjectsAPI.fetchEntries();
    return {
        props: { projects }
    }
}

Projects.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({}))
}

Projects.defaultProps = {
    projects: []
}

export default Projects;