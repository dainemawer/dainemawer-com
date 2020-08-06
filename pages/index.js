import React from 'react'
import Banner from '../components/Banner/Banner'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout/Layout'
import Meta from '../components/Meta/Meta'

const Home = () => {
    return (
        <>
            <Meta
                title="Home | Daine Mawer"
                description="I build accessible front-ends for the industries biggest brands."
                url="https://dainemawer.com"
            />
            <Layout>
                <Hero title="Hej! I’m Daine." subtitle="I build accessible front-ends for the industries biggest brands." />
                <Banner background="rgba(185,141,79, 0.28)" />
            </Layout>
        </>
    );
}

export default Home