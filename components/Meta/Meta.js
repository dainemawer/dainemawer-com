/**
 * 🧱 Masonry
 *
 * A CSS Grid-based masonry
 * layout that shows latest content
 * on the Home page.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Meta = ({ title, description, url }) => (
    <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:image" content="/og-image.png" />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Daine Mawer | Frontend Engineer" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@dainemawer" />
            <meta name="twitter:creator" content="@dainemawer" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content="Daine Mawer | Frontend Engineer" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="/og-image.png" />
    </Head>
);

Meta.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
}

Meta.defaultProps = {
    description: '',
    title: '',
    url: ''
}

export default Meta;