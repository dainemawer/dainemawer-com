/**
 * 📦 Projects
 *
 * Renders the Projects Page Template.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { useSession, getSession } from 'next-auth/client'

// Internal
import Contentful from "@lib/contentful"

// Lib
import { filterItems } from "@lib/private"

// Components
import Access from '@components/Access/Access'
import Banner from '@components/Banner/Banner'
import Hero from '@components/Hero/Hero'
import Layout from '@components/Layout/Layout'
import Loading from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'

// Dynamic Components
const Masonry = dynamic(() => import('@components/Masonry/Masonry'), { loading: () => <Loading /> });

const Projects = ({ projects }) => {
    const [ session, ] = useSession()
    const getPrivateItems = filterItems(projects, session, true);

    return (
        <>
            <Meta
                title="Projects | Daine Mawer"
                description="A collection of some of the work I’m most proud of."
                url="https://dainemawer.com/projects"
            />
            <Layout>
                <Hero title="Projects." subtitle="A collection of some of the work I’m most proud of." />
                {projects && <Masonry items={getPrivateItems} />}
                {!session && <Access />}
                <Banner background="rgba(185,141,79, 0.28)" />
            </Layout>
        </>
    )
};

export async function getServerSideProps(context) {
    const session = await getSession(context)
    const ProjectsAPI = new Contentful('projects');
    const projects = await ProjectsAPI.fetchEntries();
    return {
        props: { projects, session }
    }
}

Projects.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            agency: PropTypes.string,
            client: PropTypes.string,
            content: PropTypes.shape({
                content: PropTypes.array,
                data: PropTypes.object,
                nodeType: PropTypes.string,
            }),
            date: PropTypes.string,
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
                width: PropTypes.number,
            }),
            hidden: PropTypes.bool,
            id: PropTypes.number,
            role: PropTypes.string,
            slug: PropTypes.string,
            title: PropTypes.string,
            type: PropTypes.string,
        })
    ).isRequired
}

export default Projects;