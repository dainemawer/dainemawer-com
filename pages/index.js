import React from 'react'
import Banner from '../components/Banner/Banner'
import Layout from '../components/Layout/Layout'

const Home = () => {
    return (
        <Layout>
            <h1>Home</h1>
            <Banner background="rgba(185,141,79, 0.28)" />
        </Layout>
    );
}

export default Home