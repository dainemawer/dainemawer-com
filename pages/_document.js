import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { TypographyStyle } from 'react-typography'
import typography from '../lib/typography'

class MyDocument extends Document {
    render() {
        return(
            <Html lang="en" prefix='og: http://ogp.me/ns#'>
                <Head>
                    <meta name="theme-color" content="#ffffff" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />

                    <link rel="mask-icon" href="/icons/apple/safari-pinned-tab.svg" color="#5bbad5" />
                    <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple/apple-touch-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple/apple-touch-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple/apple-touch-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple/apple-touch-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple/apple-touch-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple/apple-touch-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple/apple-touch-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple/apple-touch-icon-152x152.png" />

                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black" />


                    <link href='/manifest.json' rel='manifest' />
                    <meta name="msapplication-config" content="/browserconfig.xml" />

                    <TypographyStyle typography={typography} />

                </Head>
                <body itemScope itemType='http://schema.org/WebPage'>
                <Main />
                <NextScript />
                <noscript>
                    This website requires JavaScript to function.
                </noscript>
                </body>
            </Html>
        );
    }
}

export default MyDocument;