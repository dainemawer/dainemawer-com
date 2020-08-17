/**
 * 🙅‍♂️ Home
 *
 * Renders the Home Page Template.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { useSession, getSession } from 'next-auth/client'

// Internal
import Contentful from "@lib/contentful"
import {filterItems} from '@lib/private'

// Components
import Banner from '@components/Banner/Banner'
import Hero from '@components/Hero/Hero'
import Layout from '@components/Layout/Layout'
import Loading from '@components/Loading/Loading'
import Meta from '@components/Meta/Meta'
import Splash from '@components/Splash/Splash'

// Dynamic Components
const Masonry = dynamic(() => import('@components/Masonry/Masonry'), { loading: () => <Loading /> });

const Home = ({ articles, projects }) => {
    const [isLoading, setLoading] = useState(true);
    const [ session, loading ] = useSession()
    const filteredProjects = filterItems(projects, session, true);
    const items = [...articles, ...filteredProjects];

    useEffect(() => {
        setTimeout( () => {
            setLoading(false)
        }, 2000 )
    })

    return (
        <>
            <Meta
                title="Home | Daine Mawer"
                description="I build accessible front-ends for the industries biggest brands."
                url="https://dainemawer.com"
            />
            {isLoading ? (
                <Splash />
            ) : (
                <Layout>
                    <Hero title="Hej! I’m Daine." subtitle="I build accessible front-ends for the industries biggest brands." />
                    {items && <Masonry items={items} />}
                    <Banner background="rgba(185,141,79, 0.28)" />
                </Layout>
            )}

        </>
    );
}

Home.propTypes = {
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
    ),
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
    ),
}

export async function getServerSideProps(context) {
    const BlogAPI = new Contentful('articles');
    const ProjectAPI = new Contentful('projects');

    const articles = await BlogAPI.fetchEntries();
    const projects = await ProjectAPI.fetchEntries();
    const session = await getSession(context)

    return {props: { session, articles, projects } };
};

export default Home