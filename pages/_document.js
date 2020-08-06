import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { TypographyStyle } from 'react-typography'
import typography from '../util/typography'

class MyDocument extends Document {
    render() {
        return(
            <Html lang="en" prefix='og: http://ogp.me/ns#'>
                <Head>
                    <meta name="theme-color" content="#ffffff" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

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