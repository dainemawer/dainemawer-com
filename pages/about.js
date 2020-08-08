/**
 * 🙋‍♂️ About
 *
 * Renders the About Page Template.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */
import React from 'react';

import Content from '@components/About/Content'
import Certifications from '@components/About/Certifications'
import Banner from '@components/Banner/Banner'
import Hero from '@components/Hero/Hero'
import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'

const About = () => (
    <>
        <Meta
            title="About | Daine Mawer"
            description="I’m an avid adventurer, traveler, minimalist and coffee snob."
            url="https://dainemawer.com/about"
        />
        <Layout>
            <Hero title="About me." subtitle="I’m an avid adventurer, traveler, minimalist and coffee snob." />
            <article itemScope itemType="https://schema.org/BlogPosting" className="page-content">
                <Content />
            </article>
            <Certifications title="🔖 Certifications" />
            <Banner background="rgba(185,141,79, 0.28)" />
        </Layout>
    </>
);

export default About;