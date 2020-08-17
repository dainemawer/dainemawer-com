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

// Components
import Banner from '@components/Banner/Banner'
import Hero from '@components/Hero/Hero'
import Layout from '@components/Layout/Layout'
import Loading from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'

// Dynamic Components
const Masonry = dynamic(() => import('@components/Masonry/Masonry'), { loading: () => <Loading /> });

const Projects = ({ projects }) => {
    const [ session, loading ] = useSession()
    return (
        <>
            <Meta
                title="Projects | Daine Mawer"
                description="A collection of some of the work I’m most proud of."
                url="https://dainemawer.com/projects"
            />
            <Layout>
                <Hero title="Projects." subtitle="A collection of some of the work I’m most proud of." />
                {session ? (
                    <>
                        {projects && <Masonry items={projects} />}
                        <Banner background="rgba(185,141,79, 0.28)" />
                    </>
                ) : (
                      <p>Sorry, you cant access that page.</p>
                )}
            </Layout>
        </>
    )
};

export async function getServerSideProps(context) {
    const session = await getSession(context)
    const ProjectsAPI = new Contentful('projects');
    const projects = await ProjectsAPI.fetchEntries();
    return {
        props: { session, projects }
    }
}

Projects.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            hidden: PropTypes.bool,
            excerpt: PropTypes.string,
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
            }),
            content: PropTypes.shape({
                data: PropTypes.object,
                content: PropTypes.array,
                nodeType: PropTypes.string,
            }),
            client: PropTypes.string,
            agency: PropTypes.string,
            date: PropTypes.string,
            role: PropTypes.string,
            id: PropTypes.number,
            slug: PropTypes.string,
            type: PropTypes.string,
        })
    ).isRequired
}

export default Projects;