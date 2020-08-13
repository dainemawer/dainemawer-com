/**
 * 🖲 NextJS App
 *
 * Overrides the default App component
 * from NextJS.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */
import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'

import 'nprogress/nprogress.css'
import '@styles/global.scss'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ( { Component, pageProps } ) => <Component {...pageProps} />;

export default App;